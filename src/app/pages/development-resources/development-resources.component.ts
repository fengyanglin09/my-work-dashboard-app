import { Component, OnInit, WritableSignal } from '@angular/core';
import { Button } from 'primeng/button';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { DevResDataService } from './dev-res-data.service';
import { ResourceCategory } from '../../core/model/cheatsheet.model';
import { Dialog } from 'primeng/dialog';


@Component({
    selector: 'app-development-resources',
    imports: [Button, Accordion, AccordionPanel, AccordionHeader, AccordionContent, Dialog],
    templateUrl: './development-resources.component.html',
    styleUrl: './development-resources.component.scss'
})
export class DevelopmentResourcesComponent implements OnInit {
    active: number | string = 'cloud app';

    developmentResources!: ResourceCategory[];

    protected showDialog: boolean | WritableSignal<boolean> = false;
    protected dialogContent: any; // example - `<p>This is a <b>bold</b> word and <span style="color:blue">blue text</span>.</p> `

    activeIndexChange(index: number | string) {
        this.active = index;
    }

    constructor(private dataService: DevResDataService) {}

    ngOnInit(): void {
        this.dataService.getDataXLarge().then((data) => {
            this.developmentResources = data;
        });
    }

    getMaxItems(resource: any) {
        return Math.max(...resource.resources.map((r: any) => r.items.length));
    }

    getTotalItemCount(resource: any) {
        return resource.resources.reduce((total: number, r: any) => total + r.items.length, 0);
    }

    protected hideDialog() {
        this.showDialog = false;
    }

    protected displayDialog(text: string) {
        this.dialogContent = text;
        this.showDialog = true;
    }
}
