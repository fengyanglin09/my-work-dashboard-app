import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SafeHtml } from '@angular/platform-browser';
import { copyMarkdownCodeBlock } from '../../utils/markdown-content';

export interface MarkdownDialogData {
    header: string;
    content: SafeHtml | string;
}

/**
 * Generic content dialog (replacement for the inline PrimeNG p-dialog usages).
 * Opened via MatDialog with a header and pre-rendered markdown/HTML body.
 */
@Component({
    selector: 'app-markdown-dialog',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule],
    template: `
        <div class="flex max-h-[85vh] min-h-0 flex-col overflow-hidden bg-surface-0 text-surface-900 dark:bg-surface-900 dark:text-surface-0">
            <div class="flex shrink-0 items-center justify-between gap-4 border-b border-surface-200 px-6 py-4 dark:border-surface-700">
                <h2 class="m-0 text-xl font-semibold">{{ data.header }}</h2>
                <button type="button" mat-icon-button class="app-soft-icon-button" aria-label="Close" (click)="close()">
                    <i class="fa fa-xmark"></i>
                </button>
            </div>
            <div class="min-h-0 flex-1 overflow-y-auto px-6 py-5">
                <div class="markdown-body" [innerHTML]="data.content" (click)="onContentClick($event)"></div>
            </div>
        </div>
    `
})
export class MarkdownDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<MarkdownDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: MarkdownDialogData
    ) {}

    close(): void {
        this.dialogRef.close();
    }

    onContentClick(event: Event): void {
        // Handles clicks from copy buttons injected into the rendered markdown HTML.
        copyMarkdownCodeBlock(event);
    }
}
