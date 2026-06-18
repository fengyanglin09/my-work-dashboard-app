# Import a SQL Server `.bacpac` File Using Podman on macOS

This guide documents the working steps for importing a SQL Server `.bacpac` file into a local SQL Server container using Podman on macOS.

## Context

SQL Server 2025 may fail on Apple Silicon when running through Podman emulation. A common workaround is to run SQL Server 2022 locally and import the database using `sqlpackage` from a `.bacpac` file instead of restoring a `.bak` backup.

A SQL Server `.bak` file from SQL Server 2025 cannot be restored into SQL Server 2022 because SQL Server backups are not backward-compatible. A `.bacpac` export/import is the recommended workaround when moving schema and data to an older compatible SQL Server version.

---

## 1. Remove Any Broken SQL Server 2025 Container

If you previously tried running SQL Server 2025 and it kept crashing, remove the container:

```bash
podman rm -f sql2025
```

If you previously created a SQL Server 2022 container and want a clean start, remove it too:

```bash
podman rm -f sql2022
```

---

## 2. Run SQL Server 2022 in Podman

Run SQL Server 2022 using the AMD64 image under emulation:

```bash
podman run -d \
  --name sql2022 \
  --platform linux/amd64 \
  -p 1433:1433 \
  -e ACCEPT_EULA=Y \
  -e MSSQL_SA_PASSWORD='Nerds1234!' \
  -e MSSQL_PID=Developer \
  mcr.microsoft.com/mssql/server:2022-latest
```

Notes:

- Use a strong password for `MSSQL_SA_PASSWORD`.
- SQL Server may reject weak passwords such as `nerds1234`.
- The password used above is an example; replace it as needed.

---

## 3. Confirm SQL Server Is Running

Check the container status:

```bash
podman ps
```

Check the logs:

```bash
podman logs -f sql2022
```

Wait until the logs show that SQL Server is ready for client connections.

---

## 4. Install `sqlpackage` on macOS

Homebrew may not provide `sqlpackage` as a formula. Download it directly from Microsoft:

```bash
curl -L -o sqlpackage.zip https://aka.ms/sqlpackage-macos
```

Extract it:

```bash
mkdir -p ~/sqlpackage
unzip sqlpackage.zip -d ~/sqlpackage
chmod +x ~/sqlpackage/sqlpackage
```

Verify the install:

```bash
~/sqlpackage/sqlpackage /Version
```

---

## 5. Fix macOS Gatekeeper Blocking `sqlpackage`

If macOS blocks `sqlpackage` or one of its DLL files with a message such as:

```text
Apple could not verify "sqlpackage" is free of malware.
```

or:

```text
Apple could not verify "System.Private.CoreLib.dll" is free of malware.
```

remove the quarantine flag from the whole extracted folder:

```bash
xattr -dr com.apple.quarantine ~/sqlpackage
```

Then verify again:

```bash
~/sqlpackage/sqlpackage /Version
```

If macOS still blocks it, go to:

```text
System Settings → Privacy & Security
```

Then click **Allow Anyway** for the blocked item and run the command again.

---

## 6. Import the `.bacpac` File

Example assumptions:

- BACPAC file: `/Users/lin.pengpeng/Downloads/nerds-local.bacpac`
- SQL Server host: `localhost,1433`
- Target database name: `nerds-local`
- SQL user: `sa`
- SQL password: `Nerds1234!`

Run:

```bash
~/sqlpackage/sqlpackage \
  /Action:Import \
  /SourceFile:"/Users/lin.pengpeng/Downloads/nerds-local.bacpac" \
  /TargetServerName:"localhost,1433" \
  /TargetDatabaseName:"nerds-local" \
  /TargetUser:"sa" \
  /TargetPassword:"Nerds1234!" \
  /TargetTrustServerCertificate:True
```

If your `.bacpac` file is in a different location, update `/SourceFile` accordingly.

---

## 7. If the Target Database Already Exists

If the import fails because the database already exists, drop the existing database first.

Connect to SQL Server using your preferred SQL client and run:

```sql
ALTER DATABASE [nerds-local] SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
DROP DATABASE [nerds-local];
GO
```

Then rerun the `sqlpackage /Action:Import` command.

---

## 8. Common Errors and Fixes

### Error: Login failed for user `sa`

This means the password in the import command does not match the password used when the SQL Server container was created.

Fix: recreate the container with a known password:

```bash
podman rm -f sql2022
```

```bash
podman run -d \
  --name sql2022 \
  --platform linux/amd64 \
  -p 1433:1433 \
  -e ACCEPT_EULA=Y \
  -e MSSQL_SA_PASSWORD='Nerds1234!' \
  -e MSSQL_PID=Developer \
  mcr.microsoft.com/mssql/server:2022-latest
```

Then rerun the import command using the same password.

### Error: SQL Server 2025 keeps crashing

On Apple Silicon, SQL Server 2025 may fail under Podman AMD64 emulation with an error similar to:

```text
assertion failed [x86_avx_state_ptr->xsave_header.xfeatures == kSupportedXFeatureBits]
(ThreadContextSignals.cpp:414 rt_sigreturn)
```

Workaround: use SQL Server 2022 locally, or run SQL Server 2025 on a real x86-64 Linux/Windows host.

### Error: Backup version is incompatible

Example:

```text
The database was backed up on a server running database version 998.
That version is incompatible with this server, which supports version 958.
```

This means a `.bak` file from SQL Server 2025 is being restored into SQL Server 2022. Use a `.bacpac` import instead, or restore the `.bak` on SQL Server 2025.

---

## 9. Useful Commands

List running containers:

```bash
podman ps
```

List all containers, including stopped ones:

```bash
podman ps -a
```

View SQL Server logs:

```bash
podman logs -f sql2022
```

Remove the SQL Server container:

```bash
podman rm -f sql2022
```

Check `sqlpackage` version:

```bash
~/sqlpackage/sqlpackage /Version
```

Remove macOS quarantine from `sqlpackage`:

```bash
xattr -dr com.apple.quarantine ~/sqlpackage
```

---

## Final Working Import Command

```bash
~/sqlpackage/sqlpackage \
  /Action:Import \
  /SourceFile:"/Users/lin.pengpeng/Downloads/nerds-local.bacpac" \
  /TargetServerName:"localhost,1433" \
  /TargetDatabaseName:"nerds-local" \
  /TargetUser:"sa" \
  /TargetPassword:"Nerds1234!" \
  /TargetTrustServerCertificate:True
```
