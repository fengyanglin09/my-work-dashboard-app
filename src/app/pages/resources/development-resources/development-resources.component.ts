import { Component, OnInit } from '@angular/core';
import { DevResDataService } from './dev-res-data.service';
import { ResourceCategory } from '../../../core/model/cheatsheet.model';
import { ResourceDashboardComponent } from '../../../shared/components/resource-dashboard/resource-dashboard.component';

@Component({
    selector: 'app-development-resources',
    imports: [ResourceDashboardComponent],
    template: `<app-resource-dashboard [resources]="resources" />`
})
export class DevelopmentResourcesComponent implements OnInit {
    resources: ResourceCategory[] = [];

    constructor(private dataService: DevResDataService) {}

    ngOnInit(): void {
        this.dataService.getDataXLarge().then((data) => {
            this.resources = data;
        });
    }
}
