import { Injectable } from '@angular/core';
import { ResourceCategory } from '../../../core/model/cheatsheet.model';
import { DEVELOPMENT_RESOURCES } from './dev-res-data.data';

@Injectable({
    providedIn: 'root'
})
export class DevResDataService {
    getData(): ResourceCategory[] {
        return DEVELOPMENT_RESOURCES;
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
