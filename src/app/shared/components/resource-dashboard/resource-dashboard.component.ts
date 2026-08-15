import { Component, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { CheatCategory, CheatItem, ResourceCategory } from '../../../core/model/cheatsheet.model';
import { copyMarkdownCodeBlock, renderMarkdownWithCopyButtons } from '../../utils/markdown-content';

@Component({
    selector: 'app-resource-dashboard',
    imports: [Accordion, AccordionContent, AccordionHeader, AccordionPanel, Button, Dialog],
    templateUrl: './resource-dashboard.component.html',
    styleUrl: './resource-dashboard.component.scss'
})
export class ResourceDashboardComponent implements OnChanges {
    @Input() resources: ResourceCategory[] = [];
    @Input() dialogStyle: Record<string, string> = { width: 'auto', maxWidth: '70vw' };

    active: number | string = '';

    protected showDialog = false;
    protected dialogContent: SafeHtml | string = '';

    constructor(
        private http: HttpClient,
        private sanitizer: DomSanitizer
    ) {}

    ngOnChanges(): void {
        const hasActiveResource = this.resources.some((resource) => resource.activeItemId === this.active);

        if (!hasActiveResource) {
            this.active = this.resources[0]?.activeItemId ?? '';
        }
    }

    protected getResourceGroups(resource: ResourceCategory): CheatCategory[] {
        return resource.resources ?? [];
    }

    protected getItemIcon(item: CheatItem): string {
        return item.icon ?? 'fas fa-link';
    }

    protected openDocument(item: CheatItem) {
        if (item.mdFilePath) {
            this.displayMarkdownDialog(item.mdFilePath);
            return;
        }

        this.displayDialog(item.htmlText || '');
    }

    protected runAction(item: CheatItem) {
        item.action?.();
    }

    protected hideDialog() {
        this.showDialog = false;
    }

    protected copyCodeBlock(event: Event) {
        // Handles clicks from copy buttons that were injected into the rendered markdown HTML.
        copyMarkdownCodeBlock(event);
    }

    protected displayDialog(text: string) {
        this.dialogContent = text;
        this.showDialog = true;
    }

    protected displayMarkdownDialog(mdFilePath: string) {
        this.http.get(mdFilePath, { responseType: 'text' }).subscribe((md) => {
            renderMarkdownWithCopyButtons(md).then((html) => {
                // These markdown files are bundled app assets, not user-submitted HTML.
                // Trusting the rendered HTML preserves internal links such as smb:// Finder paths.
                this.dialogContent = this.sanitizer.bypassSecurityTrustHtml(html);
                this.showDialog = true;
            });
        });
    }
}
