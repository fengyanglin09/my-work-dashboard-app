import { Component, OnInit, WritableSignal } from '@angular/core';
import { ResourceCategory } from '../../core/model/cheatsheet.model';
import { SupportResourcesService } from './support-resources.service';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';

@Component({
    selector: 'app-support-resources',
    imports: [Accordion, AccordionContent, AccordionHeader, AccordionPanel, Button, Dialog],
    templateUrl: './support-resources.component.html',
    styleUrl: './support-resources.component.scss'
})
export class SupportResourcesComponent implements OnInit {
    active: number | string = 'support documents';

    supportResources!: ResourceCategory[];

    protected showDialog: boolean | WritableSignal<boolean> = false;
    protected dialogContent: any; // example - `<p>This is a <b>bold</b> word and <span style="color:blue">blue text</span>.</p> `


    activeIndexChange(index: number | string) {
        this.active = index;
    }

    constructor(private dataService: SupportResourcesService) {}

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

    protected hideDialog() {
        this.showDialog = false;
    }

    protected displayDialog(text: string) {
        this.dialogContent = text;
        this.showDialog = true;
    }
}
