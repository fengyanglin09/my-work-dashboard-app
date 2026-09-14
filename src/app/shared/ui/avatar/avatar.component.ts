import { Component, Input } from '@angular/core';

export type AvatarSize = 'normal' | 'large' | 'xlarge';

/**
 * Circular avatar with image or initials fallback (replacement for PrimeNG p-avatar).
 * Usage: <app-avatar [image]="photo" [label]="fullName" size="xlarge" class="ring-2 ring-primary-500" />
 */
@Component({
    selector: 'app-avatar',
    standalone: true,
    template: `
        <span class="inline-flex select-none items-center justify-center overflow-hidden rounded-full bg-surface-200 font-semibold text-surface-700 dark:bg-surface-700 dark:text-surface-100" [class]="sizeClasses">
            @if (image) {
                <img [src]="image" [alt]="label || 'avatar'" class="h-full w-full object-cover" />
            } @else if (label) {
                {{ initials }}
            } @else {
                <i class="fa fa-user"></i>
            }
        </span>
    `
})
export class AvatarComponent {
    @Input() image?: string | null;
    @Input() label?: string | null;
    @Input() size: AvatarSize = 'normal';

    private static readonly SIZES: Record<AvatarSize, string> = {
        normal: 'h-8 w-8 text-sm',
        large: 'h-12 w-12 text-base',
        xlarge: 'h-16 w-16 text-xl'
    };

    get sizeClasses(): string {
        return AvatarComponent.SIZES[this.size] ?? AvatarComponent.SIZES['normal'];
    }

    get initials(): string {
        if (!this.label) return '';
        return this.label
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((p) => p[0]!.toUpperCase())
            .join('');
    }
}
