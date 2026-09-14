import { Component, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { CheatCategory, CheatItem, ResourceCategory } from '../../../core/model/cheatsheet.model';
import { MarkdownDialogComponent } from '../../ui/markdown-dialog/markdown-dialog.component';
import { renderMarkdownWithCopyButtons } from '../../utils/markdown-content';

@Component({
    selector: 'app-resource-dashboard',
    imports: [MatExpansionModule, MatButtonModule],
    templateUrl: './resource-dashboard.component.html',
    styleUrl: './resource-dashboard.component.scss'
})
export class ResourceDashboardComponent implements OnChanges {
    @Input() resources: ResourceCategory[] = [];
    @Input() dialogStyle: Record<string, string> = { width: 'auto', maxWidth: '70vw' };

    active: number | string = '';

    constructor(
        private http: HttpClient,
        private sanitizer: DomSanitizer,
        private dialog: MatDialog
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

    protected displayDialog(text: string) {
        this.openDialog(text);
    }

    protected displayMarkdownDialog(mdFilePath: string) {
        this.http.get(mdFilePath, { responseType: 'text' }).subscribe((md) => {
            renderMarkdownWithCopyButtons(md).then((html) => {
                // These markdown files are bundled app assets, not user-submitted HTML.
                // Trusting the rendered HTML preserves internal links such as smb:// Finder paths.
                this.openDialog(this.sanitizer.bypassSecurityTrustHtml(html));
            });
        });
    }

    private openDialog(content: SafeHtml | string) {
        this.dialog.open(MarkdownDialogComponent, {
            data: { header: 'Text Resource', content },
            width: this.dialogStyle['width'] ?? 'auto',
            maxWidth: this.dialogStyle['maxWidth'] ?? '70vw',
            autoFocus: false,
            panelClass: 'app-dialog-panel'
        });
    }
}
