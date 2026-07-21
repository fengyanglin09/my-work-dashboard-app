import { Injectable } from '@angular/core';
import { ResourceCategory } from '../../../core/model/cheatsheet.model';
import { APP_RESOURCES } from './app-resources.data';

@Injectable({
    providedIn: 'root'
})
export class AppResourcesService {
    getData(): ResourceCategory[] {
        return APP_RESOURCES;
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
