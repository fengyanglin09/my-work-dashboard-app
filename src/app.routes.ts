import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { authGuard } from './app/core/auth/auth.guard';


export const appRoutes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./app/core/auth/pages/login').then((component) => component.Login)
    },
    {
        path: '',
        component: AppLayout,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'pages/specialty-app-dashboard', pathMatch: 'full' },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ],
    },


];
