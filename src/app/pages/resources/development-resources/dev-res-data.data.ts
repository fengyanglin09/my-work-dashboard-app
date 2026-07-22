import { ResourceCategory } from '../../../core/model/cheatsheet.model';
import { doc, download, link } from '../../../core/model/resource-item.factory';

export const DEVELOPMENT_RESOURCES: ResourceCategory[] = [
            {
                id: 1,
                label: 'Cloud',
                activeItemId: 'cloud',
                name: 'cloud',
                description: 'Cloud platform consoles, docs, and platform factory resources',
                resources: [
                    {
                        label: 'Azure',
                        items: [
                            link('Azure DevOps', 'https://dev.azure.com/mclm/'),
                            link('Azure Status', 'https://status.dev.azure.com/'),
                            link('Azure Portal', 'https://portal.azure.com/'),
                            link('Azure Entra Admin Center', 'https://entra.microsoft.com/#view/Microsoft_AAD_UsersAndTenants/UserManagementMenuBlade/~/AllUsers/menuId/'),
                            doc('Azure App Registration', 'assets/pages/development-resources/cloud/azure-app-registration.md'),
                            doc('Azure Assign AD Group for Users', 'assets/pages/development-resources/cloud/azure-load-user-group.md'),
                            doc('Azure CLI', 'assets/pages/development-resources/cloud/azure-cli-mac-cheatsheet.md'),
                            link('Enterprise Skills Init', 'https://esi.microsoft.com/')
                        ]
                    },
                    {
                        label: 'Google Cloud',
                        items: [
                            link('Mayo Clinic Cloud (MCC)', 'https://mcc.mayo.edu/'),
                            link('GCP Console', 'https://console.cloud.google.com'),
                            link('GCP Status', 'https://status.cloud.google.com/'),
                            link('GCP Status (Americas)', 'https://status.cloud.google.com/regional/americas'),
                            link('Mayo GCP Learning', 'https://mcc.mayo.edu/resources/google-learning')
                        ]
                    },
                    {
                        label: 'Cloud App Factory',
                        items: [
                            link('Cloud App Factory (CAF)', 'https://mctools.sharepoint.com/teams/cloudappfactory/SitePages/Cloud-App-Factory.aspx'),
                            link('CAF Documents', 'https://mctools.sharepoint.com/teams/cloudappfactory/Shared%20Documents/Forms/AllItems.aspx'),
                            doc('CAF Pipeline Info', 'assets/pages/development-resources/cloud/caf-pipeline.md'),
                            doc('CAF Docs', 'assets/pages/development-resources/cloud/caf-docs.md'),
                            link('CAF Best Practices', 'https://mctools.sharepoint.com/teams/cloudappfactory/SitePages/CAF-Best-Practices.aspx'),
                            link('SDE ADL/LPR', 'https://mctools.sharepoint.com/teams/cloudappfactory/SitePages/SDE-ADL-LPR-How-To.aspx?web=1'),
                            link('MCC Live & MCC Solution', 'https://mctools.sharepoint.com/teams/cloudappfactory/SitePages/SDE-MCC-Live-App-Tenant-How-To.aspx?web=1'),
                            link('MCC Big Query', 'https://mctools.sharepoint.com/teams/cloudappfactory/SitePages/BigQuery-QuickStart.aspx'),
                            link('CAF Dotnet Hello World Repo', 'https://dev.azure.com/mclm/Mayo%20Open%20Developer%20Network/_git/caf-helloworld-cs-dotnet')
                        ]
                    },
                    {
                        label: 'GCP Core Services',
                        items: [
                            link('Cloud Storage', 'https://console.cloud.google.com/storage'),
                            link('Compute Engine', 'https://console.cloud.google.com/compute'),
                            link('App Engine', 'https://console.cloud.google.com/appengine'),
                            link('Kubernetes Engine (GKE)', 'https://console.cloud.google.com/kubernetes'),
                            link('Cloud Functions', 'https://console.cloud.google.com/functions'),
                            link('Cloud Run', 'https://console.cloud.google.com/run'),
                            link('Cloud Logging', 'https://console.cloud.google.com/logs'),
                            link('Cloud Monitoring', 'https://console.cloud.google.com/monitoring'),
                            link('Cloud IAM & Admin', 'https://console.cloud.google.com/iam-admin'),
                            link('Cloud VPC', 'https://console.cloud.google.com/networking'),
                            link('Cloud DNS', 'https://console.cloud.google.com/net-services/dns'),
                            link('Cloud Load Balancing', 'https://console.cloud.google.com/net-services/loadbalancing'),
                            link('Cloud CDN', 'https://console.cloud.google.com/net-services/cdn'),
                            link('Cloud Scheduler', 'https://console.cloud.google.com/cloudscheduler'),
                            link('Cloud Tasks', 'https://console.cloud.google.com/cloudtasks'),
                            link('Artifact Registry', 'https://console.cloud.google.com/artifacts')
                        ]
                    }
                ]
            },
            {
                id: 2,
                label: 'Database',
                activeItemId: 'database',
                name: 'database',
                description: 'Database engines, local setup notes, and data platform services',
                resources: [
                    {
                        label: 'Database Systems',
                        items: [
                            link('MSSQL', 'https://learn.microsoft.com/en-us/sql/'),
                            link('PostgreSQL', 'https://www.postgresql.org/docs/'),
                            link('MongoDB', 'https://www.mongodb.com/docs/manual/core/databases-and-collections/'),
                            link('H2', 'https://www.h2database.com/html/main.html'),
                            link('SQLite', 'https://sqlite.org/')
                        ]
                    },
                    {
                        label: 'Local Setup',
                        items: [
                            doc('MSSQL Local Installation', 'assets/pages/development-resources/database/sql-server-mac-m4-podman.md'),
                            doc('MSSQL Local Setup', 'assets/pages/development-resources/database/sql-server-mac-setup-summary.md')
                        ]
                    },
                    {
                        label: 'Cloud Data Services',
                        items: [
                            doc('BigQuery', 'assets/pages/development-resources/cloud/gcp-bigquery.md'),
                            link('Cloud SQL', 'https://console.cloud.google.com/sql'),
                            link('Firestore', 'https://console.cloud.google.com/firestore'),
                            link('Datastore', 'https://console.cloud.google.com/datastore'),
                            link('Spanner', 'https://console.cloud.google.com/spanner'),
                            link('Cloud Dataflow', 'https://console.cloud.google.com/dataflow'),
                            link('Cloud Dataproc', 'https://console.cloud.google.com/dataproc'),
                            link('Cloud Composer', 'https://console.cloud.google.com/composer')
                        ]
                    },
                    {
                        label: 'Database Tools',
                        items: [
                            link('SQL Developer (Oracle)', 'https://www.oracle.com/database/sqldeveloper/'),
                            link('DBeaver Community', 'https://dbeaver.io/download/')
                        ]
                    }
                ]
            },
            {
                id: 3,
                label: 'Frontend',
                activeItemId: 'frontend',
                name: 'frontend',
                description: 'Frontend frameworks, UI libraries, charts, and editors',
                resources: [
                    {
                        label: 'Angular',
                        items: [
                            link('Angular Official Docs', 'https://angular.io/docs'),
                            link('Angular CLI', 'https://angular.io/cli'),
                            link('Angular Blog', 'https://blog.angular.io/'),
                            link('Angular GitHub', 'https://github.com/angular/angular'),
                            link('RxJS Docs', 'https://rxjs.dev/guide/overview'),
                            link('TypeScript Docs', 'https://www.typescriptlang.org/docs/'),
                            link('Angular Awesome', 'https://github.com/gdi2290/awesome-angular')
                        ]
                    },
                    {
                        label: 'UI Frameworks',
                        items: [
                            link('Angular Material', 'https://material.angular.io/'),
                            link('PrimeNG', 'https://www.primefaces.org/primeng/'),
                            link('Tailwind CSS', 'https://tailwindcss.com/docs/guides/angular'),
                            link('Bootstrap', 'https://getbootstrap.com/docs/5.0/getting-started/introduction/'),
                            link('NG Bootstrap', 'https://ng-bootstrap.github.io/#/home'),
                            link('ngx-bootstrap', 'https://valor-software.com/ngx-bootstrap/#/'),
                            link('FontAwesome', 'https://fontawesome.com/')
                        ]
                    },
                    {
                        label: 'Charts & Visualization',
                        items: [
                            link('Highcharts', 'https://www.highcharts.com/'),
                            link('Highcharts Angular', 'https://github.com/highcharts/highcharts-angular'),
                            link('D3.js', 'https://d3js.org/'),
                            link('D3.js with Angular Guide', 'https://blog.angular-university.io/angular-d3/')
                        ]
                    },
                    {
                        label: 'Rich Text Editors',
                        items: [
                            link('TinyMCE', 'https://www.tiny.cloud/docs/integrations/angular/'),
                            doc('NGX-Quill', 'assets/pages/development-resources/frontend/ngx-quill.md')
                        ]
                    }
                ]
            },
            {
                id: 4,
                label: 'Backend',
                activeItemId: 'backend',
                name: 'backend',
                description: 'Backend languages, frameworks, persistence, and service tooling',
                resources: [
                    {
                        label: 'Languages & Runtimes',
                        items: [
                            link('Java', 'https://adoptium.net/'),
                            doc('JAVA Installation', 'assets/pages/development-resources/java/manage-java-versions.md'),
                            doc('JAVA Upgrade', 'assets/pages/development-resources/java/jdk-upgrade-plan.md'),
                            link('Dotnet', 'https://dotnet.microsoft.com/en-us/download'),
                            link('C#', 'https://learn.microsoft.com/en-us/dotnet/csharp/'),
                            link('Python', 'https://www.python.org/')
                        ]
                    },
                    {
                        label: 'Spring Boot',
                        items: [
                            link('Spring Official Docs', 'https://docs.spring.io/spring-framework/docs/current/reference/html/'),
                            link('Spring Boot Docs', 'https://docs.spring.io/spring-boot/docs/current/reference/html/'),
                            link('Spring Initializr', 'https://start.spring.io/'),
                            link('Spring Guides', 'https://spring.io/guides'),
                            link('Spring Blog', 'https://spring.io/blog'),
                            link('Spring Data Docs', 'https://docs.spring.io/spring-data/jpa/docs/current/reference/html/'),
                            link('Spring GitHub', 'https://github.com/spring-projects/spring-framework')
                        ]
                    },
                    {
                        label: 'Persistence',
                        items: [
                            link('Spring JPA', 'https://spring.io/projects/spring-data-jpa'),
                            link('Hibernate', 'https://hibernate.org/'),
                            link('Hibernate Docs', 'https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html'),
                            link('JPA', 'https://jakarta.ee/specifications/persistence/'),
                            link('JPA Docs', 'https://jakarta.ee/specifications/persistence/3.1/jakarta-persistence-spec-3.1.html'),
                            link('JPA + Spring Boot Tutorial', 'https://www.baeldung.com/the-persistence-layer-with-spring-data-jpa'),
                            link('QueryDSL OpenFeign', 'https://github.com/OpenFeign/querydsl/'),
                            link('QueryDSL OpenFeign + Spring Boot Tutorial', 'https://www.baeldung.com/spring-cloud-openfeign'),
                            link('QueryDSL + Spring Boot Tutorial', 'https://www.baeldung.com/querydsl-with-jpa-tutorial'),
                            link('JOOQ', 'https://www.jooq.org/'),
                            link('JOOQ Docs', 'https://www.jooq.org/doc/latest/manual/'),
                            link('JOOQ + Spring Boot Tutorial', 'https://www.baeldung.com/jooq-with-spring')
                        ]
                    },
                    {
                        label: 'Java Libraries',
                        items: [
                            link('Jackson', 'https://github.com/FasterXML/jackson'),
                            link('Jackson Docs', 'https://github.com/FasterXML/jackson-docs'),
                            link('Lombok', 'https://projectlombok.org/'),
                            link('Lombok Docs', 'https://projectlombok.org/features/all'),
                            link('MapStruct', 'https://mapstruct.org/'),
                            link('MapStruct Docs', 'https://mapstruct.org/documentation/'),
                            link('MapStruct + Lombok Integration', 'https://mapstruct.org/documentation/stable/reference/html/#lombok'),
                            link('MapStruct + Spring Boot Tutorial', 'https://www.baeldung.com/mapstruct'),
                            link('VaVr', 'https://vavr.io/'),
                            link('VaVr Docs', 'https://docs.vavr.io/'),
                            link('Java API for Microsoft Doc', 'https://poi.apache.org/'),
                            link('Apache KIE - Drools', 'https://kie.apache.org/')
                        ]
                    },
                    {
                        label: 'Package Publishing',
                        items: [
                            link('npm Package Repo', 'https://www.npmjs.com/login'),
                            link('Maven Central Repo', 'https://central.sonatype.com/')
                        ]
                    },
                    {
                        label: 'Containers',
                        items: [
                            link('Docker', 'https://docker.com'),
                            link('Podman', 'https://podman.io/')
                        ]
                    }
                ]
            },
            {
                id: 5,
                label: 'Security',
                activeItemId: 'security',
                name: 'security',
                description: 'Authentication, authorization, secrets, and security reference material',
                resources: [
                    {
                        label: 'Identity & OAuth',
                        items: [
                            doc('Dashboard App Security', 'assets/pages/development-resources/security/app-security.md'),
                            doc('Client Credential API Tool Setup', 'assets/pages/development-resources/security/oauth-setup-keyrunner.md'),
                            doc('Resource Server ASP.NET', 'assets/pages/development-resources/security/aspnet-core-resource-server.md'),
                            link('Spring Security Docs', 'https://docs.spring.io/spring-security/reference/')
                        ]
                    },
                    {
                        label: 'Platform Security',
                        items: [
                            link('Secret Manager', 'https://console.cloud.google.com/security/secret-manager'),
                            link('Cloud IAM & Admin', 'https://console.cloud.google.com/iam-admin'),
                            link('Azure Entra Admin Center', 'https://entra.microsoft.com/#view/Microsoft_AAD_UsersAndTenants/UserManagementMenuBlade/~/AllUsers/menuId/'),
                            doc('Azure App Registration', 'assets/pages/development-resources/cloud/azure-app-registration.md'),
                            doc('Azure Assign AD Group for Users', 'assets/pages/development-resources/cloud/azure-load-user-group.md')
                        ]
                    }
                ]
            },
            {
                id: 6,
                label: 'Integration & APIs',
                activeItemId: 'integration-apis',
                name: 'integration-apis',
                description: 'API platforms, integration tools, and API clients',
                resources: [
                    {
                        label: 'API Tools',
                        items: [
                            link('Insomnia', 'https://insomnia.rest/'),
                            link('Postman', 'https://postman.com'),
                            link('Keyrunner', 'https://keyrunner.app/')
                        ]
                    },
                    {
                        label: 'Apigee',
                        items: [
                            link('Consumer Portal (Nonprod)', 'https://nonprod.apiportal.mcc.apix.mayo.edu/'),
                            link('Consumer Portal (Prod)', 'https://apiportal.mcc.apix.mayo.edu/'),
                            link('Mayo ApigeeX Overview', 'https://docs.mcc.mayo.edu/docs/mcc/apigee-x/overviewx/'),
                            link('Apigee Secret Update', 'https://docs.mcc.mayo.edu/docs/mcc/apigee-x/appsandteamsx/#api-keys'),
                            link('CAF Producer/Consumer Pattern', 'https://mctools.sharepoint.com/teams/cloudappfactory/SitePages/ApigeeX-Connectivity-from-CAF-Projects.aspx'),
                            link('ApigeeX Developer Utilities', 'https://mcc.apix.utilities.mayo.edu/'),
                            link('Cloud Endpoints', 'https://console.cloud.google.com/endpoints'),
                            link('API Gateway', 'https://console.cloud.google.com/api-gateway')
                        ]
                    },
                    {
                        label: 'Mayo Integration',
                        items: [
                            doc('Cleo Harmony', 'assets/pages/development-resources/integration/cleo-harmony.md')
                        ]
                    },
                    {
                        label: 'Messaging',
                        items: [
                            link('Cloud Pub/Sub', 'https://console.cloud.google.com/cloudpubsub')
                        ]
                    }
                ]
            },
            {
                id: 7,
                label: 'DevOps & Tools',
                activeItemId: 'devops-tools',
                name: 'devops-tools',
                description: 'Source control, IDEs, project tools, and everyday utilities',
                resources: [
                    {
                        label: 'Source Control',
                        items: [
                            link('GitHub', 'https://github.com'),
                            link('Bitbucket', 'https://bitbucket.org/product/'),
                            link('Sourcetree', 'https://www.sourcetreeapp.com/'),
                            link('Git Learning', 'https://learngitbranching.js.org/?locale=en_US'),
                            link('Git Cheat Sheet', 'https://git-scm.com/cheat-sheet'),
                            link('Git Cheat Sheet (GitHub)', 'https://education.github.com/git-cheat-sheet-education.pdf'),
                            link('Git Workflows', 'https://nvie.com/posts/a-successful-git-branching-model/'),
                            link('Git Workflows (Atlassian)', 'https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow'),
                            download('Git Workflows (Team)', 'assets/pages/development-resources/downloads/gitflow.pdf'),
                            doc('Git Removing File From History', 'assets/pages/development-resources/git/git-cleanup-guide.md')
                        ]
                    },
                    {
                        label: 'IDEs',
                        items: [
                            link('Intellij IDEA', 'https://www.jetbrains.com/idea/'),
                            link('Rider - ASP.NET', 'https://www.jetbrains.com/rider/'),
                            link('VS Code', 'https://code.visualstudio.com')
                        ]
                    },
                    {
                        label: 'Project & Design',
                        items: [
                            link('Azure DevOps', 'https://dev.azure.com/mclm'),
                            link('Trello', 'https://trello.com/'),
                            link('Lucid Chart', 'https://lucid.app/')
                        ]
                    },
                    {
                        label: 'General Tools',
                        items: [
                            link('StackOverflow', 'https://stackoverflow.com'),
                            link('Maven', 'https://maven.apache.org/'),
                            link('Dokuwiki', 'https://www.dokuwiki.org/dokuwiki')
                        ]
                    },
                    {
                        label: 'Web Utilities',
                        items: [
                            link('Invisible Character Viewer', 'https://invisiblecharacterviewer.com/'),
                            link('Invisible Characters', 'https://invisible-characters.com/view.html')
                        ]
                    }
                ]
            },
            {
                id: 8,
                label: 'AI Assistance',
                activeItemId: 'ai-assistance',
                name: 'ai-assistance',
                description: 'AI assistants, internal tools, and local model utilities',
                resources: [
                    {
                        label: 'General Purpose',
                        items: [
                            link('ChatGPT (OpenAI)', 'https://chatgpt.com/'),
                            link('Gemini (Google)', 'https://gemini.google.com/app'),
                            link('Grok (xAI)', 'https://grok.com/'),
                            link('Meta AI (Meta)', 'https://www.meta.ai/'),
                            link('Perplexity (Perplexity AI)', 'https://www.perplexity.ai/'),
                            link('HuggingChat (Hugging Face)', 'https://huggingface.co/models'),
                            link('Pi (Inflection AI)', 'https://pi.ai/onboarding/pi-intro'),
                            link('Claude (Anthropic)', 'https://claude.ai/new')
                        ]
                    },
                    {
                        label: 'Org Specific',
                        items: [
                            link('MAYA (Mayo Clinic)', 'https://app.maya.mayo.edu/agents/servicedesk'),
                            link('LiteLLM (Mayo Clinic)', 'https://llmgateway.mayo.edu/ui/'),
                            link('LLM Gateway (Mayo Clinic)', 'https://llmgateway.mayo.edu/#/'),
                            link('Claude Code via LLM Gateway (Mayo Clinic)', 'https://mctools-my.sharepoint.com/:w:/g/personal/mattson_nathan_mayo_edu/IQAEV2RfIUNbRZQzvFbSsMzyASK0OE-C2O4T1h1IO6ugu68?wdExp=TEAMS-TREATMENT&web=1&TeamsCID=63d1100e-40a3-476d-9c67-ae18e06fff59&isSPOFile=1&ovuser=a25fff9c-3f63-4fb2-9a8a-d9bdd0321f9a%2CLin.Pengpeng%40mayo.edu&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNjA2MTExODIxNiIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D&linkOpenTime=1783701397218'),
                            doc('Claude Code Local Setup', 'assets/pages/development-resources/ai-resources/claude-code-llm-gateway.md')
                        ]
                    },
                    {
                        label: 'Open Models Development',
                        items: [
                            link('Ollama', 'https://ollama.com/'),
                            link('LM Studio', 'https://lmstudio.ai/')
                        ]
                    }
                ]
            },
            {
                id: 9,
                label: 'Learning Resources',
                activeItemId: 'learning-resources',
                name: 'learning-resources',
                description: 'learning resources',
                resources: [
                    {
                        label: 'Mayo',
                        items: [
                            link('IT University', 'https://insideit.mayo.edu/it-university'),
                            link('OReilly', 'https://learning.oreilly.com/home/'),
                            link('Coursera', 'https://www.coursera.org/programs/mayoclinic'),
                            link('Pluralsight', 'https://app.pluralsight.com/'),
                            link('Udemy', 'https://mayoclinic.udemy.com/'),
                        ]
                    }
                ]
            }
        ];
