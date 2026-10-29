# RTU / RTUSE App Specifics

## SFTP Hosts

| Environment | SFTP host |
| --- | --- |
| Dev | `dev.imftportal.mayo.edu` |
| Test / INT | `test.imftportal.mayo.edu` |
| Prod | `imftportal.mayo.edu` |

## Directory Work Accounts

RTU/RTUSE has more than one SFTP directory integration. The directory path and work account are specific to the integration being used.

### Non-Prod

These are the known non-prod directory work accounts.

| Integration area | Work account | Note |
| --- | --- | --- |
| RTU form directory | `WA32938` | Use for non-prod RTU form file transfer directory access. |
| Liaison directory | `WA32005` | Use for non-prod Liaison file transfer directory access. |

### Prod

| Integration area | Work account | Note |
| --- | --- | --- |
| RTU form directory | `TU06370` | Use for prod RTU form file transfer directory access. |
| Liaison directory | `TU06787` | Use for prod Liaison file transfer directory access. |

## Database Accounts

| Environment | Work account | Note |
| --- | --- | --- |
| Non-prod | `WA06693` | Use for non-prod database access/configuration. |
| Prod | `TU01164` | Use for prod database access/configuration. |

## Production SFTP File Processing

### XML / CSV Files

The file is renamed, temporarily downloaded, parsed, and saved to the database.

| Step | Location |
| --- | --- |
| Inbound | `/Production/inbound/{original-name}` |
| Processing | `/Production/processing/{UUID}__{original-name}` |
| Temporary local copy | `./sftpLocal/temp/{UUID}__{original-name}` |
| Success archive | `/Production/archive/{UUID}__{original-name}` |
| Failure archive | `/Production/error/{UUID}__{original-name}` |

### RTU Attachment Folder

For example, `RTU2026-25203` is moved from the inbound directory to its RTU SFTP location:

| Step | Location |
| --- | --- |
| Inbound | `/Production/inbound/RTU2026-25203` |
| RTU SFTP | `/Production/2026/RTU2026-25203` |

### Liaison Attachment Directory

No attachment files are copied to Liaison. Instead, an empty directory is created:

| Destination | Location |
| --- | --- |
| Liaison SFTP | `/Production/2026/RTU2026-25203` |

## Important Notes

- Do not assume the RTU form directory and Liaison directory use the same path.
- Do not assume the same work account can access both directory locations.
- Confirm the exact remote directory path for the target environment before configuring or troubleshooting a transfer.
- Use the matching SFTP host for the environment, then use the work account tied to the specific directory integration.

## Quick Mental Model

The SFTP host chooses the building:

```text
Dev host  -> dev.imftportal.mayo.edu
Test host -> test.imftportal.mayo.edu
Prod host -> imftportal.mayo.edu
```

The directory and work account choose the room inside that building:

```text
Non-prod RTU form directory -> WA32938
Non-prod Liaison directory  -> WA32005
Prod RTU form directory     -> TU06370
Prod Liaison directory      -> TU06787
```
