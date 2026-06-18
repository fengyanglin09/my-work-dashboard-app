import { Routes } from '@angular/router';
import { SpecialtyAppsComponent } from './specialty-apps/specialty-apps.component';
import { CadAppsComponent } from './cad-apps/cad-apps.component';
import { SupportResourcesComponent } from './support-resources/support-resources.component';
import { DevelopmentResourcesComponent } from './development-resources/development-resources.component';
import { AccessAndAccountResourcesComponent } from './access-and-account-resources/access-and-account-resources.component';
import { AppResourcesComponent } from './app-resources/app-resources.component';

export default [
    { path: 'specialty-app-dashboard', component: SpecialtyAppsComponent },
    { path: 'cad-app-dashboard', component: CadAppsComponent },
    { path: 'app-resource-dashboard', component: AppResourcesComponent },
    { path: 'development-resource-dashboard', component: DevelopmentResourcesComponent },
    { path: 'support-resource-dashboard', component: SupportResourcesComponent },
    { path: 'access-accounts-resource-dashboard', component: AccessAndAccountResourcesComponent }
] as Routes;
