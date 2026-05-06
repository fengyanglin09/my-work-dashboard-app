# SQL Server Developer on Mac (Apple Silicon) — Full Setup Guide

## Overview

SQL Server 2025 crashes on Apple Silicon (M1/M2/M3/M4) due to AVX CPU instruction incompatibility.
SQL Server 2022 Developer edition is the stable, free alternative for local development.

---

## 1. Install Podman

```bash
brew install podman
```

Initialize and start the Podman machine with enough resources:

```bash
podman machine init \
  --cpus 2 \
  --memory 4096 \
  --rootful

podman machine start
```

---

## 2. Run SQL Server 2022 Developer

```bash
podman run \
  --name sqlserver \
  --platform linux/amd64 \
  -e ACCEPT_EULA=Y \
  -e "MSSQL_SA_PASSWORD=NerdsLocalRun01" \
  -e MSSQL_PID=Developer \
  -p 1433:1433 \
  -d \
  mcr.microsoft.com/mssql/server:2022-latest
```

**Password requirements:** minimum 8 characters with uppercase, lowercase, number, and symbol.
Always wrap the password in double quotes to prevent shell interpretation of special characters.

Verify it started successfully:

```bash
podman logs sqlserver | tail -20
# Look for: "SQL Server is now ready for client connections."
```

---

## 3. Daily Usage Commands

```bash
# Start
podman start sqlserver

# Stop
podman stop sqlserver

# View logs
podman logs sqlserver

# Check status
podman ps -a

# Connect via sqlcmd inside the container
podman exec -it sqlserver /opt/mssql-tools18/bin/sqlcmd \
  -S localhost -U sa -P 'NerdsLocalRun01' -No
```

---

## 4. Persist Data (Recommended)

By default all data is lost if the container is removed. Use a named volume to persist it:

```bash
podman volume create sqldata

podman run \
  --name sqlserver \
  --platform linux/amd64 \
  -e ACCEPT_EULA=Y \
  -e "MSSQL_SA_PASSWORD=NerdsLocalRun01" \
  -e MSSQL_PID=Developer \
  -p 1433:1433 \
  -v sqldata:/var/opt/mssql \
  -d \
  mcr.microsoft.com/mssql/server:2022-latest
```

---

## 5. Connect via IntelliJ

1. Go to **View → Tool Windows → Database**
2. Click **+** → **Data Source** → **Microsoft SQL Server**
3. Fill in the connection details:

| Field | Value |
|---|---|
| Host | `localhost` |
| Port | `1433` |
| User | `sa` |
| Password | `MyPass@word123` |
| Database | leave blank or enter a specific DB name |

4. Click **Download** when prompted to install the driver
5. Go to the **Advanced** tab and set `trustServerCertificate` → `true`
6. Click **Test Connection** then **OK**

---

## 6. Connect from Spring Boot

### application.properties

```properties
spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=yourdb;encrypt=false;trustServerCertificate=true
spring.datasource.username=sa
spring.datasource.password=NerdsLocalRun01
spring.datasource.driver-class-name=com.microsoft.sqlserver.jdbc.SQLServerDriver

# If using JPA/Hibernate
spring.jpa.database-platform=org.hibernate.dialect.SQLServerDialect
spring.jpa.hibernate.ddl-auto=update
```

### application.yml

```yaml
spring:
  datasource:
    url: jdbc:sqlserver://localhost:1433;databaseName=yourdb;encrypt=false;trustServerCertificate=true
    username: sa
    password: NerdsLocalRun01
    driver-class-name: com.microsoft.sqlserver.jdbc.SQLServerDriver
  jpa:
    database-platform: org.hibernate.dialect.SQLServerDialect
    hibernate:
      ddl-auto: update
```

### pom.xml dependency

```xml
<dependency>
    <groupId>com.microsoft.sqlserver</groupId>
    <artifactId>mssql-jdbc</artifactId>
    <scope>runtime</scope>
</dependency>
```

> If not using Spring Boot's parent BOM, specify the version explicitly: `12.6.1.jre11`

---

## Troubleshooting

**Container exits immediately / password error**
Ensure the password meets all requirements (8+ chars, uppercase, lowercase, number, symbol) and wrap it in double quotes in the `podman run` command.

**SSL / encryption error when connecting**
Add `encrypt=false;trustServerCertificate=true` to the JDBC URL, or set `trustServerCertificate=true` in IntelliJ's Advanced connection settings.

**Port 1433 already in use**
Change the host port: `-p 1434:1433` and update your connection string to use port `1434`.

**Podman machine not running**
Run `podman machine start` before trying to use any containers.

**Container crashes on Apple Silicon**
Make sure `--platform linux/amd64` is included in your `podman run` command.
