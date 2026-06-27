# NERDS Local Setup

This guide collects the local setup pieces needed for working on NERDS.

## Prerequisites

- Node.js and npm
- Azurite, the local Azure Storage emulator
- Microsoft Azure Storage Explorer
- A local SQL Server database, if the NERDS workflow you are testing needs database access

## Install Azurite

Azurite can be installed with npm, Docker, or the Visual Studio Code extension. For local command-line use on macOS, npm is the simplest option:

```shell
npm install -g azurite
```

Verify the install:

```shell
azurite --version
```

## Start Azurite

Create a local folder for Azurite data and logs:

```shell
mkdir -p "$HOME/.azurite/nerds"
```

Start Azurite:

```shell
azurite \
  --silent \
  --location "$HOME/.azurite/nerds" \
  --debug "$HOME/.azurite/nerds/debug.log"
```

Azurite uses these local endpoints by default:

```text
Blob:  http://127.0.0.1:10000
Queue: http://127.0.0.1:10001
Table: http://127.0.0.1:10002
```

Keep the terminal window open while testing. Stop Azurite with `Ctrl+C`.

## Default Development Storage Connection String

Many Azure SDKs can use the development shortcut:

```text
UseDevelopmentStorage=true
```

If the app needs explicit endpoints, use the default Azurite account `devstoreaccount1` with:

```text
BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1
QueueEndpoint=http://127.0.0.1:10001/devstoreaccount1
TableEndpoint=http://127.0.0.1:10002/devstoreaccount1
```

## Install Microsoft Azure Storage Explorer

Install Microsoft Azure Storage Explorer from the official download page:

[Azure Storage Explorer](https://azure.microsoft.com/en-us/products/storage/storage-explorer/)

## Connect Storage Explorer To Azurite

1. Start Azurite.
2. Open Microsoft Azure Storage Explorer.
3. Select **Attach to a local emulator** or **Local storage emulator**.
4. Use the default Azurite endpoints.
5. Confirm that the local storage account appears in Storage Explorer.

## Local SQL Server

If NERDS needs the local SQL Server database, use the companion setup guide:

[SQL Server BACPAC Import - Podman macOS](assets/pages/app-resources/nerds/sqlserver_bacpac_import_podman_macos.md)

## Quick Sanity Check

After Azurite is running:

1. Confirm Storage Explorer can see the local emulator.
2. Create or inspect a local blob container if your NERDS workflow uses blob storage.
3. Confirm the app's local configuration points to Azurite instead of a real Azure Storage account.
4. If database access is needed, confirm the SQL Server container is running and the NERDS database is imported.

## Troubleshooting

### `azurite: command not found`

Confirm npm global binaries are on your path:

```shell
npm bin -g
```

If needed, reinstall:

```shell
npm install -g azurite
```

### Port Already In Use

Azurite defaults to ports `10000`, `10001`, and `10002`. Check whether something else is listening:

```shell
lsof -nP -iTCP:10000 -sTCP:LISTEN
lsof -nP -iTCP:10001 -sTCP:LISTEN
lsof -nP -iTCP:10002 -sTCP:LISTEN
```

Stop the conflicting process or start Azurite with custom ports.

### Reset Local Azurite Data

Stop Azurite, then remove the local data folder:

```shell
rm -rf "$HOME/.azurite/nerds"
```

Start Azurite again after cleanup.

## References

- [Install and run the Azurite emulator](https://learn.microsoft.com/en-us/azure/storage/common/storage-install-azurite)
- [Use the Azurite emulator for local Azure Storage development](https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azurite)
- [Azure Storage Explorer](https://azure.microsoft.com/en-us/products/storage/storage-explorer/)
