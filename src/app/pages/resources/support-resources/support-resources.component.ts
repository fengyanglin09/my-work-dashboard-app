import { Component, OnInit } from '@angular/core';
import { ResourceCategory } from '../../../core/model/cheatsheet.model';
import { SupportResourcesService } from './support-resources.service';
import { ResourceDashboardComponent } from '../../../shared/components/resource-dashboard/resource-dashboard.component';

@Component({
    selector: 'app-support-resources',
    imports: [ResourceDashboardComponent],
    template: `<app-resource-dashboard [resources]="resources" [dialogStyle]="{ width: '50vw' }" />`
})
export class SupportResourcesComponent implements OnInit {
    resources: ResourceCategory[] = [];

    constructor(private dataService: SupportResourcesService) {}

    ngOnInit(): void {
        this.dataService.getDataXLarge().then((data) => {
            this.resources = data;
        });
    }
}
