# NERDS Swagger Manual Endpoints

Use this page for the shared-environment Swagger URLs and endpoints that are handy to run manually.

## Shared Environment Swagger UI

| Environment | Swagger URL | Deployment |
| --- | --- | --- |
| PROD | [https://nerds-api.mayo.edu/swagger-ui/index.html](https://nerds-api.mayo.edu/swagger-ui/index.html) | `cad-prod-nerdsapi-v3` |
| INT | [https://nerds-int-api.mayo.edu/swagger-ui/index.html](https://nerds-int-api.mayo.edu/swagger-ui/index.html) | `cad-int-nerdsapi-v3` |
| INT2 | [https://nerds-int-api2.mayo.edu/swagger-ui/index.html](https://nerds-int-api2.mayo.edu/swagger-ui/index.html) | `cad-int-nerdsapi2-v3` |
| INT3 | [https://nerds-int-api3.mayo.edu/swagger-ui/index.html](https://nerds-int-api3.mayo.edu/swagger-ui/index.html) | `cad-int-nerdsapi3-v3` |
| DEV | [https://nerds-dev-api.mayo.edu/swagger-ui/index.html](https://nerds-dev-api.mayo.edu/swagger-ui/index.html) | `cad-dev-nerdsapi-v3` |
| DEV2 | [https://nerds-dev2-api.mayo.edu/swagger-ui/index.html](https://nerds-dev2-api.mayo.edu/swagger-ui/index.html) | `cad-dev-nerdsapi2-v3` |
| DEV3 | [https://nerds-dev3-api.mayo.edu/swagger-ui/index.html](https://nerds-dev3-api.mayo.edu/swagger-ui/index.html) | `cad-dev-nerdsapi3-v3` |

## Local Swagger UI

[Open local Swagger UI](http://localhost:8080/swagger-ui/index.html#)

```text
http://localhost:8080/swagger-ui/index.html#
```

## Useful Endpoints

### Load Specimens From Soft

| Request detail | Value |
| --- | --- |
| Method | `POST` |
| Content-Type | `application/json` |

```text
http://localhost:8080/api/specimen/loadFromSoft
```

Use this endpoint when testing the workflow that loads orders and specimens from Soft. In Swagger,
provide a JSON array of Soft specimen/order IDs. For example:

```json
["M901033331"]
```

For DEV3, use the same endpoint path in the DEV3 Swagger UI:

```text
POST /api/specimen/loadFromSoft
```

### Load External Tests From Soft

```text
http://localhost:8080/api/codes/load-external-tests
```

Use this endpoint to bring newly available Soft tests into NERDS.

Code reference: `NERDS_API/src/main/java/edu/mayo/lpea/small_custom_apps/nerds/controllers/CodeController.java:193`
