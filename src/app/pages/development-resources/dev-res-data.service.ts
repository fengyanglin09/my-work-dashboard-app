import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceCategory } from '../../core/model/cheatsheet.model';


@Injectable({
  providedIn: 'root'
})
export class DevResDataService {

    getData() {
        return [
            { id: 1, label: 'Cloud', activeItemId: 'cloud', name: 'cloud', description: 'cloud development resources' ,
            rowCounts: 7,
            resources: [
                {
                    label: 'Azure Cloud',
                    items: [
                        { label: 'DevOps', action: () => window.open('https://dev.azure.com/mclm/') },
                        { label: 'Server Status', action: () => window.open('https://status.dev.azure.com/') },
                        { label: 'Azure Portal', action: () => window.open('https://portal.azure.com/') },
                        { label: 'Enterprise Skills Init', action: () => window.open('https://esi.microsoft.com/') },
                    ]
                },

                {
                    label: 'Google Cloud',
                    items: [
                        { label: 'Mayo Clinic Cloud (MCC)', action: () => window.open('https://mcc.mayo.edu/') },
                        { label: 'GCP Console', action: () => window.open('https://console.cloud.google.com') },
                        { label: 'Server Status', action: () => window.open('https://status.cloud.google.com/') },
                        { label: 'Server Status (USA)', action: () => window.open('https://status.cloud.google.com/regional/americas') },
                        { label: 'Cloud App Factory (CAF)', action: () => window.open('https://mctools.sharepoint.com/teams/cloudappfactory/SitePages/Cloud-App-Factory.aspx') },
                        { label: 'CAF Documents', action: () => window.open('https://mctools.sharepoint.com/teams/cloudappfactory/Shared%20Documents/Forms/AllItems.aspx') },
                        {label: 'CAF Best Practices', action: () => window.open('https://mctools.sharepoint.com/teams/cloudappfactory/SitePages/CAF-Best-Practices.aspx?xsdata=MDV8MDJ8fDc4ZWRiZTI4NWQwODQwN2RmYmIxMDhkZTJiOWFhMGVmfGEyNWZmZjljM2Y2MzRmYjI5YThhZDliZGQwMzIxZjlhfDB8MHw2Mzg5OTYxNDAyNTgyMjkxNjl8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T20xbFpYUnBibWRmVFRKSk5VNXFVWGxOYWxsMFQxUk5lVnBwTURCT1JHc3pURmRGZVU1NlozUk5WMHBxV21wb2JVMUVhelZPVjBaclFIUm9jbVZoWkM1Mk1pOXRaWE56WVdkbGN5OHhOelkwTURFM01qSTBOVE00fDIzMDkxMzUyODcxNTRjMWI5OTUzMDhkZTJiOWFhMGVkfDU2NmMyYTNkNzQ2ODQ3MGE4Y2M0YzdlYzcxZWY5OTZm&sdata=azA5UllDOVZxVUVDTUFtbklKazNUbVFkTFZPeHdBK29rMEtSemFHK09uRT0%3d&ovuser=a25fff9c-3f63-4fb2-9a8a-d9bdd0321f9a%2cLin.Pengpeng%40mayo.edu&OR=Teams-HL&CT=1764035189819&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNTExMDIwMjMxNSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3d%3d&SafelinksUrl=https%3a%2f%2fmctools.sharepoint.com%2fteams%2fcloudappfactory%2fSitePages%2fCAF-Best-Practices.aspx') },
                        { label: 'Mayo GCP Learning', action: () => window.open('https://mcc.mayo.edu/resources/google-learning') },
                    ]
                },

                {
                    label: 'Apigee',
                    items: [
                        { label: 'Consumer Portal (Nonprod)', action: () => window.open('https://nonprod.apiportal.mcc.apix.mayo.edu/') },
                        { label: 'Consumer Portal (Prod)', action: () => window.open('https://apiportal.mcc.apix.mayo.edu/') },
                        { label: 'Mayo ApigeeX Overview', action: () => window.open('https://docs.mcc.mayo.edu/docs/mcc/apigee-x/overviewx/') },
                        { label: 'Apigee Secret Update', action: () => window.open('https://docs.mcc.mayo.edu/docs/mcc/apigee-x/appsandteamsx/#api-keys') },
                        { label: 'CAF Producer/Consumer Pattern', action: () => window.open('https://mctools.sharepoint.com/teams/cloudappfactory/SitePages/ApigeeX-Connectivity-from-CAF-Projects.aspx') },
                        { label: 'ApigeeX Developer Utilities', action: () => window.open('https://mcc.apix.utilities.mayo.edu/') },
                    ]
                },

                {
                    label: 'GCP Core Services',
                    items: [
                        { label: 'GCP Console', action: () => window.open('https://console.cloud.google.com') },
                        { label: 'Cloud Storage', action: () => window.open('https://console.cloud.google.com/storage') },
                        { label: 'Compute Engine', action: () => window.open('https://console.cloud.google.com/compute') },
                        { label: 'App Engine', action: () => window.open('https://console.cloud.google.com/appengine') },
                        { label: 'Kubernetes Engine (GKE)', action: () => window.open('https://console.cloud.google.com/kubernetes') },
                        { label: 'Cloud Functions', action: () => window.open('https://console.cloud.google.com/functions') },
                        { label: 'Cloud Run', action: () => window.open('https://console.cloud.google.com/run') },
                        { label: 'BigQuery', action: () => window.open('https://console.cloud.google.com/bigquery') },
                        { label: 'Cloud SQL', action: () => window.open('https://console.cloud.google.com/sql') },
                        { label: 'Firestore', action: () => window.open('https://console.cloud.google.com/firestore') },
                        { label: 'Datastore', action: () => window.open('https://console.cloud.google.com/datastore') },
                        { label: 'Spanner', action: () => window.open('https://console.cloud.google.com/spanner') },
                        { label: 'Cloud Pub/Sub', action: () => window.open('https://console.cloud.google.com/cloudpubsub') },
                        { label: 'Cloud Dataflow', action: () => window.open('https://console.cloud.google.com/dataflow') },
                        { label: 'Cloud Dataproc', action: () => window.open('https://console.cloud.google.com/dataproc') },
                        { label: 'Cloud Composer', action: () => window.open('https://console.cloud.google.com/composer') },
                        { label: 'Cloud Logging', action: () => window.open('https://console.cloud.google.com/logs') },
                        { label: 'Cloud Monitoring', action: () => window.open('https://console.cloud.google.com/monitoring') },
                        { label: 'Cloud IAM & Admin', action: () => window.open('https://console.cloud.google.com/iam-admin') },
                        { label: 'Cloud VPC', action: () => window.open('https://console.cloud.google.com/networking') },
                        { label: 'Cloud DNS', action: () => window.open('https://console.cloud.google.com/net-services/dns') },
                        { label: 'Cloud Load Balancing', action: () => window.open('https://console.cloud.google.com/net-services/loadbalancing') },
                        { label: 'Cloud CDN', action: () => window.open('https://console.cloud.google.com/net-services/cdn') },
                        { label: 'Secret Manager', action: () => window.open('https://console.cloud.google.com/security/secret-manager') },
                        { label: 'Cloud Scheduler', action: () => window.open('https://console.cloud.google.com/cloudscheduler') },
                        { label: 'Cloud Tasks', action: () => window.open('https://console.cloud.google.com/cloudtasks') },
                        { label: 'Cloud Endpoints', action: () => window.open('https://console.cloud.google.com/endpoints') },
                        { label: 'API Gateway', action: () => window.open('https://console.cloud.google.com/api-gateway') },
                        { label: 'Artifact Registry', action: () => window.open('https://console.cloud.google.com/artifacts') }
                    ]
                }



            ]
            } ,
            { id: 2, label: 'Dev Tools', activeItemId: 'dev tools', name: 'dev tools', description: 'Description for Resource 2',
                rowCounts: 7,
                resources: [

                    {
                        label: 'Programming Languages',
                        items: [
                            { label: 'Java', action: () => window.open('https://adoptium.net/') },
                            { label: 'Dotnet', action: () => window.open('https://dotnet.microsoft.com/en-us/download') },
                            { label: 'Python', action: () => window.open('https://www.python.org/') },
                            { label: 'C#', action: () => window.open('https://learn.microsoft.com/en-us/dotnet/csharp/') },
                            { label: 'Dokuwiki', action: () => window.open('https://www.dokuwiki.org/dokuwiki') },
                        ]
                    },                    {
                        label: 'Database Systems',
                        items: [
                            { label: 'MSSQL', action: () => window.open('https://learn.microsoft.com/en-us/sql/') },
                            { label: 'Postgresql', action: () => window.open('https://www.postgresql.org/docs/') },
                            { label: 'MongoDB', action: () => window.open('https://www.mongodb.com/docs/manual/core/databases-and-collections/') },
                            { label: 'H2', action: () => window.open('https://www.h2database.com/html/main.html') },
                            { label: 'SQLite', action: () => window.open('https://sqlite.org/') },
                        ]
                    },
                    {
                        label: 'Dev Tools',
                        items: [
                            { label: 'GitHub', action: () => window.open('https://github.com') },
                            { label: 'Bitbucket', action: () => window.open('https://bitbucket.org/product/') },
                            { label: 'Sourcetree', action: () => window.open('https://www.sourcetreeapp.com/') },
                            { label: 'StackOverflow', action: () => window.open('https://stackoverflow.com') },
                            { label: 'Maven', action: () => window.open('https://maven.apache.org/') },
                            { label: 'Git Learning', action: () => window.open('https://learngitbranching.js.org/?locale=en_US') },
                            { label: 'Git Cheat Sheet', action: () => window.open('https://git-scm.com/cheat-sheet') },
                            { label: 'Git Cheat Sheet (GitHub)', action: () => window.open('https://education.github.com/git-cheat-sheet-education.pdf') },
                            { label: 'Git Workflows', action: () => window.open('https://nvie.com/posts/a-successful-git-branching-model/') },
                            { label: 'Git Workflows (Atlassian)', action: () => window.open('https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow') },
                        ]
                    },
                    {
                        label: 'IDE Tools',
                        items: [
                            { label: 'Intellij IDEA', action: () => window.open('https://www.jetbrains.com/idea/') },
                            { label: 'VS Code', action: () => window.open('https://code.visualstudio.com') },
                            { label: 'SQL Developer (Oracle)', action: () => window.open('https://www.oracle.com/database/sqldeveloper/') },
                            { label: 'DBeaver Community', action: () => window.open('https://dbeaver.io/download/') },
                        ]
                    },
                    {
                        label: 'Api Tools',
                        items: [
                            { label: 'Insomnia', action: () => window.open('https://insomnia.rest/') },
                            { label: 'Postman', action: () => window.open('https://postman.com') },
                            { label: 'Keyrunner', action: () => window.open('https://keyrunner.app/') },
                        ]
                    },
                    {
                        label: 'Project Management Tools',
                        items: [
                            { label: 'Azure DevOps', action: () => window.open('https://dev.azure.com/mclm') },
                            { label: 'trello', action: () => window.open('https://stackoverflow.com') },
                        ]
                    },

                    {
                        label: 'Container Tools',
                        items: [
                            { label: 'Docker', action: () => window.open('https://docker.com') },
                            { label: 'Podman', action: () => window.open('https://podman.io/') },
                        ]
                    },
                    {
                        label: 'Web Resources',
                        items: [
                            { label: 'Invisible Character Viewer', action: () => window.open('https://invisiblecharacterviewer.com/') },
                            { label: 'Invisible Characters', action: () => window.open('https://invisible-characters.com/view.html') },
                        ]
                    },

                ]

            } ,
            { id: 3, label: 'Dev References', activeItemId: 'dev references', name: 'dev references', description: 'Description for Resource 3',
                rowCounts: 10,
                resources: [
                    {
                        label: 'Angular Development',
                        items: [
                            { label: 'Angular Official Docs', action: () => window.open('https://angular.io/docs') },
                            { label: 'Angular CLI', action: () => window.open('https://angular.io/cli') },
                            { label: 'Angular Material', action: () => window.open('https://material.angular.io/') },
                            { label: 'Angular Blog', action: () => window.open('https://blog.angular.io/') },
                            { label: 'Angular GitHub', action: () => window.open('https://github.com/angular/angular') },
                            { label: 'RxJS Docs', action: () => window.open('https://rxjs.dev/guide/overview') },
                            { label: 'TypeScript Docs', action: () => window.open('https://www.typescriptlang.org/docs/') },
                            { label: 'Angular Awesome', action: () => window.open('https://github.com/gdi2290/awesome-angular') },
                            { label: 'FontAwesome', action: () => window.open('https://fontawesome.com/') },
                            { label: 'Tailwind CSS', action: () => window.open('https://tailwindcss.com/docs/guides/angular') },
                            { label: 'Bootstrap', action: () => window.open('https://getbootstrap.com/docs/5.0/getting-started/introduction/') },
                            { label: 'PrimeNG', action: () => window.open('https://www.primefaces.org/primeng/') },
                            { label: 'NG Bootstrap', action: () => window.open('https://ng-bootstrap.github.io/#/home') },
                            { label: 'Angular powered Bootstrap (ngx-bootstrap)', action: () => window.open('https://valor-software.com/ngx-bootstrap/#/') },
                            { label: 'Highcharts', action: () => window.open('https://www.highcharts.com/') },
                            { label: 'Highcharts Angular', action: () => window.open('https://github.com/highcharts/highcharts-angular') },
                            { label: 'D3.js', action: () => window.open('https://d3js.org/') },
                            { label: 'D3.js with Angular Guide', action: () => window.open('https://blog.angular-university.io/angular-d3/') },
                            { label: 'TinyMCE', action: () => window.open('https://www.tiny.cloud/docs/integrations/angular/') }
                        ]
                    },

                    {
                        label: 'Spring Boot Development',
                        items: [
                            { label: 'Spring Official Docs', action: () => window.open('https://docs.spring.io/spring-framework/docs/current/reference/html/') },
                            { label: 'Spring Boot Docs', action: () => window.open('https://docs.spring.io/spring-boot/docs/current/reference/html/') },
                            { label: 'Spring Initializr', action: () => window.open('https://start.spring.io/') },
                            { label: 'Spring Guides', action: () => window.open('https://spring.io/guides') },
                            { label: 'Spring Blog', action: () => window.open('https://spring.io/blog') },
                            { label: 'Spring Security Docs', action: () => window.open('https://docs.spring.io/spring-security/reference/') },
                            { label: 'Spring Data Docs', action: () => window.open('https://docs.spring.io/spring-data/jpa/docs/current/reference/html/') },
                            { label: 'Spring GitHub', action: () => window.open('https://github.com/spring-projects/spring-framework') },
                            { label: 'Spring JPA', action: () => window.open('https://spring.io/projects/spring-data-jpa') },
                            { label: 'Hibernate', action: () => window.open('https://hibernate.org/') },
                            { label: 'Hibernate Docs', action: () => window.open('https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html') },
                            { label: 'JPA', action: () => window.open('https://jakarta.ee/specifications/persistence/') },
                            { label: 'JPA Docs', action: () => window.open('https://jakarta.ee/specifications/persistence/3.1/jakarta-persistence-spec-3.1.html') },
                            { label: 'JPA + Spring Boot Tutorial', action: () => window.open('https://www.baeldung.com/the-persistence-layer-with-spring-data-jpa') },
                            { label: 'QueryDSL OpenFeign', action: () => window.open('https://github.com/OpenFeign/querydsl/') },
                            { label: 'QueryDSL OpenFeign + Spring Boot Tutorial', action: () => window.open('https://www.baeldung.com/spring-cloud-openfeign') },
                            { label: 'QueryDSL + Spring Boot Tutorial', action: () => window.open('https://www.baeldung.com/querydsl-with-jpa-tutorial') },
                            { label: 'JOOQ', action: () => window.open('https://www.jooq.org/') },
                            { label: 'JOOQ Docs', action: () => window.open('https://www.jooq.org/doc/latest/manual/') },
                            { label: 'JOOQ + Spring Boot Tutorial', action: () => window.open('https://www.baeldung.com/jooq-with-spring') },
                            { label: 'Jackson', action: () => window.open('https://github.com/FasterXML/jackson') },
                            { label: 'Jackson Docs', action: () => window.open('https://github.com/FasterXML/jackson-docs') },
                            { label: 'Lombok', action: () => window.open('https://projectlombok.org/') },
                            { label: 'Lombok Docs', action: () => window.open('https://projectlombok.org/features/all') },
                            { label: 'MapStruct', action: () => window.open('https://mapstruct.org/') },
                            { label: 'MapStruct Docs', action: () => window.open('https://mapstruct.org/documentation/') },
                            { label: 'MapStruct + Lombok Integration', action: () => window.open('https://mapstruct.org/documentation/stable/reference/html/#lombok') },
                            { label: 'MapStruct + Spring Boot Tutorial', action: () => window.open('https://www.baeldung.com/mapstruct') }

                        ]
                    }



                ]
            } ,
            ] as ResourceCategory[];
    }




    constructor(private http: HttpClient) { }

    getDataMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getDataSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getDataMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getDataLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getDataXLarge() {
        return Promise.resolve(this.getData());
    }
}
