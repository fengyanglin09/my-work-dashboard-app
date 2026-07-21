import { Component, OnInit } from '@angular/core';
import { AppHeader, ApplicationDashboardApp } from '../../../core/model/application-dashboard.model';
import { ApplicationDashboardComponent } from '../../../shared/components/application-dashboard/application-dashboard.component';
import { DependentAppsService } from './dependent-apps.service';

@Component({
    selector: 'app-dependent-apps',
    imports: [ApplicationDashboardComponent],
    template: `<app-application-dashboard [apps]="apps" [appHeaderInfo]="appHeaderInfo" emptyMessage="No dependent apps have been added yet." />`,
    providers: [DependentAppsService]
})
export class DependentAppsComponent implements OnInit {
    apps: ApplicationDashboardApp[] = [];
    appHeaderInfo: AppHeader[] = [];

    constructor(private dataService: DependentAppsService) {}

    ngOnInit(): void {
        this.appHeaderInfo = this.dataService.getHeaderInfo();

        this.dataService.getDataXLarge().then((data) => {
            this.apps = data;
        });
    }
}
