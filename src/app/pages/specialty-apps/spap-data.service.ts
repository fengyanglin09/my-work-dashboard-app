import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpecialtyApp } from './spap-data.model';

@Injectable()
// { providedIn: 'root' }
export class SpapDataService {
    getData() {
        return [
            {
                id: 11,
                name: 'SMASH',
                appHost: 'google',
                configurationItem: 'CI131329162',
                wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:smash',
                orgLink: undefined,
                onCallLink: undefined,

                environments: [
                    {
                        id: 1,
                        name: 'Dev Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-d.dlmp-cad-n.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: 'smash-webapp-d-404913688383:us-central1:smash-webapp-d-404913688383-db-dlmp-cad-dev',
                        appAzureId: 'a9f477ca-c91c-4d40-a9f8-f2d8923b74a4'
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-t.dlmp-cad-n.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: 'smash-webapp-t-404913688383:us-central1:smash-webapp-t-404913688383-db-dlmp-cad-test',
                        appAzureId: 'a9f477ca-c91c-4d40-a9f8-f2d8923b74a4'
                    },
                    {
                        id: 3,
                        name: 'Stg Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-s.dlmp-cad-p.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: 'smash-webapp-s-465825341433:us-central1:smash-webapp-s-465825341433-db-dlmp-cad-stage',
                        appAzureId: 'b9fbb305-1c8e-4529-b7fc-c7e5731aebf2'
                    },
                    {
                        id: 4,
                        name: 'Prod Environment',
                        available: true,
                        appWebUri: 'https://smash-webapp-p.dlmp-cad-p.caf.mccapp.com/',
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: 'smash-webapp-p-465825341433:us-central1:smash-webapp-p-465825341433-db-dlmp-cad-prod',
                        appAzureId: 'b9fbb305-1c8e-4529-b7fc-c7e5731aebf2'
                    }
                ],
                repos: [
                    {
                        id: 1,
                        repoName: 'App',
                        repoUri: 'https://dev.azure.com/mclm/GBS%20CAD/_git/SMASH-APP'
                    },
                    {
                        id: 2,
                        repoName: 'IAC',
                        repoUri: 'https://dev.azure.com/mclm/GBS%20CAD/_git/SMASH-IAC'
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
                appSpecs: `
                        <div>
                          <p><b>Dependency App:</b> <span style="color:#2c7be5;">CliApi</span></p>
                          <ol style="margin-left: 1rem; list-style-type: decimal;">
                            <li><code>/v1/Sslv/SampleInfo</code></li>
                            <li><code>/v1/Sslv/Result</code></li>
                            <li><code>/v1/SoftMic/Patient/getDemographics</code></li>
                          </ol>
                        </div>
                         <div style="margin-top:5rem;">
                          <p><b>Dependency Auth Server:</b> <span style="color:#2c7be5;">Azure Entra ID</span></p>
                          <ol style="margin-left: 1rem; list-style-type: decimal;">
                            <li><code>Azure Tenant Id - a25fff9c-3f63-4fb2-9a8a-d9bdd0321f9a</code></li>
                            <li><code>App Roles - ADMINISTRATOR, TECH, SPECIALIST, CONSULTANT</code></li>
                          </ol>
                        </div>

                        `,
                appCategory: {
                    id: 1,
                    name: 'Java Apps'
                }
            },

            {
                id: 12,
                name: 'GFR',
                appHost: 'on-premise',
                configurationItem: 'CI155931678',
                wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:gfr',
                orgLink: 'https://mayoweb.mayo.edu/dlmp-im/systems-tools-listing.html?system=gfr',
                onCallLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=oncall:renal',

                environments: [
                    {
                        id: 1,
                        name: 'Dev Environment',
                        available: true,
                        appWebUri: 'https://gfr.tcdev.mayo.edu/gfr/',
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: 'jdbc:jtds:sqlserver://ROEFDN827Q/dlmp_ren_dev;domain=MFAD;useNTLMv2=true',
                        appAzureId: '5f4fc0e7-0989-4134-9d23-41afe461357c'
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: 'https://gfr.tcint.mayo.edu/gfr/',
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: 'jdbc:jtds:sqlserver://ROEFDN927Q/dlmp_ren_int;domain=MFAD;useNTLMv2=true\n',
                        appAzureId: '5f4fc0e7-0989-4134-9d23-41afe461357c'
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
                        appWebUri: 'https://gfr.tcprod.mayo.edu/gfr/',
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: 'jdbc:jtds:sqlserver://ROEFDN037Q/dlmp_ren_prod;domain=MFAD;useNTLMv2=true\n',
                        appAzureId: '6421a6a2-179d-4272-9c84-9e1d9ec6e065'
                    }
                ],
                repos: [
                    {
                        id: 1,
                        repoName: 'App',
                        repoUri: 'https://dev.azure.com/mclm/GBS%20CAD/_git/GFR'
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
                appSpecs: `
                         <div>
                              <p><b>Dependency App:</b> <span style="color:#2c7be5;">CliApi</span></p>
                              <ol style="list-style-type: decimal; padding-left: 1.5rem; margin-top: 0.5rem;">
                                <li><code>/v1/Result/bioChem</code></li>
                                <li><code>/v1/Sslv/SampleInfo</code></li>
                                <li><code>/v1/Sslv/Result</code></li>
                                <li><code>/v1/SoftMic/Patient/getDemographics</code></li>
                                <li><code>/v1/Case/SoftId/Search</code></li>
                              </ol>
                          </div>
                          <div style="margin-top:5rem;">
                              <p><b>Dependency Auth Server:</b> <span style="color:#2c7be5;">Azure Entra ID</span></p>
                              <ol style="margin-left: 1rem; list-style-type: decimal;">
                                <li><code>Azure Tenant Id - a25fff9c-3f63-4fb2-9a8a-d9bdd0321f9a</code></li>
                                <li><code>App Roles - ADMINISTRATOR, TECH, NURSE</code></li>
                              </ol>
                        </div>
                        `,
                appCategory: {
                    id: 1,
                    name: 'Java Apps'
                }
            },

            {
                id: 13,
                name: 'NERDS',
                appHost: 'azure',
                configurationItem: 'CI02041840',
                wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:nerds',
                orgLink: 'https://mayoweb.mayo.edu/dlmp-im/systems-tools-listing.html?system=nerds',
                onCallLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=oncall:nerds',

                environments: [
                    {
                        id: 1,
                        name: 'Dev Environment',
                        available: true,
                        appWebUri: 'https://nerds-dev.mayo.edu/nerds/',
                        appSwaggerUri: 'https://nerds-dev-api2.mayo.edu/swagger-ui/index.html',
                        apigeeUri: undefined,
                        appDbConnectionString: 'mcqfdn801ncsqlmi.97716e376a1c.database.windows.net',
                        appAzureId: 'e8b97f0d-3a2e-4537-b70b-1659cdf069ef'
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: 'https://nerds-int.mayo.edu/nerds/',
                        appSwaggerUri: 'https://nerds-int-api2.mayo.edu/swagger-ui/index.html',
                        apigeeUri: undefined,
                        appDbConnectionString: 'mcqfdn901ncsqlmi.97716e376a1c.database.windows.net',
                        appAzureId: 'ec5701c2-740e-46db-a056-9be3fd3725d7'
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
                        appWebUri: 'https://nerds.mayo.edu/nerds/',
                        appSwaggerUri: 'https://nerds-api.mayo.edu/swagger-ui/index.html',
                        apigeeUri: undefined,
                        appDbConnectionString: 'mcqnrd001ncsqlmi.87ee6c734738.database.windows.net',
                        appAzureId: 'be32d2be-bfed-4c14-89ff-73400f1f9c29'
                    }
                ],
                repos: [
                    {
                        id: 1,
                        repoName: 'App',
                        repoUri: 'https://dev.azure.com/mclm/GBS%20CAD/_git/NERDS_UI'
                    },
                    {
                        id: 2,
                        repoName: 'IAC',
                        repoUri: undefined
                    },
                    {
                        id: 3,
                        repoName: 'Api',
                        repoUri: 'https://dev.azure.com/mclm/GBS%20CAD/_git/NERDS_API'
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
                name: 'Pub Services',
                appHost: 'google',
                configurationItem: 'CI01611088',
                wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:ngs:genomics_commons:publicationservices',
                orgLink: 'https://mayoweb.mayo.edu/dlmp-im/systems-tools-listing.html?system=genomics_commons_pubservices',
                onCallLink: undefined,

                environments: [
                    {
                        id: 1,
                        name: 'Dev Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://pub-svcs-d.dlmp-cad-n.caf.mccapp.com/swagger-ui/index.html',
                        apigeeUri: 'https://dev.mcc.apix.mayo.edu/pub-med-api/',
                        appDbConnectionString: 'pub-svcs-d-404913688383:us-central1:pub-svcs-d-404913688383-db-dlmp-cad-dev',
                        appAzureId: 'ef7a3f0b-bca6-4e8b-9c55-b7d481971546'
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://pub-svcs-t.dlmp-cad-n.caf.mccapp.com/swagger-ui/index.html',
                        apigeeUri: 'https://test.mcc.apix.mayo.edu/pub-med-api/',
                        appDbConnectionString: 'pub-svcs-t-404913688383:us-central1:pub-svcs-t-404913688383-db-dlmp-cad-test',
                        appAzureId: 'ef7a3f0b-bca6-4e8b-9c55-b7d481971546'
                    },
                    {
                        id: 3,
                        name: 'Stg Environment',
                        available: false,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://pub-svcs-s.dlmp-cad-p.caf.mccapp.com/swagger-ui/index.html',
                        apigeeUri: 'https://test.mcc.apix.mayo.edu/pub-med-api/',
                        appDbConnectionString: 'pub-svcs-s-465825341433:us-central1:pub-svcs-s-465825341433-db-dlmp-cad-stage',
                        appAzureId: '9d1a5200-f474-4dde-9707-b32825b26b22'
                    },
                    {
                        id: 4,
                        name: 'Prod Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://pub-svcs-p.dlmp-cad-p.caf.mccapp.com/swagger-ui/index.html',
                        apigeeUri: 'https://prod.mcc.apix.mayo.edu/pub-med-api/',
                        appDbConnectionString: 'pub-svcs-p-465825341433:us-central1:pub-svcs-p-465825341433-db-dlmp-cad-prod',
                        appAzureId: '9d1a5200-f474-4dde-9707-b32825b26b22'
                    }
                ],
                repos: [
                    {
                        id: 1,
                        repoName: 'App',
                        repoUri: 'https://dev.azure.com/mclm/GBS%20CAD/_git/Genomics_Publication_Service_GCP_APP'
                    },
                    {
                        id: 2,
                        repoName: 'IAC',
                        repoUri: 'https://dev.azure.com/mclm/GBS%20CAD/_git/Genomics_Publication_Service_GCP_IAC'
                    },
                    {
                        id: 3,
                        repoName: 'Api',
                        repoUri: undefined
                    },
                    {
                        id: 4,
                        repoName: 'Apigee',
                        repoUri: 'https://dev.azure.com/mclm/GBS%20CAD/_git/apg-x-pxy-cad-gbs-gc-pub-svcs'
                    }
                ],
                updatedOn: '2025-11-09',
                appSpecs: `
                         <div>
                              <p><b>Client Apps:</b></p>
                              <ol style="list-style-type: decimal; padding-left: 1.5rem; margin-top: 0.5rem;">
                                <li><code>NGS Workbench (NGSWB)
                                 <a href="https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:ngswb" target="_blank" rel="noopener">
                                  <i class="fa fa-external-link-alt"></i>
                                 </a>
                                </code></li>
                                <li><code>Microarray Workbench (MaWB/ACGH)
                                 <a href="https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:acgh" target="_blank" rel="noopener">
                                  <i class="fa fa-external-link-alt"></i>
                                 </a>
                                </code></li>
                                <li><code>Mayo Gene Knowledge (MGK)
                                <a href="https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:mgk" target="_blank" rel="noopener">
                                  <i class="fa fa-external-link-alt"></i>
                                </a>
                                </code></li>
                              </ol>
                          </div>
                        `,
                appCategory: {
                    id: 1,
                    name: 'Java Apps'
                }
            },

            {
                id: 14,
                name: 'SKO/SCF',
                appHost: 'on-premise',
                configurationItem: 'CI00025696',
                wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:scf',
                orgLink: 'https://mayoweb.mayo.edu/dlmp-im/systems-tools-listing.html?system=25696',
                onCallLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=oncall:sko',

                environments: [
                    {
                        id: 1,
                        name: 'Dev Environment',
                        available: true,
                        appWebUri: 'https://scf.tcdev.mayo.edu/',
                        appSwaggerUri: '',
                        apigeeUri: '',
                        appDbConnectionString: 'jdbc:jtds:sqlserver://ROEFDN827Q/dlmp_sko_dev;domain=MFAD;useNTLMv2=true',
                        appAzureId: 'd6be48ff-d02e-4511-adc1-a20d834a2fad'
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: 'https://scf.tcint.mayo.edu/',
                        appSwaggerUri: '',
                        apigeeUri: '',
                        appDbConnectionString: 'jdbc:jtds:sqlserver://ROEFDN927Q/dlmp_sko_int;domain=MFAD;useNTLMv2=true',
                        appAzureId: 'd6be48ff-d02e-4511-adc1-a20d834a2fad'
                    },
                    {
                        id: 3,
                        name: 'Stg Environment',
                        available: false,
                        appWebUri: undefined,
                        appSwaggerUri: '',
                        apigeeUri: '',
                        appDbConnectionString: '',
                        appAzureId: ''
                    },
                    {
                        id: 4,
                        name: 'Prod Environment',
                        available: true,
                        appWebUri: 'https://scf.tcprod.mayo.edu/',
                        appSwaggerUri: '',
                        apigeeUri: '',
                        appDbConnectionString: 'jdbc:jtds:sqlserver://ROEFDN037Q/dlmp_sko_prod;domain=MFAD;useNTLMv2=true',
                        appAzureId: 'e1d01570-3f93-44f9-ae0f-16ffb890ed22'
                    }
                ],
                repos: [
                    {
                        id: 1,
                        repoName: 'App',
                        repoUri: 'https://dev.azure.com/mclm/GBS%20CAD/_git/SCF'
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
                updatedOn: '2026-01-08',
                appSpecs: ``,
                appCategory: {
                    id: 1,
                    name: 'Java Apps'
                }
            },

            {
                id: 15,
                name: 'RTU/RTUSE',
                appHost: 'on-premise',
                configurationItem: 'CI00025696',
                wikiLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=application:rtu',
                orgLink: 'https://mayoweb.mayo.edu/dlmp-im/systems-tools-listing.html?system=25493',
                onCallLink: 'https://cadwiki.mayo.edu/dokuwiki/doku.php?id=oncall:rtu',

                environments: [
                    {
                        id: 1,
                        name: 'Dev Environment',
                        available: true,
                        appWebUri: 'https://rtuse.tcdev.mayo.edu/',
                        appSwaggerUri: '',
                        apigeeUri: '',
                        appDbConnectionString: 'jdbc:jtds:sqlserver://ROEFDN827Q/dlmp_rtu_dev;domain=MFAD;useNTLMv2=true',
                        appAzureId: '5d4c0d61-5d05-48ef-bd01-9430a887bc21'
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: 'https://rtuse.tcint.mayo.edu/',
                        appSwaggerUri: '',
                        apigeeUri: '',
                        appDbConnectionString: 'jdbc:jtds:sqlserver://ROEFDN927Q/dlmp_rtu_int;domain=MFAD;useNTLMv2=true',
                        appAzureId: '5d4c0d61-5d05-48ef-bd01-9430a887bc21'
                    },
                    {
                        id: 3,
                        name: 'Stg Environment',
                        available: false,
                        appWebUri: undefined,
                        appSwaggerUri: '',
                        apigeeUri: '',
                        appDbConnectionString: '',
                        appAzureId: ''
                    },
                    {
                        id: 4,
                        name: 'Prod Environment',
                        available: true,
                        appWebUri: 'https://rtuse.tcprod.mayo.edu/',
                        appSwaggerUri: '',
                        apigeeUri: '',
                        appDbConnectionString: 'jdbc:jtds:sqlserver://ROEFDN033Q/dlmp_rtu_prod;domain=MFAD;useNTLMv2=true',
                        appAzureId: 'e1d01570-3f93-44f9-ae0f-16ffb890ed22'
                    }
                ],
                repos: [
                    {
                        id: 1,
                        repoName: 'App',
                        repoUri: 'https://dev.azure.com/mclm/GBS%20CAD/_git/RTUSE'
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
                updatedOn: '2026-01-08',
                appSpecs: ``,
                appCategory: {
                    id: 1,
                    name: 'Java Apps'
                }
            },

            {
                id: 21,
                name: 'Dotnet',
                configurationItem: undefined,
                wikiLink: undefined,
                orgLink: undefined,
                onCallLink: undefined,

                environments: [
                    {
                        id: 1,
                        name: 'Dev Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: undefined,
                        apigeeUri: undefined,
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                    {
                        id: 3,
                        name: 'Stg Environment',
                        available: true,
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
                        repoUri: undefined
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
                    id: 2,
                    name: 'DotNet Apps'
                }
            },

            {
                id: 31,
                name: 'CLI API',
                configurationItem: undefined,
                wikiLink: undefined,
                orgLink: undefined,
                onCallLink: undefined,

                environments: [
                    {
                        id: 1,
                        name: 'Dev Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://cadlis.dev.mayo.edu/swagger/index.html',
                        apigeeUri: 'https://dev.mcc.apix.mayo.edu/cad-lis-api/',
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                    {
                        id: 2,
                        name: 'Int/Test Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://cadlis.int.mayo.edu/swagger/index.html',
                        apigeeUri: 'https://test.mcc.apix.mayo.edu/cad-lis-api/',
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                    {
                        id: 3,
                        name: 'Stg Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://cadlis.stg.mayo.edu/swagger/index.html',
                        apigeeUri: 'https://stage.mcc.apix.mayo.edu/cad-lis-api/',
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    },
                    {
                        id: 4,
                        name: 'Prod Environment',
                        available: true,
                        appWebUri: undefined,
                        appSwaggerUri: 'https://cadlis.prod.mayo.edu/swagger/index.html',
                        apigeeUri: 'https://prod.mcc.apix.mayo.edu/cad-lis-api/',
                        appDbConnectionString: undefined,
                        appAzureId: undefined
                    }
                ],
                repos: [
                    {
                        id: 1,
                        repoName: 'App',
                        repoUri: undefined
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
                        repoUri: 'https://dev.azure.com/mclm/GBS%20CAD/_git/apg-x-pxy-cad-lis-api'
                    }
                ],
                updatedOn: '2025-12-01',
                appSpecs: undefined,
                appCategory: {
                    id: 3,
                    name: 'Dependency Apps'
                }
            }
        ] as SpecialtyApp[];
    }

    constructor(private http: HttpClient) {}

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
