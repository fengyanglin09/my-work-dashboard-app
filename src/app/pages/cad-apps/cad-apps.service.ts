import { Injectable } from '@angular/core';
import { AppHeader, ApplicationDashboardApp } from '../../core/model/application-dashboard.model';
import { CAD_APP_HEADERS, CAD_APPS } from './cad-apps.data';

@Injectable()
export class CadAppsService {
    getHeaderInfo(): AppHeader[] {
        return CAD_APP_HEADERS;
    }

    getData(): ApplicationDashboardApp[] {
        return CAD_APPS;
    }

    getDataXLarge() {
        return Promise.resolve(this.getData());
    }
}
