import { Component, OnInit } from '@angular/core';
import { ResourceCategory } from '../../core/model/cheatsheet.model';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { Button } from 'primeng/button';
import { AccessAndAccountResourcesService } from './access-and-account-resources.service';

@Component({
    selector: 'app-access-and-account-resources',
    imports: [Accordion, AccordionContent, AccordionHeader, AccordionPanel, Button],
    templateUrl: './access-and-account-resources.component.html',
    styleUrl: './access-and-account-resources.component.scss'
})
export class AccessAndAccountResourcesComponent implements OnInit {
    active: number | string = 'Access & Support';

    supportResources!: ResourceCategory[];

    activeIndexChange(index: number | string) {
        this.active = index;
    }

    constructor(private dataService: AccessAndAccountResourcesService) {}

    ngOnInit(): void {
        this.dataService.getDataXLarge().then((data) => {
            this.supportResources = data;
        });
    }

    getMaxItems(resource: any) {
        return Math.max(...resource.resources.map((r: any) => r.items.length));
    }

    getTotalItemCount(resource: any) {
        return resource.resources.reduce((total: number, r: any) => total + r.items.length, 0);
    }
}
