# NERDS Local Setup And Run Guide

This guide collects the current local setup and startup notes for working on NERDS.

Use it as the main local-dev checklist. Add new confirmed steps here as the setup becomes clearer.

## Prerequisites

- Node.js and npm
- Java with the project-approved JDK version
- Azure CLI
- Azurite, the local Azure Storage emulator
- Microsoft Azure Storage Explorer
- Local SQL Server database, if the workflow being tested needs database access

Related setup docs:

- [Java Version Management With SDKMAN](assets/pages/app-resources/laptop-setup/java-sdkman.md)
- [SQL Server BACPAC Import - Podman macOS](assets/pages/app-resources/nerds/sqlserver_bacpac_import_podman_macos.md)

## Quick Run Order

Use this sequence for a normal local run:

1. Start local SQL Server if database access is needed.
2. Start Azurite if storage queues, blobs, or tables are needed.
3. Run `az login`.
4. Confirm environment variables.
5. Start the NERDS backend.
6. Start the NERDS frontend.
7. Open the local app and test one simple workflow.

## Why `az login` May Be Needed

NERDS appears to use Azure-backed services during local startup, especially Azure Key Vault and Azure Storage-related configuration.

The short version: `az login` gives local developer tools an Azure identity token. The app can reuse that token when it needs Azure resources.

This commonly happens when the app uses Azure SDK credentials such as:

- `DefaultAzureCredential`
- `AzureCliCredential`
- an app setting that chooses Azure CLI credentials, such as `useIntelliJAzureCredentials=CLI`

The pattern is:

1. You run `az login`.
2. Azure CLI stores your signed-in developer identity locally.
3. The running app asks Azure SDK for a credential.
4. Azure SDK can use the Azure CLI login to get tokens.
5. The app can read resources it is authorized to access, such as Key Vault secrets.

Think of `az login` like badging into the building before using a locked utility room. The app still has to know which room to open, but your CLI login proves you are allowed to try.

## Sign In To Azure

Use interactive browser login:

```shell
az login
```

If browser login is awkward, use device-code login:

```shell
az login --use-device-code
```

If you need to target a specific tenant:

```shell
az login --tenant <tenant-id>
```

Confirm the active account:

```shell
az account show --output table
```

If you have multiple subscriptions, set the expected one:

```shell
az account set --subscription "<subscription-id-or-name>"
```

## Why Azurite Is Used

Azurite is Microsoft's local Azure Storage emulator. NERDS can use Azure Storage for local development workflows such as queues, blobs, or table-style storage without connecting to a real Azure Storage account.

For NERDS local setup, Azurite gives the app a local replacement for Azure Storage:

- Blob endpoint for file-like storage.
- Queue endpoint for local queue/message workflows.
- Table endpoint if a workflow uses Azure Table Storage.

That means the app can use `AzureWebJobsStorage=UseDevelopmentStorage=true` and talk to `127.0.0.1` instead of reaching a cloud storage account. It is useful for local testing because it is faster, isolated, and safer than sending development data to a shared Azure resource.

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
  --skipApiVersionCheck \
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

## Local SQL Server

If NERDS needs the local SQL Server database, use the companion setup guide:

[SQL Server BACPAC Import - Podman macOS](assets/pages/app-resources/nerds/sqlserver_bacpac_import_podman_macos.md)

Check whether SQL Server is listening locally:

```shell
lsof -nP -iTCP:1433 -sTCP:LISTEN
```

## Environment Variables For Local Development

These backend environment variables are needed for local NERDS startup.

The database name and password can change depending on how the local SQL Server database was restored. If they change, update both datasource URLs to match the actual local database name and `sa` password.

| # | Environment variable | Value |
|---:|---|---|
| 1 | `APPLICATIONINSIGHTS_CONNECTION_STRING` | `InstrumentationKey=f6390ebd-bd75-4532-ab84-14808fbe8f79` |
| 2 | `azure.activedirectory.allow-telemetry` | `true` |
| 3 | `AzureKeyVaultBaseUrl` | `https://cad-dev-napi-v3nc-kv.vault.azure.net` |
| 4 | `AzureWebJobsStorage` | `UseDevelopmentStorage=true` |
| 5 | `NerdsToSoftTestResultsQueueName` | `nerds-local` |
| 6 | `password` | `NerdsLocalRun01` |
| 7 | `SPRING_DATASOURCE_REPORTING_URL` | `jdbc:sqlserver://localhost:1433;databaseName=nerds-local;encrypt=true;trustServerCertificate=true;user=sa;password=NerdsLocalRun01` |
| 8 | `SPRING_DATASOURCE_URL` | `jdbc:sqlserver://localhost:1433;databaseName=nerds-local;encrypt=true;trustServerCertificate=true;user=sa;password=NerdsLocalRun01` |
| 9 | `SPRING_PROFILES_ACTIVE` | `localdb` |
| 10 | `useIntelliJAzureCredentials` | `CLI` |

Useful pieces inside the datasource URLs:

| Setting | Example value | Note |
| --- | --- | --- |
| `databaseName` | `nerds-local` | Change this if your restored local database uses a different name. |
| `user` | `sa` | Local SQL Server admin user. |
| `password` | `NerdsLocalRun01` | Change this if your local SQL Server container uses a different password. |
| `encrypt` | `true` | Keep this aligned with local SQL Server settings. |
| `trustServerCertificate` | `true` | Commonly needed for local SQL Server TLS trust. |

Avoid committing secrets to the repo. Keep passwords, client secrets, and tokens in local run configuration, environment variables, or an approved secret store.

## Backend Run

The exact project command still needs to be confirmed. Common options are:

```shell
./mvnw spring-boot:run
```

Or run the Spring Boot application from IntelliJ with the local run configuration.

When running from IntelliJ, check:

- JDK is set correctly.
- Active Spring profile is `localdb` or the project-approved local profile.
- Environment variables are present in the run configuration.
- Azure CLI login exists if Key Vault or Azure identity is used.

## Frontend Run

The exact frontend command still needs to be confirmed. Common options are:

```shell
npm install
npm start
```

or:

```shell
npm run start
```

## Quick Sanity Checks

Check Azure login:

```shell
az account show --output table
```

Check Java:

```shell
java -version
echo "$JAVA_HOME"
```

Check Azurite ports:

```shell
lsof -nP -iTCP:10000 -sTCP:LISTEN
lsof -nP -iTCP:10001 -sTCP:LISTEN
lsof -nP -iTCP:10002 -sTCP:LISTEN
```

Confirm the app is pointed at local storage:

```text
AzureWebJobsStorage=UseDevelopmentStorage=true
```

## Azure Storage Explorer

Check whether Microsoft Azure Storage Explorer is already installed:

```shell
ls /Applications | grep -i "storage explorer"
```

You can also search Spotlight metadata:

```shell
mdfind "kMDItemDisplayName == 'Microsoft Azure Storage Explorer'"
```

If it is installed, this should open it:

```shell
open -a "Microsoft Azure Storage Explorer"
```

Install Microsoft Azure Storage Explorer from the official download page:

[Azure Storage Explorer](https://azure.microsoft.com/en-us/products/storage/storage-explorer/)

To connect Storage Explorer to Azurite:

1. Start Azurite.
2. Open Microsoft Azure Storage Explorer.
3. Select **Attach to a local emulator** or **Local storage emulator**.
4. Use the default Azurite endpoints.
5. Confirm that the local storage account appears in Storage Explorer.

## Troubleshooting

### Azure Login Errors

Run:

```shell
az login
az account show --output table
```

If your account is signed in but the app still cannot access Key Vault, confirm:

- you are in the correct tenant
- you are using the correct subscription
- your account has access to the Key Vault or required Azure resource
- the app points to the expected `AzureKeyVaultBaseUrl`

### Key Vault Or Secret Errors

If startup fails while loading secrets, check whether local environment variables can override the missing secrets.

Useful checks:

```shell
echo "$AzureKeyVaultBaseUrl"
echo "$SPRING_PROFILES_ACTIVE"
```

Do not print secret values in shared terminals, screenshots, or committed docs.

### Storage Queue Or Blob Errors

If the app cannot reach local storage:

1. Confirm Azurite is running.
2. Confirm `AzureWebJobsStorage=UseDevelopmentStorage=true`.
3. Open Azure Storage Explorer and verify the local emulator is visible.

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

### Database Connection Errors

Check:

- SQL Server container is running.
- Database has been imported.
- `SPRING_DATASOURCE_URL` points to localhost and the expected database.
- `trustServerCertificate=true` is present if local TLS trust is the issue.

## Open Questions To Fill In Later

- Exact backend run command
- Exact frontend run command
- Required Spring profile names
- Which Key Vault secrets are required locally
- Whether local env vars can fully replace Key Vault for offline work
- Which Azure tenant/subscription should be selected
- Any required queue/container names in Azurite

## References

- [Install and run the Azurite emulator](https://learn.microsoft.com/en-us/azure/storage/common/storage-install-azurite)
- [Use the Azurite emulator for local Azure Storage development](https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azurite)
- [Azure Storage Explorer](https://azure.microsoft.com/en-us/products/storage/storage-explorer/)
- [Azure CLI login reference](https://learn.microsoft.com/en-us/cli/azure/reference-index)
- [Authenticate Java apps during local development](https://learn.microsoft.com/en-us/azure/developer/java/sdk/authentication/local-development-dev-accounts)
