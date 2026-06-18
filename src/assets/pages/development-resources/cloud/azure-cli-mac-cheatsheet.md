# Azure CLI — Mac Cheat Sheet

A concise reference from install to everyday use on macOS.

---

## 1. Installation

### Via Homebrew (recommended)
```bash
brew update && brew install azure-cli
```

### Via curl (official script)
```bash
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

> **Note:** Homebrew is the simplest path on macOS. Requires [Homebrew](https://brew.sh) to be installed.

---

## 2. Verify Installation
```bash
az --version
```
Expected output: version number, Python version, and OS info.

```bash
az --help
```
Lists all top-level command groups.

---

## 3. Login & Authentication

### Interactive login (opens browser)
```bash
az login
```

### Login with a specific tenant
```bash
az login --tenant <tenant-id>
```

### Login with mayo tenant
```bash
az login --tenant a25fff9c-3f63-4fb2-9a8a-d9bdd0321f9a
```

### Login with a service principal (non-interactive / CI/CD)
```bash
az login --service-principal \
  --username <app-id> \
  --password <password-or-cert> \
  --tenant <tenant-id>
```

### Check current logged-in account
```bash
az account show
```

### List all accessible subscriptions
```bash
az account list --output table
```

### Set active subscription
```bash
az account set --subscription "<subscription-name-or-id>"
```

### Logout
```bash
az logout
```

---

## 4. Core Concepts

| Concept | Description |
|---|---|
| **Subscription** | Billing boundary for Azure resources |
| **Resource Group** | Logical container for related resources |
| **Location** | Azure region (e.g., `eastus`, `westeurope`) |
| **Output formats** | `json` (default), `table`, `tsv`, `yaml` |

---

## 5. Resource Groups

```bash
# Create a resource group
az group create --name MyResourceGroup --location eastus

# List all resource groups
az group list --output table

# Show details of a specific group
az group show --name MyResourceGroup

# Delete a resource group (and all resources inside)
az group delete --name MyResourceGroup --yes --no-wait
```

---

## 6. Common Resource Operations

### Virtual Machines
```bash
# List VMs
az vm list --output table

# Create a VM
az vm create \
  --resource-group MyResourceGroup \
  --name MyVM \
  --image UbuntuLTS \
  --admin-username azureuser \
  --generate-ssh-keys

# Start / Stop / Restart a VM
az vm start  --resource-group MyResourceGroup --name MyVM
az vm stop   --resource-group MyResourceGroup --name MyVM
az vm restart --resource-group MyResourceGroup --name MyVM

# Delete a VM
az vm delete --resource-group MyResourceGroup --name MyVM --yes
```

### Storage Accounts
```bash
# Create a storage account
az storage account create \
  --name mystorageacct \
  --resource-group MyResourceGroup \
  --location eastus \
  --sku Standard_LRS

# List storage accounts
az storage account list --output table

# Show connection string
az storage account show-connection-string \
  --name mystorageacct \
  --resource-group MyResourceGroup
```

### App Service (Web Apps)
```bash
# Create an App Service plan
az appservice plan create \
  --name MyPlan \
  --resource-group MyResourceGroup \
  --sku B1 --is-linux

# Create a web app
az webapp create \
  --resource-group MyResourceGroup \
  --plan MyPlan \
  --name MyUniqueAppName \
  --runtime "NODE|18-lts"

# List web apps
az webapp list --output table

# Get the default hostname
az webapp show \
  --resource-group MyResourceGroup \
  --name MyUniqueAppName \
  --query defaultHostName
```

### Azure Kubernetes Service (AKS)
```bash
# Create a cluster
az aks create \
  --resource-group MyResourceGroup \
  --name MyAKSCluster \
  --node-count 2 \
  --generate-ssh-keys

# Get credentials (merges into ~/.kube/config)
az aks get-credentials \
  --resource-group MyResourceGroup \
  --name MyAKSCluster

# List clusters
az aks list --output table
```

---

## 7. Querying Output with JMESPath

```bash
# Get just the name and location of all VMs
az vm list --query "[].{Name:name, Location:location}" --output table

# Get a single value
az account show --query "name" --output tsv

# Filter by a property
az vm list --query "[?location=='eastus'].name" --output tsv
```

---

## 8. Useful Global Flags

| Flag | Purpose |
|---|---|
| `--output` / `-o` | Output format: `json`, `table`, `tsv`, `yaml`, `none` |
| `--query` | JMESPath query to filter output |
| `--subscription` | Override active subscription for one command |
| `--resource-group` / `-g` | Target resource group |
| `--verbose` | Show detailed logs |
| `--debug` | Full debug output (useful for troubleshooting) |
| `--no-wait` | Start operation and return immediately |
| `--yes` / `-y` | Skip confirmation prompts |

---

## 9. Configuration

```bash
# Set default output format
az configure --defaults output=table

# Set a default resource group and location
az configure --defaults group=MyResourceGroup location=eastus

# View current configuration
az configure --list-defaults

# Clear a default
az configure --defaults group=''
```

---

## 10. Update & Uninstall

```bash
# Update Azure CLI (Homebrew)
brew upgrade azure-cli

# Uninstall (Homebrew)
brew uninstall azure-cli

# Check for extension updates
az extension update --name <extension-name>

# List installed extensions
az extension list --output table
```

---

## 11. Quick Verification Checklist

| Command | What to confirm |
|---|---|
| `az --version` | CLI is installed and accessible |
| `az login` | Authentication succeeds |
| `az account show` | Correct subscription is active |
| `az group list -o table` | Can read Azure resources |
| `az vm list -o table` | Subscription-level access works |

---

## Helpful Links

- [Official Azure CLI Docs](https://learn.microsoft.com/en-us/cli/azure/)
- [Install on macOS](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-macos)
- [JMESPath Query Tutorial](https://jmespath.org/tutorial.html)
- [Azure CLI Samples on GitHub](https://github.com/Azure-Samples/azure-cli-samples)
