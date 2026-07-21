import { Injectable } from '@angular/core';
import { AppHeader, ApplicationDashboardApp } from '../../../core/model/application-dashboard.model';
import { DEPENDENT_APP_HEADERS, DEPENDENT_APPS } from './dependent-apps.data';

@Injectable()
export class DependentAppsService {
    getHeaderInfo(): AppHeader[] {
        return DEPENDENT_APP_HEADERS;
    }

    getData(): ApplicationDashboardApp[] {
        return DEPENDENT_APPS;
    }

    getDataXLarge() {
        return Promise.resolve(this.getData());
    }
}
