# SQL Server 2022 Developer on Mac (Apple Silicon M4) with Podman

> **Why SQL Server 2022 and not 2025?**
> SQL Server 2025 crashes on Apple Silicon (M1/M2/M3/M4) due to AVX CPU instruction incompatibility,
> even with Rosetta emulation. SQL Server 2022 Developer is stable, free, and fully featured for development.

---

## Prerequisites

- Mac with Apple M4 chip
- macOS 13 (Ventura) or later
- Homebrew installed ([brew.sh](https://brew.sh))
- At least 4GB of RAM to allocate to the container

---

## Step 1 — Install Rosetta 2

SQL Server only runs on x86 (Intel) architecture. Rosetta 2 lets your M4 chip translate Intel instructions.

```bash
softwareupdate --install-rosetta --agree-to-license
```

---

## Step 2 — Install Podman

```bash
brew install podman
```

Verify the install:

```bash
podman --version
```

---

## Step 3 — Initialize the Podman Machine with Rosetta

This creates a Linux VM that Podman uses to run containers. The key here is enabling Rosetta
emulation and running it as rootful (required for SQL Server).

```bash
podman machine init \
  --cpus 2 \
  --memory 4096 \
  --rootful
```

Enable Rosetta emulation on the machine:

```bash
podman machine set --rootful
```

Start the machine:

```bash
podman machine start
```

Verify it's running:

```bash
podman machine list
```

---

## Step 4 — Pull the SQL Server 2022 Image

```bash
podman pull --platform linux/amd64 mcr.microsoft.com/mssql/server:2022-latest
```

> The `--platform linux/amd64` flag tells Podman to pull the Intel (x86) image,
> which Rosetta will then emulate on your M4 chip.

---

## Step 5 — Run the Container

```bash
podman run \
  --name sqlserver \
  --platform linux/amd64 \
  -e ACCEPT_EULA=Y \
  -e MSSQL_SA_PASSWORD=NerdsLocalRun01 \
  -e MSSQL_PID=Developer \
  -p 1433:1433 \
  -d \
  mcr.microsoft.com/mssql/server:2022-latest
```

**Parameter breakdown:**

| Parameter | Description |
|---|---|
| `--name sqlserver` | Names the container for easy reference |
| `--platform linux/amd64` | Forces Intel architecture (required on M4) |
| `ACCEPT_EULA=Y` | Accepts the Microsoft license agreement |
| `MSSQL_SA_PASSWORD` | Sets the SA (admin) password |
| `MSSQL_PID=Developer` | Selects the free Developer edition |
| `-p 1433:1433` | Maps SQL Server's default port to your Mac |
| `-d` | Runs in background (detached) |

> **Password requirements:** Minimum 8 characters, must include uppercase, lowercase, number, and symbol.

---

## Step 6 — Verify It's Running

Check the container status:

```bash
podman ps
```

Check the logs to confirm SQL Server started successfully:

```bash
podman logs sqlserver
```

You should see a line like:
```
SQL Server is now ready for client connections.
```

---

## Step 7 — Connect to SQL Server

### Option A: Using sqlcmd (inside the container)

```bash
podman exec -it sqlserver /opt/mssql-tools18/bin/sqlcmd \
  -S localhost \
  -U sa \
  -P 'YourStr0ng!Pass' \
  -No
```

Run a quick test query:

```sql
SELECT @@VERSION;
GO
```

Type `exit` to quit.

### Option B: Azure Data Studio (recommended GUI — free)

1. Download from [Azure Data Studio](https://azure.microsoft.com/en-us/products/data-studio)
2. Connect with:
   - **Server:** `localhost,1433`
   - **Authentication:** SQL Login
   - **Username:** `sa`
   - **Password:** `YourStr0ng!Pass`
   - **Encrypt:** Optional (or disable for local dev)

### Option C: DBeaver (alternative free GUI)

1. Download from [dbeaver.io](https://dbeaver.io)
2. Create a new connection → Microsoft SQL Server
3. Use the same connection details as above

---

## Persisting Data (Recommended)

By default, all your databases are lost if the container is removed. To persist data, use a named volume:

```bash
podman volume create sqldata

podman run \
  --name sqlserver \
  --platform linux/amd64 \
  -e ACCEPT_EULA=Y \
  -e MSSQL_SA_PASSWORD=NerdsLocalRun01 \
  -e MSSQL_PID=Developer \
  -p 1433:1433 \
  -v sqldata:/var/opt/mssql \
  -d \
  mcr.microsoft.com/mssql/server:2022-latest
```

---

## Daily Usage Commands

```bash
# Start SQL Server
podman start sqlserver

# Stop SQL Server
podman stop sqlserver

# Restart
podman restart sqlserver

# View logs
podman logs sqlserver

# Check status
podman ps -a
```

---

## Start Podman on Mac Login (Optional)

If you want Podman machine to start automatically:

```bash
podman machine set --autostart
```

---

## Troubleshooting

**Container exits immediately / segfault**
Make sure `--platform linux/amd64` is included in your run command and Rosetta is installed.

**Port 1433 already in use**
Change the host port mapping, e.g. `-p 1434:1433`, and connect on port `1434` instead.

**Password rejected / container won't start**
SQL Server has strict password requirements — ensure it has uppercase, lowercase, number, and symbol.
Check logs with `podman logs sqlserver` for details.

**Podman machine not running**
Run `podman machine start` before trying to use any containers.

**Connection refused from GUI tool**
Make sure the container is running (`podman ps`) and try disabling encryption in your connection settings for local dev.
