## Big Query

##### link - https://console.cloud.google.com/bigquery

##### test connection from project A to Project B
assuming project B hosts the bigquery dataset and project A is trying to connect to it, you can test the connection by running the following command in the terminal of project A:

- In Project A CLI, run the following command to test the connection to Project B's BigQuery dataset:
```bash
# Tell gcloud to act as the Project A SA
gcloud config set auth/impersonate_service_account [biqquery SA - i.e. gsa6-sde-phi-d-spaa-hvr14@lis-hist-vwr-d.iam.gserviceaccount.com]
```

- Now that you are "wearing the hat" of that SA, try to list the datasets in Project B:
```shell
# Use the bq tool to list datasets in the target project
bq ls --project_id=[Porject B id i.e.- ml-mps-adl-mndsa-dlmpds-d-23a9]
```
