## Big Query

- GCP Big Query link - https://console.cloud.google.com/bigquery

##### Test connection from project A to Project B
- Assuming project B hosts the bigquery dataset and project A is trying to connect to it. There is a SA created in project A, and configured in project B for access.
you can test the connection by running the following command in the terminal of project A:

**Note:** you need to run following command in the terminal of project A, **NOT** in the terminal of Cloud Shell.
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



----------------------------------------------------------------------

##### Make request to bigquery dataset in project B from project A
- request link - https://mcsm.service-now.com/employeeconnect?id=sc_cat_item&sys_id=cacd2aa42be8721073f3ffa95e91bf90

- request attachment (for dev):
```yaml

Service Account:  gsa6-sde-phi-d-spaa-hvr14@lis-hist-vwr-d.iam.gserviceaccount.com
Owner Email:  lin.pengpeng@mayo.edu
Supervisor Email:  Sorenson.James@mayo.edu
Business Purpose:  need access to bigquery for the LIS-Historical-Viewer project in a non-production environment
Entitlements Needed:  access to bigquery data, data set: ml-mps-adl-mndsa-dlmpds-d-23a9.phi_dlmpds_us_d
Access Level:  Primary
Environment:  Development, Testing
Dataset Entitlement Business Approvers:  James Sorenson
Source Organization:  mccp-solutions
Source Project ID:  lis-hist-vwr-d
Source Project Name:  lis-hist-vwr-d
Reason for requiring access:  Application access - patient care operations
Summary of how the data will be used:  client applications will be able to retrieve patient information
Intended use category (e.g., Patient Care, Patient Billing, Healthcare Operations) - Patient Care, Healthcare Operations

Roles needed:  roles/bigquery.dataViewer, roles/bigquery.readSessionUser, roles/storage.objectViewer

Also please add following projects to the VPCSC rule
ml-mps-adl-mndsa-dlmpds-d
```
**Note:** 
- ADL side will need to add the bigquery project to the VPCSC rule.
- CAF side will also need to add the source project to the VPCSC ADL egress rule
