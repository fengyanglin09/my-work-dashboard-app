import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceCategory } from '../../core/model/cheatsheet.model';


@Injectable({
  providedIn: 'root'
})
export class DevResDataService {

    getData() {
        return [
            { id: 1, label: 'Cloud App', activeItemId: 'cloud app', name: 'cloud app', description: 'cloud development resources' ,
            resources: [
                {
                    label: 'Azure Cloud',
                    items: [
                        { label: 'DevOps', type: 'link', icon:'fas fa-link',  url:'https://dev.azure.com/mclm/' },
                        { label: 'Server Status', type: 'link', icon:'fas fa-link',  url:'https://status.dev.azure.com/' },
                        { label: 'Azure Portal', type: 'link', icon:'fas fa-link',  url:'https://portal.azure.com/' },
                        { label: 'Enterprise Skills Init', type: 'link', icon:'fas fa-link',  url:'https://esi.microsoft.com/' },
                    ]
                },

                {
                    label: 'Google Cloud',
                    items: [
                        { label: 'Mayo Clinic Cloud (MCC)', type: 'link', icon:'fas fa-link',  url:'https://mcc.mayo.edu/' },
                        { label: 'GCP Console', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com' },
                        { label: 'Server Status', type: 'link', icon:'fas fa-link',  url:'https://status.cloud.google.com/' },
                        { label: 'Server Status (USA)', type: 'link', icon:'fas fa-link',  url:'https://status.cloud.google.com/regional/americas' },
                        { label: 'Cloud App Factory (CAF)', type: 'link', icon:'fas fa-link',  url:'https://mctools.sharepoint.com/teams/cloudappfactory/SitePages/Cloud-App-Factory.aspx' },
                        { label: 'CAF Documents', type: 'link', icon:'fas fa-link',  url:'https://mctools.sharepoint.com/teams/cloudappfactory/Shared%20Documents/Forms/AllItems.aspx' },
                        {label: 'CAF Best Practices', type: 'link', icon:'fas fa-link',  url:'https://mctools.sharepoint.com/teams/cloudappfactory/SitePages/CAF-Best-Practices.aspx?xsdata=MDV8MDJ8fDc4ZWRiZTI4NWQwODQwN2RmYmIxMDhkZTJiOWFhMGVmfGEyNWZmZjljM2Y2MzRmYjI5YThhZDliZGQwMzIxZjlhfDB8MHw2Mzg5OTYxNDAyNTgyMjkxNjl8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T20xbFpYUnBibWRmVFRKSk5VNXFVWGxOYWxsMFQxUk5lVnBwTURCT1JHc3pURmRGZVU1NlozUk5WMHBxV21wb2JVMUVhelZPVjBaclFIUm9jbVZoWkM1Mk1pOXRaWE56WVdkbGN5OHhOelkwTURFM01qSTBOVE00fDIzMDkxMzUyODcxNTRjMWI5OTUzMDhkZTJiOWFhMGVkfDU2NmMyYTNkNzQ2ODQ3MGE4Y2M0YzdlYzcxZWY5OTZm&sdata=azA5UllDOVZxVUVDTUFtbklKazNUbVFkTFZPeHdBK29rMEtSemFHK09uRT0%3d&ovuser=a25fff9c-3f63-4fb2-9a8a-d9bdd0321f9a%2cLin.Pengpeng%40mayo.edu&OR=Teams-HL&CT=1764035189819&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNTExMDIwMjMxNSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3d%3d&SafelinksUrl=https%3a%2f%2fmctools.sharepoint.com%2fteams%2fcloudappfactory%2fSitePages%2fCAF-Best-Practices.aspx' },
                        { label: 'Mayo GCP Learning', type: 'link', icon:'fas fa-link',  url:'https://mcc.mayo.edu/resources/google-learning' },
                    ]
                },

                {
                    label: 'Apigee',
                    items: [
                        { label: 'Consumer Portal (Nonprod)', type: 'link', icon:'fas fa-link',  url:'https://nonprod.apiportal.mcc.apix.mayo.edu/' },
                        { label: 'Consumer Portal (Prod)', type: 'link', icon:'fas fa-link',  url:'https://apiportal.mcc.apix.mayo.edu/' },
                        { label: 'Mayo ApigeeX Overview', type: 'link', icon:'fas fa-link',  url:'https://docs.mcc.mayo.edu/docs/mcc/apigee-x/overviewx/' },
                        { label: 'Apigee Secret Update', type: 'link', icon:'fas fa-link',  url:'https://docs.mcc.mayo.edu/docs/mcc/apigee-x/appsandteamsx/#api-keys' },
                        { label: 'CAF Producer/Consumer Pattern', type: 'link', icon:'fas fa-link',  url:'https://mctools.sharepoint.com/teams/cloudappfactory/SitePages/ApigeeX-Connectivity-from-CAF-Projects.aspx' },
                        { label: 'ApigeeX Developer Utilities', type: 'link', icon:'fas fa-link',  url:'https://mcc.apix.utilities.mayo.edu/' },
                    ]
                },

                {
                    label: 'GCP Core Services',
                    items: [
                        { label: 'GCP Console', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com' },
                        { label: 'Cloud Storage', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/storage' },
                        { label: 'Compute Engine', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/compute' },
                        { label: 'App Engine', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/appengine' },
                        { label: 'Kubernetes Engine (GKE)', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/kubernetes' },
                        { label: 'Cloud Functions', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/functions' },
                        { label: 'Cloud Run', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/run' },
                        { label: 'BigQuery', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/bigquery' },
                        { label: 'Cloud SQL', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/sql' },
                        { label: 'Firestore', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/firestore' },
                        { label: 'Datastore', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/datastore' },
                        { label: 'Spanner', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/spanner' },
                        { label: 'Cloud Pub/Sub', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/cloudpubsub' },
                        { label: 'Cloud Dataflow', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/dataflow' },
                        { label: 'Cloud Dataproc', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/dataproc' },
                        { label: 'Cloud Composer', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/composer' },
                        { label: 'Cloud Logging', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/logs' },
                        { label: 'Cloud Monitoring', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/monitoring' },
                        { label: 'Cloud IAM & Admin', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/iam-admin' },
                        { label: 'Cloud VPC', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/networking' },
                        { label: 'Cloud DNS', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/net-services/dns' },
                        { label: 'Cloud Load Balancing', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/net-services/loadbalancing' },
                        { label: 'Cloud CDN', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/net-services/cdn' },
                        { label: 'Secret Manager', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/security/secret-manager' },
                        { label: 'Cloud Scheduler', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/cloudscheduler' },
                        { label: 'Cloud Tasks', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/cloudtasks' },
                        { label: 'Cloud Endpoints', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/endpoints' },
                        { label: 'API Gateway', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/api-gateway' },
                        { label: 'Artifact Registry', type: 'link', icon:'fas fa-link',  url:'https://console.cloud.google.com/artifacts' }
                    ]
                }



            ]
            } ,

            { id: 2, label: 'On-Prem App', activeItemId: 'on-prem app', name: 'on-prem app', description: 'on-prem development resources' ,

                resources: [




                ]
            } ,

            { id: 3, label: 'Dev Tools', activeItemId: 'dev tools', name: 'dev tools', description: 'Description for Resource 2',

                resources: [

                    {
                        label: 'Programming Languages',
                        items: [
                            { label: 'Java', type: 'link', icon:'fas fa-link',  url:'https://adoptium.net/' },
                            { label: 'Dotnet', type: 'link', icon:'fas fa-link',  url:'https://dotnet.microsoft.com/en-us/download' },
                            { label: 'Python', type: 'link', icon:'fas fa-link',  url:'https://www.python.org/' },
                            { label: 'C#', type: 'link', icon:'fas fa-link',  url:'https://learn.microsoft.com/en-us/dotnet/csharp/' },
                            { label: 'Dokuwiki', type: 'link', icon:'fas fa-link',  url:'https://www.dokuwiki.org/dokuwiki' },
                        ]
                    },                    {
                        label: 'Database Systems',
                        items: [
                            { label: 'MSSQL', type: 'link', icon:'fas fa-link',  url:'https://learn.microsoft.com/en-us/sql/' },
                            { label: 'Postgresql', type: 'link', icon:'fas fa-link',  url:'https://www.postgresql.org/docs/' },
                            { label: 'MongoDB', type: 'link', icon:'fas fa-link',  url:'https://www.mongodb.com/docs/manual/core/databases-and-collections/' },
                            { label: 'H2', type: 'link', icon:'fas fa-link',  url:'https://www.h2database.com/html/main.html' },
                            { label: 'SQLite', type: 'link', icon:'fas fa-link',  url:'https://sqlite.org/' },
                        ]
                    },
                    {
                        label: 'Dev Tools',
                        items: [
                            { label: 'GitHub', type: 'link', icon:'fas fa-link',  url:'https://github.com' },
                            { label: 'Bitbucket', type: 'link', icon:'fas fa-link',  url:'https://bitbucket.org/product/' },
                            { label: 'Sourcetree', type: 'link', icon:'fas fa-link',  url:'https://www.sourcetreeapp.com/' },
                            { label: 'StackOverflow', type: 'link', icon:'fas fa-link',  url:'https://stackoverflow.com' },
                            { label: 'Maven', type: 'link', icon:'fas fa-link',  url:'https://maven.apache.org/' },
                            { label: 'Git Learning', type: 'link', icon:'fas fa-link',  url:'https://learngitbranching.js.org/?locale=en_US' },
                            { label: 'Git Cheat Sheet', type: 'link', icon:'fas fa-link',  url:'https://git-scm.com/cheat-sheet' },
                            { label: 'Git Cheat Sheet (GitHub)', type: 'link', icon:'fas fa-link',  url:'https://education.github.com/git-cheat-sheet-education.pdf' },
                            { label: 'Git Workflows', type: 'link', icon:'fas fa-link',  url:'https://nvie.com/posts/a-successful-git-branching-model/' },
                            { label: 'Git Workflows (Atlassian)', type: 'link', icon:'fas fa-link',  url:'https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow' },
                            { label: 'Git Workflows (Team)', type: 'download', icon:'fas fa-download',  filePath: 'assets/downloadDocs/Gitflow.pdf' },
                        ]
                    },
                    {
                        label: 'IDE Tools',
                        items: [
                            { label: 'Intellij IDEA', type: 'link', icon:'fas fa-link',  url:'https://www.jetbrains.com/idea/' },
                            { label: 'VS Code', type: 'link', icon:'fas fa-link',  url:'https://code.visualstudio.com' },
                            { label: 'SQL Developer (Oracle)', type: 'link', icon:'fas fa-link',  url:'https://www.oracle.com/database/sqldeveloper/' },
                            { label: 'DBeaver Community', type: 'link', icon:'fas fa-link',  url:'https://dbeaver.io/download/' },
                        ]
                    },
                    {
                        label: 'Api Tools',
                        items: [
                            { label: 'Insomnia', type: 'link', icon:'fas fa-link',  url:'https://insomnia.rest/' },
                            { label: 'Postman', type: 'link', icon:'fas fa-link',  url:'https://postman.com' },
                            { label: 'Keyrunner', type: 'link', icon:'fas fa-link',  url:'https://keyrunner.app/' },
                        ]
                    },
                    {
                        label: 'Project Management Tools',
                        items: [
                            { label: 'Azure DevOps', type: 'link', icon:'fas fa-link',  url:'https://dev.azure.com/mclm' },
                            { label: 'trello', type: 'link', icon:'fas fa-link',  url:'https://stackoverflow.com' },
                        ]
                    },

                    {
                        label: 'Container Tools',
                        items: [
                            { label: 'Docker', type: 'link', icon:'fas fa-link',  url:'https://docker.com' },
                            { label: 'Podman', type: 'link', icon:'fas fa-link',  url:'https://podman.io/' },
                        ]
                    },
                    {
                        label: 'Web Resources',
                        items: [
                            { label: 'Invisible Character Viewer', type: 'link', icon:'fas fa-link',  url:'https://invisiblecharacterviewer.com/' },
                            { label: 'Invisible Characters', type: 'link', icon:'fas fa-link',  url:'https://invisible-characters.com/view.html' },
                        ]
                    },

                ]

            } ,
            { id: 4, label: 'Dev References', activeItemId: 'dev references', name: 'dev references', description: 'Description for Resource 3',

                resources: [
                    {
                        label: 'Angular Development',
                        items: [
                            { label: 'Angular Official Docs', type: 'link', icon:'fas fa-link',  url:'https://angular.io/docs' },
                            { label: 'Angular CLI', type: 'link', icon:'fas fa-link',  url:'https://angular.io/cli' },
                            { label: 'Angular Material', type: 'link', icon:'fas fa-link',  url:'https://material.angular.io/' },
                            { label: 'Angular Blog', type: 'link', icon:'fas fa-link',  url:'https://blog.angular.io/' },
                            { label: 'Angular GitHub', type: 'link', icon:'fas fa-link',  url:'https://github.com/angular/angular' },
                            { label: 'RxJS Docs', type: 'link', icon:'fas fa-link',  url:'https://rxjs.dev/guide/overview' },
                            { label: 'TypeScript Docs', type: 'link', icon:'fas fa-link',  url:'https://www.typescriptlang.org/docs/' },
                            { label: 'Angular Awesome', type: 'link', icon:'fas fa-link',  url:'https://github.com/gdi2290/awesome-angular' },
                            { label: 'FontAwesome', type: 'link', icon:'fas fa-link',  url:'https://fontawesome.com/' },
                            { label: 'Tailwind CSS', type: 'link', icon:'fas fa-link',  url:'https://tailwindcss.com/docs/guides/angular' },
                            { label: 'Bootstrap', type: 'link', icon:'fas fa-link',  url:'https://getbootstrap.com/docs/5.0/getting-started/introduction/' },
                            { label: 'PrimeNG', type: 'link', icon:'fas fa-link',  url:'https://www.primefaces.org/primeng/' },
                            { label: 'NG Bootstrap', type: 'link', icon:'fas fa-link',  url:'https://ng-bootstrap.github.io/#/home' },
                            { label: 'Angular powered Bootstrap (ngx-bootstrap)', type: 'link', icon:'fas fa-link',  url:'https://valor-software.com/ngx-bootstrap/#/' },
                            { label: 'Highcharts', type: 'link', icon:'fas fa-link',  url:'https://www.highcharts.com/' },
                            { label: 'Highcharts Angular', type: 'link', icon:'fas fa-link',  url:'https://github.com/highcharts/highcharts-angular' },
                            { label: 'D3.js', type: 'link', icon:'fas fa-link',  url:'https://d3js.org/' },
                            { label: 'D3.js with Angular Guide', type: 'link', icon:'fas fa-link',  url:'https://blog.angular-university.io/angular-d3/' },
                            { label: 'TinyMCE', type: 'link', icon:'fas fa-link',  url:'https://www.tiny.cloud/docs/integrations/angular/' }
                        ]
                    },

                    {
                        label: 'Spring Boot Development',
                        items: [
                            { label: 'Spring Official Docs', type: 'link', icon:'fas fa-link',  url:'https://docs.spring.io/spring-framework/docs/current/reference/html/' },
                            { label: 'Spring Boot Docs', type: 'link', icon:'fas fa-link',  url:'https://docs.spring.io/spring-boot/docs/current/reference/html/' },
                            { label: 'Spring Initializr', type: 'link', icon:'fas fa-link',  url:'https://start.spring.io/' },
                            { label: 'Spring Guides', type: 'link', icon:'fas fa-link',  url:'https://spring.io/guides' },
                            { label: 'Spring Blog', type: 'link', icon:'fas fa-link',  url:'https://spring.io/blog' },
                            { label: 'Spring Security Docs', type: 'link', icon:'fas fa-link',  url:'https://docs.spring.io/spring-security/reference/' },
                            { label: 'Spring Data Docs', type: 'link', icon:'fas fa-link',  url:'https://docs.spring.io/spring-data/jpa/docs/current/reference/html/' },
                            { label: 'Spring GitHub', type: 'link', icon:'fas fa-link',  url:'https://github.com/spring-projects/spring-framework' },
                            { label: 'Spring JPA', type: 'link', icon:'fas fa-link',  url:'https://spring.io/projects/spring-data-jpa' },
                            { label: 'Hibernate', type: 'link', icon:'fas fa-link',  url:'https://hibernate.org/' },
                            { label: 'Hibernate Docs', type: 'link', icon:'fas fa-link',  url:'https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html' },
                            { label: 'JPA', type: 'link', icon:'fas fa-link',  url:'https://jakarta.ee/specifications/persistence/' },
                            { label: 'JPA Docs', type: 'link', icon:'fas fa-link',  url:'https://jakarta.ee/specifications/persistence/3.1/jakarta-persistence-spec-3.1.html' },
                            { label: 'JPA + Spring Boot Tutorial', type: 'link', icon:'fas fa-link',  url:'https://www.baeldung.com/the-persistence-layer-with-spring-data-jpa' },
                            { label: 'QueryDSL OpenFeign', type: 'link', icon:'fas fa-link',  url:'https://github.com/OpenFeign/querydsl/' },
                            { label: 'QueryDSL OpenFeign + Spring Boot Tutorial', type: 'link', icon:'fas fa-link',  url:'https://www.baeldung.com/spring-cloud-openfeign' },
                            { label: 'QueryDSL + Spring Boot Tutorial', type: 'link', icon:'fas fa-link',  url:'https://www.baeldung.com/querydsl-with-jpa-tutorial' },
                            { label: 'JOOQ', type: 'link', icon:'fas fa-link',  url:'https://www.jooq.org/' },
                            { label: 'JOOQ Docs', type: 'link', icon:'fas fa-link',  url:'https://www.jooq.org/doc/latest/manual/' },
                            { label: 'JOOQ + Spring Boot Tutorial', type: 'link', icon:'fas fa-link',  url:'https://www.baeldung.com/jooq-with-spring' },
                            { label: 'Jackson', type: 'link', icon:'fas fa-link',  url:'https://github.com/FasterXML/jackson' },
                            { label: 'Jackson Docs', type: 'link', icon:'fas fa-link',  url:'https://github.com/FasterXML/jackson-docs' },
                            { label: 'Lombok', type: 'link', icon:'fas fa-link',  url:'https://projectlombok.org/' },
                            { label: 'Lombok Docs', type: 'link', icon:'fas fa-link',  url:'https://projectlombok.org/features/all' },
                            { label: 'MapStruct', type: 'link', icon:'fas fa-link',  url:'https://mapstruct.org/' },
                            { label: 'MapStruct Docs', type: 'link', icon:'fas fa-link',  url:'https://mapstruct.org/documentation/' },
                            { label: 'MapStruct + Lombok Integration', type: 'link', icon:'fas fa-link',  url:'https://mapstruct.org/documentation/stable/reference/html/#lombok' },
                            { label: 'MapStruct + Spring Boot Tutorial', type: 'link', icon:'fas fa-link',  url:'https://www.baeldung.com/mapstruct' }

                        ]
                    }



                ]
            } ,
            { id: 4, label: 'AI Assistance', activeItemId: 'ai assistance', name: 'ai assistance', description: 'AI Assistance Resources',

                resources: [
                    {
                        label: 'General-Purpose',
                        items: [
                            { label: 'ChatGPT (OpenAI)', type: 'link', icon:'fas fa-link',  url:'https://chatgpt.com/' },
                            { label: 'Gemini (Google)', type: 'link', icon:'fas fa-link',  url:'https://gemini.google.com/app' },
                            { label: 'Grok (xAI)', type: 'link', icon:'fas fa-link',  url:'https://grok.com/' },
                            { label: 'Meta AI (Meta)', type: 'link', icon:'fas fa-link',  url:'https://www.meta.ai/' },
                            { label: 'Perplexity (Perplexity AI)', type: 'link', icon:'fas fa-link',  url:'https://www.perplexity.ai/' },
                            { label: 'HuggingChat (Hugging Face)', type: 'link', icon:'fas fa-link',  url:'https://huggingface.co/models' },
                            { label: 'Pi (Inflection AI)', type: 'link', icon:'fas fa-link',  url:'https://pi.ai/onboarding/pi-intro' },
                            { label: 'Claude (Anthropic)', type: 'link', icon:'fas fa-link',  url:'https://claude.ai/new' },

                        ]
                    },
                    {
                        label: 'Org Specific',
                        items: [
                            { label: 'MAYA (Mayo Clinic)', type: 'link', icon:'fas fa-link',  url:'https://app.maya.mayo.edu/agents/servicedesk' },

                        ]
                    },
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
