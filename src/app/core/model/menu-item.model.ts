/**
 * Local menu-model type (replaces the former PrimeNG `MenuItem` API dependency).
 * Only the properties actually consumed by the layout/dashboard components are declared.
 */
export interface AppMenuItem {
    label?: string;
    icon?: string;
    routerLink?: any;
    url?: string;
    items?: AppMenuItem[];
    separator?: boolean;
    visible?: boolean;
    disabled?: boolean;
    command?: (e?: any) => void;
    class?: string;
    styleClass?: string;
    target?: string;
    badge?: string;
    badgeClass?: string;
    fragment?: string;
    queryParams?: { [key: string]: any } | null;
    queryParamsHandling?: any;
    preserveFragment?: boolean;
    skipLocationChange?: boolean;
    replaceUrl?: boolean;
    state?: { [key: string]: any };
    routerLinkActiveOptions?: any;
}
