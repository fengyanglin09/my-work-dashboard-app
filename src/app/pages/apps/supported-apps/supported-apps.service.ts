import { Injectable } from '@angular/core';
import { AppHeader, ApplicationDashboardApp } from '../../../core/model/application-dashboard.model';
import { SUPPORTED_APP_HEADERS, SUPPORTED_APPS } from './supported-apps.data';

@Injectable()
export class SupportedAppsService {
    getHeaderInfo(): AppHeader[] {
        return SUPPORTED_APP_HEADERS;
    }

    getData(): ApplicationDashboardApp[] {
        return SUPPORTED_APPS;
    }

    getDataXLarge() {
        return Promise.resolve(this.getData());
    }
}
