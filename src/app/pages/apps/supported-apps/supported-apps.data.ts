import { AppHeader, ApplicationDashboardApp } from '../../../core/model/application-dashboard.model';

export const SUPPORTED_APP_HEADERS: AppHeader[] = [];

export const SUPPORTED_APPS: ApplicationDashboardApp[] = [
    {
        id: 11,
        name: 'RoQCM',
        appHost: 'on-premise',
        configurationItem: 'CI00047357',
        wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:noqcs',
        orgLink: undefined,
        onCallLink: undefined,

        environments: [
            {
                id: 1,
                name: 'Dev Environment',
                available: true,
                appWebUri: 'https://roqcm.tcdev.mayo.edu',
                appSwaggerUri: undefined,
                apigeeUri: undefined,
                appDbConnectionString: undefined,
                appAzureId: undefined
            },
            {
                id: 2,
                name: 'Int/Test Environment',
                available: true,
                appWebUri: 'https://roqcm.tcint.mayo.edu',
                appSwaggerUri: undefined,
                apigeeUri: undefined,
                appDbConnectionString: undefined,
                appAzureId: undefined
            },
            {
                id: 3,
                name: 'Stg Environment',
                available: true,
                appWebUri: 'https://roqcm.tcstg.mayo.edu/',
                appSwaggerUri: undefined,
                apigeeUri: undefined,
                appDbConnectionString: undefined,
                appAzureId: undefined
            },
            {
                id: 4,
                name: 'Prod Environment',
                available: true,
                appWebUri: 'https://roqcm.tcprod.mayo.edu/',
                appSwaggerUri: undefined,
                apigeeUri: undefined,
                appDbConnectionString: undefined,
                appAzureId: undefined
            }
        ],
        repos: [
            {
                id: 1,
                repoName: 'App',
                repoUri: 'https://dev.azure.com/mclm/GBS%20CAD/_git/NGS_RoQCM'
            },
            {
                id: 2,
                repoName: 'IAC',
                repoUri: undefined
            },
            {
                id: 3,
                repoName: 'Api',
                repoUri: undefined
            },
            {
                id: 4,
                repoName: 'Apigee',
                repoUri: undefined
            }
        ],
        updatedOn: '2026-07-09',
        appSpecsMdFilePath: undefined,
        appCategory: {
            id: 1,
            name: 'Java Apps'
        }
    },

    {
        id: 12,
        name: 'SIA',
        appHost: 'on-premise',
        configurationItem: 'CI01565175',
        wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:sia',
        orgLink: undefined,
        onCallLink: undefined,

        environments: [
            {
                id: 1,
                name: 'Dev Environment',
                available: true,
                appWebUri: 'https://sia.tcdev.mayo.edu/sia',
                appSwaggerUri: undefined,
                apigeeUri: undefined,
                appDbConnectionString: undefined,
                appAzureId: undefined
            },
            {
                id: 2,
                name: 'Int/Test Environment',
                available: true,
                appWebUri: 'https://sia.tcint.mayo.edu/sia',
                appSwaggerUri: undefined,
                apigeeUri: undefined,
                appDbConnectionString: undefined,
                appAzureId: undefined
            },
            {
                id: 3,
                name: 'Stg Environment',
                available: false,
                appWebUri: undefined,
                appSwaggerUri: undefined,
                apigeeUri: undefined,
                appDbConnectionString: undefined,
                appAzureId: undefined
            },
            {
                id: 4,
                name: 'Prod Environment',
                available: true,
                appWebUri: 'https://sia.tcprod.mayo.edu/sia',
                appSwaggerUri: undefined,
                apigeeUri: undefined,
                appDbConnectionString: undefined,
                appAzureId: undefined
            }
        ],
        repos: [
            {
                id: 1,
                repoName: 'App',
                repoUri: 'https://dev.azure.com/mclm/GBS%20CAD/_git/LPEA_CAD_SAMPLE_INTAKE'
            },
            {
                id: 2,
                repoName: 'IAC',
                repoUri: undefined
            },
            {
                id: 3,
                repoName: 'Api',
                repoUri: undefined
            },
            {
                id: 4,
                repoName: 'Apigee',
                repoUri: undefined
            }
        ],
        updatedOn: '2025-11-18',
        appSpecsMdFilePath: undefined,
        appCategory: {
            id: 1,
            name: 'Java Apps'
        }
    },

    {
        id: 13,
        name: 'LSP',
        appHost: 'google',
        configurationItem: 'CI127530520',
        wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:labstatuspro',
        orgLink: undefined,
        onCallLink: undefined,

        environments: [
            {
                id: 1,
                name: 'Dev Environment',
                available: true,
                appWebUri: 'https://lsp-web-d.dlmp-cad-n.caf.mccapp.com/',
                appSwaggerUri: undefined,
                apigeeUri: undefined,
                appDbConnectionString: undefined,
                appAzureId: undefined
            },
            {
                id: 2,
                name: 'Int/Test Environment',
                available: true,
                appWebUri: 'https://lsp-web-t.dlmp-cad-n.caf.mccapp.com/',
                appSwaggerUri: undefined,
                apigeeUri: undefined,
                appDbConnectionString: undefined,
                appAzureId: undefined
            },
            {
                id: 3,
                name: 'Stg Environment',
                available: false,
                appWebUri: 'https://lsp-web-s.dlmp-cad-p.caf.mccapp.com/',
                appSwaggerUri: undefined,
                apigeeUri: undefined,
                appDbConnectionString: undefined,
                appAzureId: undefined
            },
            {
                id: 4,
                name: 'Prod Environment',
                available: true,
                appWebUri: 'https://lsp-web-p.dlmp-cad-p.caf.mccapp.com/',
                appSwaggerUri: undefined,
                apigeeUri: undefined,
                appDbConnectionString: undefined,
                appAzureId: undefined
            }
        ],
        repos: [
            {
                id: 1,
                repoName: 'App',
                repoUri: 'https://dev.azure.com/mclm/GBS%20CAD/_git/LabStatusPro'
            },
            {
                id: 2,
                repoName: 'IAC',
                repoUri: undefined
            },
            {
                id: 3,
                repoName: 'Api',
                repoUri: undefined
            },
            {
                id: 4,
                repoName: 'Apigee',
                repoUri: undefined
            }
        ],
        updatedOn: '2025-11-09',
        appSpecs: undefined,
        appCategory: {
            id: 1,
            name: 'Java Apps'
        }
    },

    {
        id: 14,
        name: 'MXD',
        appHost: 'on-premise',
        configurationItem: 'CI00054951',
        wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:ngs:mayoexperience',
        orgLink: undefined,
        onCallLink: undefined,

        environments: [
            {
                id: 1,
                name: 'Dev Environment',
                available: true,
                appWebUri: undefined,
                appSwaggerUri: 'https://rofngs923a.mayo.edu:8446/swagger-ui.html',
                apigeeUri: undefined,
                appDbConnectionString: undefined,
                appAzureId: undefined
            },
            {
                id: 2,
                name: 'Int/Test Environment',
                available: true,
                appWebUri: undefined,
                appSwaggerUri: 'https://rofngs923a.mayo.edu:8447/swagger-ui.html',
                apigeeUri: undefined,
                appDbConnectionString: undefined,
                appAzureId: undefined
            },
            {
                id: 3,
                name: 'Stg Environment',
                available: false,
                appWebUri: undefined,
                appSwaggerUri: undefined,
                apigeeUri: undefined,
                appDbConnectionString: undefined,
                appAzureId: undefined
            },
            {
                id: 4,
                name: 'Prod Environment',
                available: true,
                appWebUri: undefined,
                appSwaggerUri: 'https://mxd.mayo.edu/',
                apigeeUri: undefined,
                appDbConnectionString: undefined,
                appAzureId: undefined
            }
        ],
        repos: [
            {
                id: 1,
                repoName: 'App',
                repoUri: 'https://dev.azure.com/mclm/GBS%20CAD/_git/MXD'
            },
            {
                id: 2,
                repoName: 'IAC',
                repoUri: undefined
            },
            {
                id: 3,
                repoName: 'Api',
                repoUri: undefined
            },
            {
                id: 4,
                repoName: 'Apigee',
                repoUri: undefined
            }
        ],
        updatedOn: '2025-11-09',
        appSpecsMdFilePath: undefined,
        appCategory: {
            id: 1,
            name: 'Java Apps'
        }
    },
];
