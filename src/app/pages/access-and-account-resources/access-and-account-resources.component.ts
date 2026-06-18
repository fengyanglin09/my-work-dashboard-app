import { Component, OnInit } from '@angular/core';
import { ResourceCategory } from '../../core/model/cheatsheet.model';
import { AccessAndAccountResourcesService } from './access-and-account-resources.service';
import { ResourceDashboardComponent } from '../../shared/components/resource-dashboard/resource-dashboard.component';

@Component({
    selector: 'app-access-and-account-resources',
    imports: [ResourceDashboardComponent],
    template: `<app-resource-dashboard [resources]="resources" [dialogStyle]="{ width: '50vw' }" />`
})
export class AccessAndAccountResourcesComponent implements OnInit {
    resources: ResourceCategory[] = [];

    constructor(private dataService: AccessAndAccountResourcesService) {}

    ngOnInit(): void {
        this.dataService.getDataXLarge().then((data) => {
            this.resources = data;
        });
    }
}
