import { Component, OnInit } from '@angular/core';
import { SupportingAppsService } from './supporting-apps.service';
import { AppHeader, SpecialtyApp } from '../../../core/model/application-dashboard.model';
import { ApplicationDashboardComponent } from '../../../shared/components/application-dashboard/application-dashboard.component';

@Component({
    selector: 'app-supporting-apps',
    imports: [ApplicationDashboardComponent],
    template: `<app-application-dashboard [apps]="apps" [appHeaderInfo]="appHeaderInfo" emptyMessage="No supporting apps have been added yet." />`,
    providers: [SupportingAppsService]
})
export class SupportingAppsComponent implements OnInit {
    apps: SpecialtyApp[] = [];
    appHeaderInfo: AppHeader[] = [];

    constructor(private dataService: SupportingAppsService) {}

    ngOnInit() {
        this.appHeaderInfo = this.dataService.getHeaderInfo();

        this.dataService.getDataXLarge().then((data) => {
            this.apps = data;
        });
    }
}
