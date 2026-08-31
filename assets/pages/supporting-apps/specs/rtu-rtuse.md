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
| Prod | `WA06693` | Use for prod database access/configuration. |

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
