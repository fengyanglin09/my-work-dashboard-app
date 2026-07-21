import { Component, OnInit } from '@angular/core';
import { ResourceCategory } from '../../../core/model/cheatsheet.model';
import { AppResourcesService } from './app-resources.service';
import { ResourceDashboardComponent } from '../../../shared/components/resource-dashboard/resource-dashboard.component';

@Component({
    selector: 'app-app-resources',
    imports: [ResourceDashboardComponent],
    template: `<app-resource-dashboard [resources]="resources" />`
})
export class AppResourcesComponent implements OnInit {
    resources: ResourceCategory[] = [];

    constructor(private dataService: AppResourcesService) {}

    ngOnInit(): void {
        this.dataService.getDataXLarge().then((data) => {
            this.resources = data;
        });
    }
}
