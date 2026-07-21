import { Component, OnInit } from '@angular/core';
import { AppHeader, ApplicationDashboardApp } from '../../../core/model/application-dashboard.model';
import { ApplicationDashboardComponent } from '../../../shared/components/application-dashboard/application-dashboard.component';
import { SupportedAppsService } from './supported-apps.service';

@Component({
    selector: 'app-supported-apps',
    imports: [ApplicationDashboardComponent],
    template: `<app-application-dashboard [apps]="apps" [appHeaderInfo]="appHeaderInfo" emptyMessage="No supported apps have been added yet." />`,
    providers: [SupportedAppsService]
})
export class SupportedAppsComponent implements OnInit {
    apps: ApplicationDashboardApp[] = [];
    appHeaderInfo: AppHeader[] = [];

    constructor(private dataService: SupportedAppsService) {}

    ngOnInit(): void {
        this.appHeaderInfo = this.dataService.getHeaderInfo();

        this.dataService.getDataXLarge().then((data) => {
            this.apps = data;
        });
    }
}
