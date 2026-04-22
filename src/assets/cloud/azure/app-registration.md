# Azure Entra ID App Registration Setup for a Web App

go to - https://portal.azure.com/#home → Azure Active Directory → App registrations → New registration

## Overview

This document walks through how to create and configure a Microsoft Entra ID app registration for a web application.

This setup is typically used when:
- your web app needs users to sign in with Microsoft Entra ID
- your app uses OpenID Connect / OAuth 2.0
- your app may need to call Microsoft Graph or a protected backend API

> Note: In Microsoft Entra ID, the app registration creates the trust relationship between your application and the Microsoft identity platform. :contentReference[oaicite:0]{index=0}

---

## Prerequisites

Before you begin, make sure you have:
- access to the correct Microsoft Entra tenant
- permission to create app registrations, such as **Application Developer** or another role with equivalent access :contentReference[oaicite:1]{index=1}
- the URLs for your application, such as:
    - local URL: `http://localhost:8080`
    - test URL: `https://your-test-app.example.com`
    - production URL: `https://your-prod-app.example.com`

---

## Step 1: Sign in to Microsoft Entra admin center

1. Go to the Microsoft Entra admin center.
2. Sign in with an account that has permission to create app registrations.
3. If you have access to multiple tenants, switch to the correct tenant before creating the app registration. :contentReference[oaicite:2]{index=2}

---

## Step 2: Create a new app registration

1. In the left navigation, go to:

   `Entra ID` → `App registrations`

2. Select **New registration**.
3. Enter a meaningful application name.

   Example:
    - `My Web App - Dev`
    - `My Web App - Test`
    - `My Web App - Prod`

4. Under **Supported account types**, choose the option that matches your use case:

    - **Accounts in this organizational directory only**  
      Use this for a single-tenant internal application. This is the recommended option for most internal enterprise apps. :contentReference[oaicite:3]{index=3}

    - **Accounts in any organizational directory**  
      Use this only if the app must support users from multiple Entra tenants. :contentReference[oaicite:4]{index=4}

    - **Accounts in any organizational directory and personal Microsoft accounts**  
      Use this for broader public-facing scenarios that also support personal Microsoft accounts. :contentReference[oaicite:5]{index=5}

5. For **Redirect URI**, you may either:
    - leave it blank during initial registration and add it later, or
    - add one immediately if you already know it. :contentReference[oaicite:6]{index=6}

6. Select **Register**.

7. After the app is created, record the following values from the **Overview** page:
    - **Application (client) ID**
    - **Directory (tenant) ID**

These values are commonly needed in your application configuration. :contentReference[oaicite:7]{index=7}

---

## Step 3: Configure Authentication

1. Open the newly created app registration.
2. Under **Manage**, select **Authentication**.
3. Under **Platform configurations**, select **Add a platform**.
4. Choose **Web** for a server-side web application. :contentReference[oaicite:8]{index=8}

5. Add your redirect URI(s).

   Examples:
    - Local:
        - `http://localhost:8080/login/oauth2/code/entra`
    - Test:
        - `https://your-test-app.example.com/login/oauth2/code/entra`
    - Production:
        - `https://your-prod-app.example.com/login/oauth2/code/entra`

6. Save the configuration.

> A redirect URI is where Microsoft Entra sends the user after authentication. For security, the sign-in request must use a redirect URI that has already been added to the app registration. Otherwise, you can get an `AADSTS50011` reply URL mismatch error. :contentReference[oaicite:9]{index=9}

### Notes
- Web apps must manually define redirect URIs. :contentReference[oaicite:10]{index=10}
- It is common to use separate app registrations for development and production so unnecessary dev redirect URIs are not exposed in production. :contentReference[oaicite:11]{index=11}

---

## Step 4: Configure logout URL (optional)

If your application supports sign-out and post-logout redirection:

1. Stay in **Authentication**.
2. Under the Web platform settings, add the appropriate logout URL if needed.

Example:
- `https://your-app.example.com/logout-success`

This is optional, but useful for a cleaner sign-out flow. Microsoft documents front-channel logout URL support in the platform configuration for web apps. :contentReference[oaicite:12]{index=12}

---

## Step 5: Create a client secret

If your web app is a confidential client and authenticates on the server side, create a client secret.

1. In the app registration, go to:

   `Certificates & secrets`

2. Select **New client secret**.
3. Enter a description.
4. Choose an expiration period based on your organization’s policy.
5. Select **Add**.
6. Copy the secret value immediately and store it securely.

### Important
- You will not be able to view the full secret value again after leaving the page.
- Store it in a secure secrets manager or application configuration store.

---

## Step 6: Configure API permissions

If your web app needs user information from Microsoft Graph or access to another protected API:

1. Go to:

   `API permissions`

2. Select **Add a permission**.
3. Choose the target API:
    - **Microsoft Graph**, or
    - **My APIs** for your own API registration :contentReference[oaicite:13]{index=13}

4. Select the appropriate permission type:
    - **Delegated permissions** for calls made on behalf of the signed-in user
    - **Application permissions** for daemon/service scenarios

5. Add the required permissions.

### Common examples
For basic user sign-in, apps often request:
- `openid`
- `profile`
- `email`
- `offline_access`

If calling Microsoft Graph, additional Graph permissions may also be needed depending on what data you read.

---

## Step 7: Grant admin consent if required

Some permissions require administrator approval.

1. Stay on the **API permissions** page.
2. If your organization requires it and you have the authority, select **Grant admin consent**.
3. Verify the status changes successfully.


|API/Permissions name | Type | Description |
|-------|------|-------------|
| `Directory.AccessAsUser.All` | Delegated | Access directory as the signed in user |
| `Directory.Read.All` | Delegated | Read directory data |
| `email` | Delegated | View users' email address |
| `openid` | Delegated | Sign users in |
| `profile` | Delegated | View users' basic profile information |
| `User.Read` | Delegated | Sign in and read user profile |
| `User.Read.All` | Delegated | Read all users' full profiles |
| `User.ReadBasic.All` | Delegated | Read all users' basic profiles |


---

## Step 9: Token configuration (optional)
If you need to customize the tokens issued for your app, such as adding optional claims or group memberships, you can do so in the **Token configuration** section.

| Claim | Description                     | Token Type       |
|-------|---------------------------------|------------------|
| `acct` | User's account status in tenant | ID               |
| `acrs` | Auth Context IDs of the operations the bearer is eligible to perform | ID               |
| `auth_time` | Time when the user last authenticated; See OpenID Connect spec | ID               |
| `email` | The addressable email for this user, if the user has one | ID               |
| `family_name` | Provides the last name, surname, or family name of the user as defined in the user object | ID               |
| `given_name` | Provides the first or "given" name of the user, as set on the user object | ID               |
| `groups` | Optional formatting for group claims | ID, Access, SAML |
| `login_hint` | Login hint | ID               |
| `onprem_sid` | On-premises security identifier | ID               |
| `preferred_username` | Provides the preferred username claim, making it easier for apps to provide username hints and show human readable display names | ID               |
| `verified_primary_email` | Sourced from the user's PrimaryAuthoritativeEmail | ID               |
| `verified_secondary_email` | Sourced from the user's SecondaryAuthoritativeEmail | ID               |


---

## Step 10: App Roles (optional)
If your application uses app roles for authorization, you can define them in the **App roles** section of the app registration. This allows you to assign users or groups to specific roles within your application.

| Display name | Description | Allowed member types | Value | ID | State
|-------------|-------------|--------------|-------|----|------|
| API.Access  | Access API via client credentials   | Applications | API.Access | (auto-generated) | Enabled

---

## Step 11: Manifest configuration (optional)
For advanced scenarios, you can edit the app registration manifest directly. This is a JSON document that defines the configuration of your app registration. You can use it to set properties that are not available in the UI or to automate configuration changes.
- note: set - "accessTokenAcceptedVersion": 2,

```yaml

{
	"id": "5eb113b8-f37e-4a71-9be5-014daf592a0c",
	"acceptMappedClaims": null,
	"accessTokenAcceptedVersion": 2,
	"addIns": [],
	"allowPublicClient": null,
	"appId": "5d4c0d61-5d05-48ef-bd01-9430a887bc21",
	"appRoles": [
		{
			"allowedMemberTypes": [
				"Application"
			],
			"description": "Access API via client credentials",
			"displayName": "API.Access",
			"id": "f0b6c567-4212-4dd7-a684-7e5ca8a404c8",
			"isEnabled": true,
			"lang": null,
			"origin": "Application",
			"value": "API.Access"
		},
		{
			"allowedMemberTypes": [
				"User",
				"Application"
			],
			"description": "Regulatory User",
			"displayName": "Regulatory User",
			"id": "0f8935ae-fba9-4df7-8839-2a5bd74ea14e",
			"isEnabled": true,
			"lang": null,
			"origin": "Application",
			"value": "REGULATORY_USER"
		},
		{
			"allowedMemberTypes": [
				"User",
				"Application"
			],
			"description": "Read Only User",
			"displayName": "Read only",
			"id": "b15eca6e-d5d5-420a-9dbb-39741a6f411a",
			"isEnabled": true,
			"lang": null,
			"origin": "Application",
			"value": "READ_ONLY"
		},
		{
			"allowedMemberTypes": [
				"User",
				"Application"
			],
			"description": "Patent Liaison.  The omega user.",
			"displayName": "Liaison",
			"id": "27b172e6-ee7a-4632-8299-e1d20695c122",
			"isEnabled": true,
			"lang": null,
			"origin": "Application",
			"value": "LIAISON"
		},
		{
			"allowedMemberTypes": [
				"User",
				"Application"
			],
			"description": "IT Works",
			"displayName": "IT Support",
			"id": "7dbaa455-33f2-4aa6-a60c-8ce7266f0b6c",
			"isEnabled": true,
			"lang": null,
			"origin": "Application",
			"value": "IT_SUPPORT"
		},
		{
			"allowedMemberTypes": [
				"User",
				"Application"
			],
			"description": "System Administrator.  The alpha user.",
			"displayName": "System Administrator",
			"id": "1bb1005b-4b18-48d7-a156-78b2111324ee",
			"isEnabled": true,
			"lang": null,
			"origin": "Application",
			"value": "SYSADMIN"
		},
		{
			"allowedMemberTypes": [
				"User",
				"Application"
			],
			"description": "Manage application configuration",
			"displayName": "IT_ADMIN",
			"id": "e927eae6-913b-4866-a4bb-6911ae3add9b",
			"isEnabled": true,
			"lang": null,
			"origin": "Application",
			"value": "IT_ADMIN"
		}
	],
	"oauth2AllowUrlPathMatching": false,
	"createdDateTime": "2026-01-14T16:26:10Z",
	"description": null,
	"certification": null,
	"disabledByMicrosoftStatus": null,
	"groupMembershipClaims": "DirectoryRole",
	"identifierUris": [
		"api://5d4c0d61-5d05-48ef-bd01-9430a887bc21"
	],
	"informationalUrls": {
		"termsOfService": null,
		"support": null,
		"privacy": null,
		"marketing": null
	},
	"keyCredentials": [],
	"knownClientApplications": [],
	"logoUrl": null,
	"logoutUrl": null,
	"name": "RTUSE_PREPROD",
	"notes": null,
	"oauth2AllowIdTokenImplicitFlow": true,
	"oauth2AllowImplicitFlow": true,
	"oauth2Permissions": [],
	"oauth2RequirePostResponse": false,
	"optionalClaims": {
		"idToken": [
			{
				"name": "auth_time",
				"source": null,
				"essential": false,
				"additionalProperties": []
			},
			{
				"name": "verified_primary_email",
				"source": null,
				"essential": false,
				"additionalProperties": []
			},
			{
				"name": "verified_secondary_email",
				"source": null,
				"essential": false,
				"additionalProperties": []
			},
			{
				"name": "email",
				"source": null,
				"essential": false,
				"additionalProperties": []
			},
			{
				"name": "acct",
				"source": null,
				"essential": false,
				"additionalProperties": []
			},
			{
				"name": "onprem_sid",
				"source": null,
				"essential": false,
				"additionalProperties": []
			},
			{
				"name": "family_name",
				"source": null,
				"essential": false,
				"additionalProperties": []
			},
			{
				"name": "given_name",
				"source": null,
				"essential": false,
				"additionalProperties": []
			},
			{
				"name": "preferred_username",
				"source": null,
				"essential": false,
				"additionalProperties": []
			},
			{
				"name": "login_hint",
				"source": null,
				"essential": false,
				"additionalProperties": []
			},
			{
				"name": "acrs",
				"source": null,
				"essential": false,
				"additionalProperties": []
			},
			{
				"name": "groups",
				"source": null,
				"essential": false,
				"additionalProperties": []
			}
		],
		"accessToken": [
			{
				"name": "groups",
				"source": null,
				"essential": false,
				"additionalProperties": []
			}
		],
		"saml2Token": [
			{
				"name": "groups",
				"source": null,
				"essential": false,
				"additionalProperties": []
			}
		]
	},
	"orgRestrictions": [],
	"parentalControlSettings": {
		"countriesBlockedForMinors": [],
		"legalAgeGroupRule": "Allow"
	},
	"passwordCredentials": [
		{
			"customKeyIdentifier": null,
			"endDate": "2028-01-18T17:05:14.231Z",
			"keyId": "fc63f06b-59c2-4407-b038-92f6e4ceab39",
			"startDate": "2026-01-18T17:05:14.231Z",
			"value": null,
			"createdOn": "2026-01-18T17:05:21.7299127Z",
			"hint": "V3E",
			"displayName": "non-prod-secret"
		}
	],
	"preAuthorizedApplications": [],
	"publisherDomain": "mctools.onmicrosoft.com",
	"replyUrlsWithType": [
		{
			"url": "https://rtuse.tcint.mayo.edu/login/oauth2/code/entra",
			"type": "Web"
		},
		{
			"url": "https://rtuse.tcdev.mayo.edu/login/oauth2/code/entra",
			"type": "Web"
		},
		{
			"url": "http://localhost:8080/login/oauth2/code/entra",
			"type": "Web"
		}
	],
	"requiredResourceAccess": [
		{
			"resourceAppId": "5d4c0d61-5d05-48ef-bd01-9430a887bc21",
			"resourceAccess": [
				{
					"id": "f0b6c567-4212-4dd7-a684-7e5ca8a404c8",
					"type": "Role"
				}
			]
		},
		{
			"resourceAppId": "00000003-0000-0000-c000-000000000000",
			"resourceAccess": [
				{
					"id": "0e263e50-5827-48a4-b97c-d940288653c7",
					"type": "Scope"
				},
				{
					"id": "06da0dbc-49e2-44d2-8312-53f166ab848a",
					"type": "Scope"
				},
				{
					"id": "64a6cdd6-aab1-4aaf-94b8-3cc8405e90d0",
					"type": "Scope"
				},
				{
					"id": "37f7f235-527c-4136-accd-4a02d197296e",
					"type": "Scope"
				},
				{
					"id": "14dad69e-099b-42c9-810b-d002981feec1",
					"type": "Scope"
				},
				{
					"id": "e1fe6dd8-ba31-4d61-89e7-88639da4683d",
					"type": "Scope"
				},
				{
					"id": "a154be20-db9c-4678-8ab7-66f6cc099a59",
					"type": "Scope"
				},
				{
					"id": "b340eb25-3456-403f-be2f-af7a0d370277",
					"type": "Scope"
				}
			]
		}
	],
	"samlMetadataUrl": null,
	"signInUrl": null,
	"signInAudience": "AzureADMyOrg",
	"tags": [],
	"tokenEncryptionKeyId": null
}

```


---
## Step 12: Configure application settings in your web app

Add the Entra configuration to your app.

Example placeholders:

```properties
spring.security.oauth2.client.registration.entra.client-id=YOUR_CLIENT_ID
spring.security.oauth2.client.registration.entra.client-secret=YOUR_CLIENT_SECRET
spring.security.oauth2.client.registration.entra.scope=openid,profile,email,offline_access
spring.security.oauth2.client.provider.entra.issuer-uri=https://login.microsoftonline.com/YOUR_TENANT_ID/v2.0
