# Microsoft Graph User Profile Mapping

> **Mayo-specific reference:** This mapping uses Mayo's `AzureGraphApiUser` type and the
> authenticated Microsoft Graph access token supplied by the application's identity flow.

`GraphService` requests the signed-in user's Microsoft Graph profile from:

```text
GET https://graph.microsoft.com/v1.0/me?$select=<USER_FIELDS>
```

The JSON response is read into `Map<String, Object>` and used to build an `AzureGraphApiUser`.
This table documents each requested Microsoft Graph property and the application field it populates.

| Microsoft Graph property | `AzureGraphApiUser` field | Mapping used by `GraphService` | Notes |
| --- | --- | --- | --- |
| `id` | `id` | `profile.get("id").toString()` | Microsoft Entra object ID. |
| `mailNickname` | `lanId` | `profile.get("mailNickname").toString()` | Used as the user's LAN ID. |
| `mail` | `emailAddress` | `profile.get("mail").toString()` | Email address returned by Graph. |
| `displayName` | `fullName` | `profile.get("displayName").toString()` | Display name shown for the user. |
| `givenName` | `firstName` | `profile.get("givenName").toString()` | First/given name. |
| `surname` | `lastName` | `profile.get("surname").toString()` | Last/family name. |
| `department` | `department` | `(String) profile.get("department")` | Department value, when supplied by Graph. |
| `jobTitle` | `jobTitle` | `(String) profile.get("jobTitle")` | Job title, when supplied by Graph. |
| `city` | `workSiteCity` | `(String) profile.get("city")` | Work-site city. |
| `state` | `workSiteState` | `(String) profile.get("state")` | Work-site state. |
| `officeLocation` | `mailLocation` | `(String) profile.get("officeLocation")` | Office or mail location. |
| `employeeId` | `personId` | `(String) profile.get("employeeId")` | Employee/person identifier. |
| `onPremisesSecurityIdentifier` | `systemId` | `(String) profile.get("onPremisesSecurityIdentifier")` | On-premises security identifier (SID). |
| `businessPhones` | Not mapped | Requested but not read by the builder | Available in the Graph response but currently unused. |

## Profile Photo

The profile photo is not part of `USER_FIELDS`. `getUserPhoto` makes a separate request:

```text
GET https://graph.microsoft.com/v1.0/me/photo/$value
```

When Graph returns `200 OK`, the response stream is converted to a `byte[]`. The method returns
`null` when a photo is unavailable or the request fails.

## Implementation Reference

```text
edu.mayo.lt.rtubackend.security.authenticationHandler.GraphService
```

The class sends the authenticated access token as `Authorization: Bearer <token>`. A failed `/me`
request returns an empty profile map, and `getGraphUser` then returns `null`.
