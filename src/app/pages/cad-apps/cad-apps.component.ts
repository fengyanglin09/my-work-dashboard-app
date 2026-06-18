import { Component, OnInit } from '@angular/core';
import { AppHeader, ApplicationDashboardApp } from '../../core/model/application-dashboard.model';
import { ApplicationDashboardComponent } from '../../shared/components/application-dashboard/application-dashboard.component';
import { CadAppsService } from './cad-apps.service';

@Component({
    selector: 'app-cad-apps',
    imports: [ApplicationDashboardComponent],
    template: `<app-application-dashboard [apps]="apps" [appHeaderInfo]="appHeaderInfo" emptyMessage="No CAD apps have been added yet." />`,
    providers: [CadAppsService]
})
export class CadAppsComponent implements OnInit {
    apps: ApplicationDashboardApp[] = [];
    appHeaderInfo: AppHeader[] = [];

    constructor(private dataService: CadAppsService) {}

    ngOnInit(): void {
        this.appHeaderInfo = this.dataService.getHeaderInfo();

        this.dataService.getDataXLarge().then((data) => {
            this.apps = data;
        });
    }
}
