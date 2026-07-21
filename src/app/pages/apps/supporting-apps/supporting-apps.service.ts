import { Injectable } from '@angular/core';
import { AppHeader, SpecialtyApp } from '../../../core/model/application-dashboard.model';
import { SUPPORTING_APP_HEADERS, SUPPORTING_APPS } from './supporting-apps.data';

const dependentAppCategoryId = 3;

@Injectable()
export class SupportingAppsService {
    getHeaderInfo(): AppHeader[] {
        return SUPPORTING_APP_HEADERS.filter((header) => header.id !== dependentAppCategoryId);
    }

    getData(): SpecialtyApp[] {
        return SUPPORTING_APPS.filter((app) => app.appCategory?.id !== dependentAppCategoryId);
    }

    getDataMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getDataSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getDataMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getDataLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getDataXLarge() {
        return Promise.resolve(this.getData());
    }
}
