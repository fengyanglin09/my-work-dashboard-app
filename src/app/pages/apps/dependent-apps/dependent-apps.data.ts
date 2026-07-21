import { AppHeader, ApplicationDashboardApp } from '../../../core/model/application-dashboard.model';
import { SUPPORTING_APP_HEADERS, SUPPORTING_APPS } from '../supporting-apps/supporting-apps.data';

const dependentAppCategoryId = 3;

export const DEPENDENT_APP_HEADERS: AppHeader[] = SUPPORTING_APP_HEADERS.filter((header) => header.id === dependentAppCategoryId);

export const DEPENDENT_APPS: ApplicationDashboardApp[] = SUPPORTING_APPS.filter((app) => app.appCategory?.id === dependentAppCategoryId);
