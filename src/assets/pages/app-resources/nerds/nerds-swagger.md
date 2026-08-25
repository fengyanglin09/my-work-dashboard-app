# NERDS Swagger Manual Endpoints

Use this page for Swagger endpoints that are handy to run manually while working on the app locally.

## Swagger UI

[Open local Swagger UI](http://localhost:8080/swagger-ui/index.html#)

```text
http://localhost:8080/swagger-ui/index.html#
```

## Useful Endpoints

### Load Specimens From Soft

```text
http://localhost:8080/api/specimen/loadFromSoft
```

Use this endpoint when testing the local workflow that loads specimens from Soft.

### Load External Tests From Soft

```text
http://localhost:8080/api/codes/load-external-tests
```

Use this endpoint to bring newly available Soft tests into NERDS.

Code reference: `NERDS_API/src/main/java/edu/mayo/lpea/small_custom_apps/nerds/controllers/CodeController.java:193`
