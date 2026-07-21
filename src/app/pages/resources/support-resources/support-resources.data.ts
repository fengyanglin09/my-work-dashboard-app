import { ResourceCategory } from '../../../core/model/cheatsheet.model';
import { doc, download, link } from '../../../core/model/resource-item.factory';

export const SUPPORT_RESOURCES: ResourceCategory[] = [
            {
                id: 1,
                label: 'Team & Admin',
                activeItemId: 'team-admin',
                name: 'team-admin',
                description: 'Team home pages, PTO, purchasing, and general admin resources',
                resources: [
                    {
                        label: 'LT SAA',
                        items: [
                            link('SharePoint Home Page', 'https://mctools.sharepoint.com/teams/LTSAA'),
                            link('LT SAA Dashboard', 'https://mcsm.service-now.com/$pa_dashboard.do?sysparm_dashboard=8e4d18ed93290750b348f5cb5cba1036&sysparm_tab=7e5d5ced93290750b348f5cb5cba10c4&sysparm_cancelable=true&sysparm_editable=undefined&sysparm_active_panel=false'),
                            download('PTO Request Process', 'assets/pages/support-resources/downloads/pto-request-process.pdf')
                        ]
                    },
                    {
                        label: 'Mayo Internal',
                        items: [
                            link('Mayo Home Page', 'https://mayoweb.mayo.edu/'),
                            link('IT Admin Page', 'https://mctools.sharepoint.com/teams/IT-Admin-Assist/SitePages/Home.aspx'),
                            doc('Peripherals Purchase', 'assets/pages/support-resources/admin/peripherals-purchase.md'),
                            link('Device Check', 'http://epsvc/refresh/eligible.aspx')
                        ]
                    }
                ]
            },
            {
                id: 2,
                label: 'Service Requests',
                activeItemId: 'service-requests',
                name: 'service-requests',
                description: 'ServiceNow and request intake links',
                resources: [
                    {
                        label: 'ServiceNow',
                        items: [
                            link('ServiceNow', 'https://mcsm.service-now.com/'),
                            link('Enterprise Directory Services', 'https://mcsm.service-now.com/employeeconnect?id=sc_cat_item_guide&sys_id=b90f01ea470996104d0ce07a216d4354')
                        ]
                    },
                    {
                        label: 'Cloud Requests',
                        items: [
                            doc('Cloud App Factory Request', 'assets/pages/support-resources/cloud/cloud-app-factory-request.md'),
                            link('Apigee Support Request', 'https://docs.mcc.mayo.edu/docs/mcc/apigee-x/contactusx')
                        ]
                    }
                ]
            },
            {
                id: 3,
                label: 'On-Prem Hosting',
                activeItemId: 'on-prem-hosting',
                name: 'on-prem-hosting',
                description: 'Web hosting requests, restart tools, context files, and logs',
                resources: [
                    {
                        label: 'Requests & Incidents',
                        items: [
                            link('Application Hosting Web Service', 'http://webrequests/'),
                            link('Application Hosting Web Incident', 'http://webincidents/'),
                            link('Application Context Management', 'https://mcsm.service-now.com/kb_knowledge.do?sys_id=a9d524cac31f2650a5b69fee0501317a&sysparm_record_target=kb_knowledge&sysparm_record_row=5&sysparm_record_rows=51&sysparm_record_list=sys_tags.e77b51c01b10b014ef5deb11604bcb8b%3De77b51c01b10b014ef5deb11604bcb8b%5EORsys_tags.f18b55c01b10b014ef5deb11604bcb63%3Df18b55c01b10b014ef5deb11604bcb63%5EORsys_tags.1ab76e818372b9506ae9f130feaad368%3D1ab76e818372b9506ae9f130feaad368%5Eu_coordinator_group%3D858e707edb1b7a8435c57e09af961921%5EORu_coordinator_group%3D9e9c62731b17fc10f283c806604bcbd3%5Eworkflow_state%3Dpublished%5Eu_availability%21%3Don_mobile%5EORu_availability%3D%5EORDERBYshort_description'),
                            link('Web Hosting Info', 'https://mayoweb.mayo.edu/mwsandbox/infodash.html')
                        ]
                    },
                    {
                        label: 'Operations',
                        items: [
                            doc('Application Hosting Web Onboarding Info', 'assets/pages/support-resources/on-prem-hosting/application-hosting-web-onboarding.md'),
                            link('Web Application Restart', 'http://dotnetprod.mayo.edu/mwt/appmanager/')
                        ]
                    },
                    {
                        label: 'Context Files & Logs',
                        items: [
                            link('Tomcat Context Files (Win)', 'file://mfad.mfroot.org/rchweb/sow/Tomcat/dlm'),
                            link('Tomcat Context Files (Mac)', 'smb://mfad.mfroot.org/rchweb/sow/Tomcat/dlm'),
                            link('Tomcat Logs (Win)', 'file://mfad.mfroot.org/rchweb/reap/Tomcat/dlm'),
                            link('Tomcat Logs (Mac)', 'smb://mfad.mfroot.org/rchweb/reap/Tomcat/dlm')
                        ]
                    }
                ]
            },
            {
                id: 4,
                label: 'Security & Compliance',
                activeItemId: 'security-compliance',
                name: 'security-compliance',
                description: 'Security scanning, third-party risk, and compliance links',
                resources: [
                    {
                        label: 'Security Scanning',
                        items: [
                            link('Veracode', 'https://veracode.mayo.edu/'),
                            link('Veracode Pipeline', 'https://dev.azure.com/mclm/ALM%20Reference/_wiki/wikis/project-wiki/8451/Veracode-Scanning-in-Pipeline')
                        ]
                    },
                    {
                        label: 'Risk Management',
                        items: [
                            link('TPRM (3rd Party Risk Management)', 'https://thirdpartyriskmanagement.mayo.edu/')
                        ]
                    }
                ]
            },
            {
                id: 5,
                label: 'Application Support',
                activeItemId: 'application-support',
                name: 'application-support',
                description: 'Application-specific support portals',
                resources: [
                    {
                        label: 'Mayo Apps',
                        items: [
                            link('Title21', 'https://mc.title21.com/')
                        ]
                    }
                ]
            }
        ];
