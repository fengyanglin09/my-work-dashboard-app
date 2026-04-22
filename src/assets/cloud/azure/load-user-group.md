

## Step 1: Configure roles in Azure AD "app registration"
- Go to Azure AD → App registrations → Your App → App roles → Create app roles as needed. Below are the roles we have created for our application:

| Display name         | Description                               | Allowed member types          | Value            | ID | State   |
|---|---|---|---|--|---|
| API.Access           | Access API via client credentials         | Applications                  | API.Access       |  | Enabled |
| Regulatory User      | Regulatory User                           | Users/Groups,Applications     | REGULATORY_USER  |  | Enabled |
| Read only            | Read Only User                            | Users/Groups,Applications     | READ_ONLY        |  | Enabled |
| Liaison              | Patent Liaison. The omega user.           | Users/Groups,Applications     | LIAISON          |  | Enabled |
| IT Support           | IT Works                                  | Users/Groups,Applications     | IT_SUPPORT       |  | Enabled |
| System Administrator | System Administrator. The alpha user.     | Users/Groups,Applications     | SYSADMIN         |  | Enabled |
| IT_ADMIN             | Manage application configuration          | Users/Groups,Applications     | IT_ADMIN         |  | Enabled |

## Step 2: Go to Sail point and create roles or entitlements for the above roles, and assign them to users/groups in Sail Point.

## Step 2: Assign roles to users/groups

- Go to Azure AD → Enterprise Applications → Your App → Users and Groups
- add your user / group → assign role (e.g., Admin)
