import { Routes } from '@angular/router';
import { appsRoutes } from './apps/apps.routes';
import { resourcesRoutes } from './resources/resources.routes';

export default [
    ...appsRoutes,
    ...resourcesRoutes
] as Routes;
