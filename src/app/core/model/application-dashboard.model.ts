import { MenuItem } from 'primeng/api';

export const AppItemIcon = {
    wikiLink: 'fa fa-book',
    orgLink: 'fa fa-sitemap',
    appUri: 'fa fa-laptop-code',
    swaggerUri: 'fa fa-file-code',
    dbConnectionString: 'fa fa-database',
    azureId: 'fa fa-key',
    apigeeUri: 'fa fa-exchange-alt',
    appSpecificationLink: 'fa fa-file-alt',
    appBackLogLink: 'fa fa-tasks',
    configurationItem: 'fa fa-cogs',
    repoUri: 'fa fa-code-branch',
    onCallLink: 'fa fa-headset'
} as const;

export const AppHostIcon = {
    azure: 'fa fa-cloud',
    google: 'fab fa-google',
    'on-premise': 'fa fa-server',
    hybrid: 'fa fa-network-wired'
} as const;

export type AppHost = keyof typeof AppHostIcon;

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

export interface ApplicationDashboardApp {
    id?: number;
    name?: string;
    appHost?: AppHost;
    configurationItem?: string;
    wikiLink?: string;
    orgLink?: string;
    onCallLink?: string;
    environments?: AppEnvironment[];
    repos?: AppRepo[];
    updatedOn?: string | Date;
    appSpecs?: string;
    appSpecsMdFilePath?: string;
    appCategory?: AppCategory;
}

export type SpecialtyApp = ApplicationDashboardApp;
