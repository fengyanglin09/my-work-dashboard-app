import { Component, Input } from '@angular/core';

export type TagSeverity = 'primary' | 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

/**
 * Lightweight badge/tag (replacement for PrimeNG p-tag).
 * Usage: <app-tag [value]="x" severity="info" class="text-xs px-2 py-1" />
 */
@Component({
    selector: 'app-tag',
    standalone: true,
    template: `
        <span class="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-semibold leading-none" [class]="severityClasses">
            @if (icon) {
                <i [class]="icon"></i>
            }
            {{ value }}
        </span>
    `
})
export class TagComponent {
    @Input() value: string | number | null | undefined = '';
    @Input() severity: TagSeverity = 'primary';
    @Input() icon?: string;

    private static readonly CLASSES: Record<TagSeverity, string> = {
        primary: 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300',
        success: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
        info: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
        warn: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
        danger: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
        secondary: 'bg-surface-200 text-surface-700 dark:bg-surface-700 dark:text-surface-200',
        contrast: 'bg-surface-900 text-surface-0 dark:bg-surface-0 dark:text-surface-900'
    };

    get severityClasses(): string {
        return TagComponent.CLASSES[this.severity] ?? TagComponent.CLASSES['primary'];
    }
}
