import { MenuItem } from 'primeng/api';

export const AppItemIcon = {
    "wikiLink": "fa fa-book",
    "orgLink": "fa fa-sitemap",
    "appUri": "fa fa-laptop-code",
    "swaggerUri": "fa fa-file-code",
    "dbConnectionString": "fa fa-database",
    "azureId": "fa fa-key",
    "apigeeUri": "fa fa-exchange-alt",
    "appSpecificationLink": "fa fa-file-alt",
    'appBackLogLink': 'fa fa-tasks',
    'configurationItem': 'fa fa-cogs',
    'repoUri': 'fa fa-code-branch',
    'onCallLink': 'fa fa-headset'
}

export const AppHostIcon = {
    'azure': "fa fa-cloud",
    'google': "fab fa-google",
    'on-premise': "fa fa-server",
    'hybrid': "fa fa-network-wired"
}

export type AppHeaderInfoType = 'name' | 'image' | 'backlogUrl';


export const AppHeaderInfo: AppHeader[] = [
    {
        id: 1,
        name: 'Java Apps',
        image: 'assets/app/appClass/java.png',
        backlogUrl: [

            {
                icon: 'fa fa-tasks',
                label: 'NERDS',
                target:'_blank',
                command: () => window.open('https://dev.azure.com/mclm/GBS%20CAD/_backlogs/backlog/NERDS/Stories', '_blank')
            },
            {
                icon: 'fa fa-tasks',
                label: 'SMASH',
                target:'_blank',
                command: () => window.open('https://dev.azure.com/mclm/GBS%20CAD/_backlogs/backlog/SMASH/Stories', '_blank')
            },
            {
                icon: 'fa fa-tasks',
                label: 'Empiricals',
                target:'_blank',
                command: () => window.open('https://dev.azure.com/mclm/LT%20SAA/_backlogs/backlog/Empiricals/Stories', '_blank')
            }
        ]

    },

    {
        id: 2,
        name: 'DotNet Apps',
        image: 'assets/app/appClass/dotnet.png',
        backlogUrl: undefined
    },

    {
        id: 3,
        name: 'Dependency Apps',
        image: 'assets/app/appClass/dependencyApp.png',
        backlogUrl: undefined
    }
]

export interface AppHeader {
    id?: number;
    name?: string;
    image?: string;
    backlogUrl?: MenuItem[];

}

export interface AppRepo {
    id?: number;
    repoName?: string;
    repoUri?: string;
}

export interface AppEnvironment {
    id?: number;
    available?: boolean;
    name?: string;
    appWebUri?: string;
    appSwaggerUri?: string;
    apigeeUri?: string;
    appDbConnectionString?: string;
    appAzureId?: string;
}


export interface AppCategory {
    id?: number;
    name?: string;
    image?: string;
}

export interface SpecialtyApp {
    id?: number;
    name?: string;
    appHost?: 'azure' | 'google' | 'on-premise' | 'hybrid';
    configurationItem?: string;
    wikiLink?: string;
    orgLink?: string;
    onCallLink?: string;
    environments?: AppEnvironment[];
    repos?: AppRepo[];
    updatedOn?: string | Date;
    appSpecs?: string;
    appCategory?: AppCategory;
}
