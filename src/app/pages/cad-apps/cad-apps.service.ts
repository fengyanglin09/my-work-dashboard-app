import { Injectable } from '@angular/core';
import { AppHeader, ApplicationDashboardApp } from '../../core/model/application-dashboard.model';

@Injectable()
export class CadAppsService {
    getHeaderInfo() {
        return [] as AppHeader[];
    }

    getData() {
        return [] as ApplicationDashboardApp[];
    }

    getDataXLarge() {
        return Promise.resolve(this.getData());
    }
}
