import { ResourceCategory } from '../../core/model/cheatsheet.model';
import { doc, link } from '../../core/model/resource-item.factory';

export const ACCESS_AND_ACCOUNT_RESOURCES: ResourceCategory[] = [
            {
                id: 1,
                label: 'App Access',
                activeItemId: 'app-access',
                name: 'app-access',
                description: 'Access request portals, onboarding, and software subscriptions',
                resources: [
                    {
                        label: 'Access Requests',
                        items: [
                            link('Electronic Access Page', 'https://insideit.mayo.edu/electronic-access/'),
                            link('SailPoint', 'https://electronicaccess.mayo.edu/identityiq/home.jsf'),
                            link('App Onboarding With IDM', 'https://mcsm.service-now.com/kb_view.do?sysparm_article=KB0084207'),
                            link('Software Subscription', 'https://mcsm.service-now.com/employeeconnect?id=nr_it_topic&topic_id=692c9895c3e4a2d0b1b935001501314f&in_context=true'),
                            link('Mayo Clinic IT Subscriptions', 'https://mcsubs.mayo.edu/'),
                        ]
                    },
                    {
                        label: 'Certificates',
                        items: [
                            link('Sectigo SSL Cert', 'https://cert-manager.com/customer/mayo/ssl/Idp/login')
                        ]
                    }
                ]
            },
            {
                id: 2,
                label: 'User Accounts',
                activeItemId: 'user-accounts',
                name: 'user-accounts',
                description: 'Standard user account management and password tools',
                resources: [
                    {
                        label: 'Profile & Identity',
                        items: [
                            link('Master Data Management', 'https://masterdatamanagement.mayo.edu/')
                        ]
                    },
                    {
                        label: 'Passwords',
                        items: [
                            link('Password Change', 'https://changepass.mayo.edu/Tools/UserPasswordChange'),
                            link('Password Generator', 'https://us.norton.com/feature/password-generator')
                        ]
                    }
                ]
            },
            {
                id: 3,
                label: 'MFA & Authentication',
                activeItemId: 'mfa-authentication',
                name: 'mfa-authentication',
                description: 'Multifactor authentication and authenticator setup resources',
                resources: [
                    {
                        label: 'MFA Tools',
                        items: [
                            link('Multifactor Auth Tools', 'https://itconnect.mayo.edu/multifactor-authentication-tools')
                        ]
                    },
                    {
                        label: 'Authenticator Guides',
                        items: [
                            link('Microsoft Authenticator Doc 1', 'https://mcsm.service-now.com/now/nav/ui/classic/params/target/kb_view.do%3Fsysparm_article%3DKB0101141'),
                            link('Microsoft Authenticator Doc 2', 'https://mcsm.service-now.com/now/nav/ui/classic/params/target/kb_view.do%3Fsysparm_article%3DKB0108430')
                        ]
                    }
                ]
            },
            {
                id: 4,
                label: 'Work & Service Accounts',
                activeItemId: 'work-service-accounts',
                name: 'work-service-accounts',
                description: 'Privileged account, service account, and vault resources',
                resources: [
                    {
                        label: 'Service Accounts',
                        items: [
                            link('Service Account Management', 'https://idmp-prod-sam-ui.mayo.edu/')
                        ]
                    },
                    {
                        label: 'Work Accounts',
                        items: [
                            link('EPAM (Vault)', 'https://epam.mayo.edu/'),
                            link('S Account Password Change', 'https://changepass.mayo.edu/Tools/WorkAccountPasswordChange')
                        ]
                    }
                ]
            },
            {
                id: 5,
                label: 'Cloud Access',
                activeItemId: 'cloud-access',
                name: 'cloud-access',
                description: 'Cloud access notes and production JIT steps',
                resources: [
                    {
                        label: 'GCP Production',
                        items: [
                            doc('Access GCP Prod Env', 'assets/pages/access-and-account-resources/cloud/gcp-prod-access.md')
                        ]
                    }
                ]
            }
        ];
