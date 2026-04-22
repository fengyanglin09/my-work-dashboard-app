# Setup: OAuth2 Client Credentials (Access Token)

## Overview

This guide walks through how to configure an API tool s.t. KeyRunner to obtain an access token using the **OAuth 2.0 Client Credentials** flow.

This flow is used for:
- service-to-service communication
- backend API access (no user interaction)
- Microsoft Entra ID (Azure AD) app-to-app authentication

---

## Prerequisites

Before starting, ensure you have:

- A registered application in Microsoft Entra ID (or another OAuth provider)
- The following values:
    - `client_id`
    - `client_secret`
    - `tenant_id` (for Entra)
    - `scope` or resource identifier
- Required API permissions granted in Entra (Application permissions)

---

## Step 1: Create or Open a Collection

1. Open KeyRunner
2. Create a **new collection** OR open an existing one

> Recommendation: Configure OAuth at the **collection level** so all requests can inherit it.

---

## Step 2: Open Authorization Settings

1. Select the collection (or request)
2. Go to the **Authorization** tab
3. Choose: OAuth2 (Client Credentials)


---

## Step 3: Configure OAuth2 Client Credentials

Fill in the following fields:

### Required Fields

| Field          | Value |
|----------------|------|
| Token URL      | OAuth token endpoint |
| Client ID      | Your app's client ID |
| Client Secret  | Your app's client secret |
| Scope          | Resource scope |

---

## Step 4: Example (Microsoft Entra ID)

### Token URL - https://login.microsoftonline.com/[TENANT_ID]/oauth2/v2.0/token

### Client ID - [YOUR_CLIENT_ID]

### Client Secret - [YOUR_CLIENT_SECRET]

### Scope:
1. For your custom API: - api://[TARGET_API_CLIENT_ID]/.default
2. For Microsoft Graph: - https://graph.microsoft.com/.default


## screenshot for getting access token in KeyRunner
![OAuth Access Token](/assets/security/access-token.png)

## screenshot for setting up OAuth in KeyRunner
![OAuth Setup](/assets/security/oauth-setup.png)

