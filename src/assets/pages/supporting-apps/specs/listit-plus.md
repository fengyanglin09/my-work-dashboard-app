# LISTIT-PLUS App Specifics

## Database Connections

| Environment | JDBC connection string |
| --- | --- |
| Dev | `jdbc:jtds:sqlserver://ROEFDN835Q/dlmp_listit_dev;domain=MFAD;useNTLMv2=true` |
| INT / Test | `jdbc:jtds:sqlserver://ROEFDN930Q/dlmp_listit_int;domain=MFAD;useNTLMv2=true` |
| Prod | `jdbc:jtds:sqlserver://ROEFDN042Q/dlmp_listit_prod;domain=MFAD;useNTLMv2=true` |

## Work Accounts

| Environment | Work account |
| --- | --- |
| Non-prod | `WA06691` |
| Prod | `TU01163` |

## Notes

- The connection strings use jTDS SQL Server connections with the `MFAD` domain and NTLMv2.
- Non-prod work account applies to development and integration/test access unless a more specific environment account is confirmed.
