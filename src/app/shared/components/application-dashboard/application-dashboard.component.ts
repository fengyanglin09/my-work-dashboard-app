import { DatePipe, NgForOf, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnDestroy, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppHeader, AppHostIcon, AppItemIcon, ApplicationDashboardApp } from '../../../core/model/application-dashboard.model';
import { AppMenuItem } from '../../../core/model/menu-item.model';
import { MarkdownDialogComponent } from '../../ui/markdown-dialog/markdown-dialog.component';
import { TagComponent } from '../../ui/tag/tag.component';
import { renderMarkdownWithCopyButtons } from '../../utils/markdown-content';

interface AppCategoryGroup {
    id: number;
    name: string;
    image?: string;
    backlog: AppMenuItem[] | null;
    apps: ApplicationDashboardApp[];
}

@Component({
    selector: 'app-application-dashboard',
    imports: [NgStyle, DatePipe, NgForOf, TagComponent, MatButtonModule, MatMenuModule, MatTooltipModule, OverlayModule],
    templateUrl: './application-dashboard.component.html',
    styleUrl: './application-dashboard.component.scss'
})
export class ApplicationDashboardComponent implements OnChanges, OnDestroy {
    @Input() apps: ApplicationDashboardApp[] = [];
    @Input() appHeaderInfo: AppHeader[] = [];
    @Input() emptyMessage = 'No apps available.';

    protected readonly AppItemIcon = AppItemIcon;
    protected groups: AppCategoryGroup[] = [];
    protected expandedRowGroupKeys: { [s: number]: boolean } = {};
    protected activeBacklogGroupId: number | null = null;

    @ViewChild('backlogTpl') private backlogTpl!: TemplateRef<{ $implicit: AppCategoryGroup }>;
    private backlogOverlayRef?: OverlayRef;

    constructor(
        private http: HttpClient,
        private sanitizer: DomSanitizer,
        private dialog: MatDialog,
        private overlay: Overlay,
        private viewContainerRef: ViewContainerRef
    ) {}

    ngOnChanges(): void {
        this.groups = this.buildGroups();

        this.expandedRowGroupKeys = {};
        this.groups.forEach((group) => {
            this.expandedRowGroupKeys[group.id] = true;
        });
    }

    private buildGroups(): AppCategoryGroup[] {
        const groupsById = new Map<number, AppCategoryGroup>();
        const order: number[] = [];

        for (const app of this.apps) {
            const id = app.appCategory?.id ?? -1;

            if (!groupsById.has(id)) {
                const header = this.appHeaderInfo.find((h) => h.id === id);
                groupsById.set(id, {
                    id,
                    name: header?.name ?? app.appCategory?.name ?? '',
                    image: header?.image,
                    backlog: header?.backlogUrl ?? null,
                    apps: []
                });
                order.push(id);
            }

            groupsById.get(id)!.apps.push(app);
        }

        return order.map((id) => groupsById.get(id)!);
    }

    protected toggleGroup(id: number): void {
        this.expandedRowGroupKeys[id] = !this.expandedRowGroupKeys[id];
    }

    protected isExpanded(id: number): boolean {
        return !!this.expandedRowGroupKeys[id];
    }

    protected calculateAppTotal(group: AppCategoryGroup): number {
        return group.apps.length;
    }

    protected copyToClipboard(text: string | undefined) {
        if (text) {
            navigator.clipboard.writeText(text);
        }
    }

    protected toggleBacklogStrip(group: AppCategoryGroup, event: MouseEvent): void {
        event.stopPropagation();

        if (!group.backlog?.length) {
            return;
        }

        if (this.activeBacklogGroupId === group.id) {
            this.closeBacklogOverlay();
            return;
        }

        this.closeBacklogOverlay();

        const origin = event.currentTarget as HTMLElement;
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(origin)
            .withFlexibleDimensions(false)
            .withPush(true)
            .withPositions([
                { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center', offsetX: 10 },
                { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: 8 },
                { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center', offsetX: -10 }
            ]);

        this.backlogOverlayRef = this.overlay.create({
            positionStrategy,
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });

        this.activeBacklogGroupId = group.id;
        this.backlogOverlayRef.backdropClick().subscribe(() => this.closeBacklogOverlay());
        this.backlogOverlayRef.attach(new TemplatePortal(this.backlogTpl, this.viewContainerRef, { $implicit: group }));
    }

    protected isBacklogOpen(groupId: number): boolean {
        return this.activeBacklogGroupId === groupId;
    }

    protected runBacklog(item: AppMenuItem, event: MouseEvent): void {
        event.stopPropagation();
        item.command?.(event);
        this.closeBacklogOverlay();
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
        this.openDialog(appSpecs);
    }

    private displayMarkdownDialog(mdFilePath: string) {
        this.http.get(mdFilePath, { responseType: 'text' }).subscribe((md) => {
            renderMarkdownWithCopyButtons(md).then((html) => {
                // These markdown files are bundled app assets, not user-submitted HTML.
                // Trusting the rendered HTML keeps app-spec links and command copy buttons intact.
                this.openDialog(this.sanitizer.bypassSecurityTrustHtml(html));
            });
        });
    }

    private openDialog(content: SafeHtml | string) {
        this.dialog.open(MarkdownDialogComponent, {
            data: { header: 'App Specifics', content },
            width: '50vw',
            maxWidth: '90vw',
            maxHeight: '85vh',
            autoFocus: false,
            panelClass: 'app-dialog-panel'
        });
    }

    protected getAppHostIcon(appHost: ApplicationDashboardApp['appHost']): string {
        return AppHostIcon[appHost ?? 'azure'] || 'default-icon-class';
    }

    ngOnDestroy(): void {
        this.closeBacklogOverlay();
    }

    private closeBacklogOverlay(): void {
        this.backlogOverlayRef?.dispose();
        this.backlogOverlayRef = undefined;
        this.activeBacklogGroupId = null;
    }
}
