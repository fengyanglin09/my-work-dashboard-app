import { DatePipe, NgForOf, NgIf, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { InputText } from 'primeng/inputtext';
import { Popover } from 'primeng/popover';
import { Ripple } from 'primeng/ripple';
import { SpeedDial } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';
import { Tooltip } from 'primeng/tooltip';
import { marked } from 'marked';
import { AppHeader, AppHostIcon, AppItemIcon, ApplicationDashboardApp } from '../../../core/model/application-dashboard.model';

@Component({
    selector: 'app-application-dashboard',
    imports: [TableModule, ButtonDirective, Tag, Ripple, NgStyle, DatePipe, NgForOf, Tooltip, Popover, InputGroup, InputGroupAddon, NgIf, InputText, SpeedDial, Dialog],
    templateUrl: './application-dashboard.component.html',
    styleUrl: './application-dashboard.component.scss'
})
export class ApplicationDashboardComponent implements OnChanges {
    @Input() apps: ApplicationDashboardApp[] = [];
    @Input() appHeaderInfo: AppHeader[] = [];
    @Input() emptyMessage = 'No apps available.';

    popoverText: { title?: string; content?: string } | undefined = undefined;
    expandedRowGroupKeys: { [s: number]: boolean } = {};

    protected readonly AppItemIcon = AppItemIcon;
    protected showDialog = false;
    protected dialogContent = '';

    constructor(private http: HttpClient) {}

    ngOnChanges(): void {
        this.expandedRowGroupKeys = {};

        this.apps.forEach((app) => {
            const categoryId = app.appCategory?.id;

            if (categoryId) {
                this.expandedRowGroupKeys[categoryId] = true;
            }
        });
    }

    protected calculateAppTotal(name: string | undefined) {
        return this.apps.filter((app) => app.appCategory?.name === name).length;
    }

    protected displayPopover(title: string, content: string | undefined, op: Popover, $event: MouseEvent) {
        this.popoverText = { title, content };
        op.show($event);

        if (op.container) {
            op.align();
        }
    }

    protected copyToClipboard(text: string | undefined) {
        if (text) {
            navigator.clipboard.writeText(text);
        }
    }

    protected getAppHeader(app: ApplicationDashboardApp): AppHeader | undefined {
        return this.appHeaderInfo.find((header) => header.id === app.appCategory?.id);
    }

    protected getAppHeaderName(app: ApplicationDashboardApp): string {
        return this.getAppHeader(app)?.name ?? app.appCategory?.name ?? '';
    }

    protected getAppHeaderImage(app: ApplicationDashboardApp): string | undefined {
        return this.getAppHeader(app)?.image;
    }

    protected getAppHeaderBacklogItems(app: ApplicationDashboardApp) {
        return this.getAppHeader(app)?.backlogUrl ?? null;
    }

    protected hideDialog() {
        this.showDialog = false;
    }

    protected hasAppSpecs(app: ApplicationDashboardApp): boolean {
        return !!app.appSpecsMdFilePath || !!app.appSpecs;
    }

    protected displayAppSpecs(app: ApplicationDashboardApp) {
        if (app.appSpecsMdFilePath) {
            this.displayMarkdownDialog(app.appSpecsMdFilePath);
            return;
        }

        if (app.appSpecs) {
            this.displayDialog(app.appSpecs);
        }
    }

    private displayDialog(appSpecs: string) {
        this.dialogContent = appSpecs;
        this.showDialog = true;
    }

    private displayMarkdownDialog(mdFilePath: string) {
        this.http.get(mdFilePath, { responseType: 'text' }).subscribe((md) => {
            Promise.resolve(marked.parse(md)).then((html) => {
                this.dialogContent = html;
                this.showDialog = true;
            });
        });
    }

    protected getAppHostIcon(appHost: ApplicationDashboardApp['appHost']): string {
        return AppHostIcon[appHost ?? 'azure'] || 'default-icon-class';
    }
}
