import { Routes } from '@angular/router';
import { DependentAppsComponent } from './dependent-apps/dependent-apps.component';
import { SupportedAppsComponent } from './supported-apps/supported-apps.component';
import { SupportingAppsComponent } from './supporting-apps/supporting-apps.component';

export const appsRoutes: Routes = [
    { path: 'specialty-app-dashboard', component: SupportingAppsComponent },
    { path: 'cad-app-dashboard', component: SupportedAppsComponent },
    { path: 'dependent-app-dashboard', component: DependentAppsComponent }
];
