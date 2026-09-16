# Back up and restore a local NERDS SQL Server database with Podman

Use this runbook before making a test tasklist or importing test files that could change local
NERDS data.

> **Important:** This is only for a private, local SQL Server database running in a Podman
> container. Do not run the restore steps against DEV, QA, or any database shared with other
> people. A restore replaces the database contents.

## What this gives you

The workflow has two parts:

1. SQL Server writes a point-in-time database backup (`.bak`) inside its container.
2. Podman copies that file to your Mac Downloads folder, where it survives even if the container
   is removed.

When needed, copy the same file back into the container and restore it. After the restore, the
database is exactly as it was when the backup was made.

## Before starting

- Stop the local NERDS API before restoring. It may keep database connections open.
- Confirm the UI is pointing to your local API (`http://localhost:8080`), not a shared DEV API.
- Run the Podman commands in a terminal where `podman` is available.
- Replace `<mssql-container>` below with your running SQL Server container name.

To find that name:

```bash
podman ps --format '{{.Names}}\t{{.Image}}\t{{.Status}}'
```

For example, if the output starts with `nerds-mssql`, use `nerds-mssql` in every command below.

## Create a backup

### 1. Create a backup folder inside the container

```bash
podman exec <mssql-container> mkdir -p /var/opt/mssql/backup
```

This folder is inside the SQL Server container. SQL Server can write backup files there. If this
command reports a permission error, create the folder from Podman Desktop's container terminal as
the container administrator, then make it writable by the `mssql` user.

### 2. Confirm the database before backing it up

In DataGrip or another SQL Server client connected to the local database, run:

```sql
SELECT @@SERVERNAME AS server_name, DB_NAME() AS database_name;
```

The database name should be `nerds`, and the server should be your local Podman SQL Server.

### 3. Run the backup in the SQL client

Use a unique name each time. The example uses September 16, 2026; change it for the current test.

```sql
BACKUP DATABASE [nerds]
TO DISK = N'/var/opt/mssql/backup/nerds_before_aem_test_2026-09-16.bak'
WITH COPY_ONLY, INIT, COMPRESSION, STATS = 10;
```

What the options mean:

- `COPY_ONLY` creates an independent backup and does not affect a normal backup chain.
- `INIT` overwrites a backup file with the same name. Use a unique filename if you want to keep
  several snapshots.
- `COMPRESSION` makes the backup file smaller.
- `STATS = 10` reports progress every 10 percent.

The path is a **container path**, not a Mac path. SQL Server cannot write directly to
`/Users/.../Downloads`.

### 4. Copy the backup to the Mac Downloads folder

```bash
podman cp <mssql-container>:/var/opt/mssql/backup/nerds_before_aem_test_2026-09-16.bak \
  ~/Downloads/nerds_before_aem_test_2026-09-16.bak
```

Verify that the file arrived:

```bash
ls -lh ~/Downloads/nerds_before_aem_test_2026-09-16.bak
```

At this point it is safe to create a tasklist and run the repeat-import experiment.

## Restore the snapshot

> **Warning:** `WITH REPLACE` overwrites the current local `nerds` database. All changes made
> after the backup will be lost.

### 1. Stop the local API

Stop the NERDS API run configuration in IntelliJ. This prevents it from reconnecting while SQL
Server is in single-user mode.

### 2. Copy the backup file back into the container

```bash
podman cp ~/Downloads/nerds_before_aem_test_2026-09-16.bak \
  <mssql-container>:/var/opt/mssql/backup/nerds_before_aem_test_2026-09-16.bak
```

### 3. Verify that SQL Server can read the backup

In the SQL client, run:

```sql
RESTORE VERIFYONLY
FROM DISK = N'/var/opt/mssql/backup/nerds_before_aem_test_2026-09-16.bak';
```

This checks the backup file without changing the database. Continue only if it succeeds.

### 4. Restore the database

In the SQL client, run the complete block:

```sql
USE master;
ALTER DATABASE [nerds] SET SINGLE_USER WITH ROLLBACK IMMEDIATE;

RESTORE DATABASE [nerds]
FROM DISK = N'/var/opt/mssql/backup/nerds_before_aem_test_2026-09-16.bak'
WITH REPLACE, RECOVERY, STATS = 10;

ALTER DATABASE [nerds] SET MULTI_USER;
```

What this does:

- `SINGLE_USER WITH ROLLBACK IMMEDIATE` closes existing connections so SQL Server can restore.
- `WITH REPLACE` authorizes overwriting the current `nerds` database.
- `RECOVERY` brings the restored database online.
- `MULTI_USER` lets the local API connect again.

If the restore fails after the `SINGLE_USER` command, run this before troubleshooting so you can
connect normally again:

```sql
ALTER DATABASE [nerds] SET MULTI_USER;
```

### 5. Restart the local API

Start the NERDS API run configuration again and verify that it connects to the restored local
database.

## Safer alternative: restore a separate test database

If you want to preserve the current local `nerds` database, restore the backup as
`nerds_aem_test` instead. First inspect the logical file names stored in the backup:

```sql
RESTORE FILELISTONLY
FROM DISK = N'/var/opt/mssql/backup/nerds_before_aem_test_2026-09-16.bak';
```

Then substitute the returned logical names into this command:

```sql
RESTORE DATABASE [nerds_aem_test]
FROM DISK = N'/var/opt/mssql/backup/nerds_before_aem_test_2026-09-16.bak'
WITH
  MOVE N'<data-logical-name>' TO N'/var/opt/mssql/data/nerds_aem_test.mdf',
  MOVE N'<log-logical-name>' TO N'/var/opt/mssql/data/nerds_aem_test_log.ldf',
  RECOVERY,
  STATS = 10;
```

Finally, point your local API datasource at `nerds_aem_test` rather than `nerds`. This approach
lets you test without needing to restore the original database afterward.
