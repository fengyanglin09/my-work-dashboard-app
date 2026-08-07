# NERDS Local Run Guide

This is a growable checklist for getting NERDS running locally. Add project-specific commands here as we learn or confirm them.

## What This Covers

- Signing in with Azure CLI before startup
- Starting local dependencies
- Checking local environment variables
- Running the backend and frontend
- Troubleshooting common local startup issues

## Why `az login` May Be Needed

NERDS appears to use Azure-backed services during local startup, especially Azure Key Vault and Azure Storage-related configuration.

The short version:

```text
az login gives local developer tools an Azure identity token.
The app can reuse that token when it needs Azure resources.
```

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

## Local Dependency Checklist

Before starting NERDS, check the pieces that local setup already depends on.

### Java

```shell
java -version
echo "$JAVA_HOME"
```

Related guide:

[Java Version Management With SDKMAN](assets/pages/app-resources/laptop-setup/java-sdkman.md)

### SQL Server

If your workflow needs database access, start the local SQL Server container and confirm the database is imported.

Related guide:

[SQL Server BACPAC Import - Podman macOS](assets/pages/app-resources/nerds/sqlserver_bacpac_import_podman_macos.md)

### Azurite

Start Azurite if the workflow uses Azure Storage locally:

```shell
azurite \
  --silent \
  --location "$HOME/.azurite/nerds" \
  --debug "$HOME/.azurite/nerds/debug.log"
```

Expected local endpoints:

```text
Blob:  http://127.0.0.1:10000
Queue: http://127.0.0.1:10001
Table: http://127.0.0.1:10002
```

Related guide:

[NERDS Local Setup](assets/pages/app-resources/nerds/nerds-steup.md)

## Environment Variables To Check

Confirm the local environment has the expected NERDS values before running.

Common values from the existing setup notes include:

```text
SPRING_PROFILES_ACTIVE=localdb
AzureWebJobsStorage=UseDevelopmentStorage=true
useIntelliJAzureCredentials=CLI
AzureKeyVaultBaseUrl=<key-vault-url>
SPRING_DATASOURCE_URL=<local-sql-server-url>
SPRING_DATASOURCE_REPORTING_URL=<local-sql-server-url>
```

Avoid committing secrets to the repo. Keep passwords, client secrets, and tokens in local run configuration, environment variables, or an approved secret store.

## Run Order

Use this order until we know a better project-specific sequence.

1. Start local SQL Server if database access is needed.
2. Start Azurite if storage queues/blobs are needed.
3. Run `az login`.
4. Confirm environment variables.
5. Start the NERDS backend.
6. Start the NERDS frontend.
7. Open the local app URL and test one simple workflow.

## Backend Run Placeholder

Add the exact backend command here when confirmed.

Possible patterns:

```shell
./mvnw spring-boot:run
```

or run the Spring Boot application from IntelliJ with the local run configuration.

When running from IntelliJ, check:

- JDK is set correctly.
- Active Spring profile is `localdb` or the project-approved local profile.
- Environment variables are present in the run configuration.
- Azure CLI login exists if Key Vault or Azure identity is used.

## Frontend Run Placeholder

Add the exact frontend command here when confirmed.

Possible pattern:

```shell
npm install
npm start
```

or:

```shell
npm run start
```

## Quick Startup Sanity Checks

Check Azure login:

```shell
az account show --output table
```

Check Java:

```shell
java -version
```

Check local SQL Server port:

```shell
lsof -nP -iTCP:1433 -sTCP:LISTEN
```

Check Azurite ports:

```shell
lsof -nP -iTCP:10000 -sTCP:LISTEN
lsof -nP -iTCP:10001 -sTCP:LISTEN
lsof -nP -iTCP:10002 -sTCP:LISTEN
```

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

If startup fails while loading secrets, check whether local environment variables can override the missing secrets. The existing setup notes say secrets come from Azure Key Vault and can be overlaid by local environment variables.

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

- [NERDS Local Setup](assets/pages/app-resources/nerds/nerds-steup.md)
- [SQL Server BACPAC Import - Podman macOS](assets/pages/app-resources/nerds/sqlserver_bacpac_import_podman_macos.md)
- [Azure CLI login reference](https://learn.microsoft.com/en-us/cli/azure/reference-index)
- [Authenticate Java apps during local development](https://learn.microsoft.com/en-us/azure/developer/java/sdk/authentication/local-development-dev-accounts)
