import { Routes } from '@angular/router';
import { AccessAndAccountResourcesComponent } from './access-and-account-resources/access-and-account-resources.component';
import { AppResourcesComponent } from './app-resources/app-resources.component';
import { DevelopmentResourcesComponent } from './development-resources/development-resources.component';
import { SupportResourcesComponent } from './support-resources/support-resources.component';

export const resourcesRoutes: Routes = [
    { path: 'app-resource-dashboard', component: AppResourcesComponent },
    { path: 'development-resource-dashboard', component: DevelopmentResourcesComponent },
    { path: 'support-resource-dashboard', component: SupportResourcesComponent },
    { path: 'access-accounts-resource-dashboard', component: AccessAndAccountResourcesComponent }
];
