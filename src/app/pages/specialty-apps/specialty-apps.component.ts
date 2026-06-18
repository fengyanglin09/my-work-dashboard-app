import { Component, OnInit } from '@angular/core';
import { SpapDataService } from './spap-data.service';
import { AppHeader, SpecialtyApp } from './spap-data.model';
import { ApplicationDashboardComponent } from '../../shared/components/application-dashboard/application-dashboard.component';

@Component({
    selector: 'app-specialty-apps',
    imports: [ApplicationDashboardComponent],
    template: `<app-application-dashboard [apps]="apps" [appHeaderInfo]="appHeaderInfo" />`,
    providers: [SpapDataService]
})
export class SpecialtyAppsComponent implements OnInit {
    apps: SpecialtyApp[] = [];
    appHeaderInfo: AppHeader[] = [];

    constructor(private dataService: SpapDataService) {}

    ngOnInit() {
        this.appHeaderInfo = this.dataService.getHeaderInfo();

        this.dataService.getDataXLarge().then((data) => {
            this.apps = data;
        });
    }
}
