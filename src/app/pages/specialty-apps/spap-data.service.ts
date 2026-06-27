import { Injectable } from '@angular/core';
import { AppHeader, SpecialtyApp } from '../../core/model/application-dashboard.model';
import { AppHeaderInfo, SPECIALTY_APPS } from './spap-data.data';

@Injectable()
export class SpapDataService {
    getHeaderInfo(): AppHeader[] {
        return AppHeaderInfo;
    }

    getData(): SpecialtyApp[] {
        return SPECIALTY_APPS;
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
