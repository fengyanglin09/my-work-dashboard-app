export interface emailItem {
    emailAddress: string;          // email address
    subject?: string;            // email subject
    body?: string;              // email body
    action: () => void;         // callback for click
}

export interface CheatItem {
    label: string;
    type?: 'link' | 'doc' | 'email'; // type of item
    icon?: 'fas fa-file-alt' | 'fas fa-link' | 'fas fa-envelope';
    url?: string;          // URL for link or document
    emailItem?: emailItem;  // email item details
    action: () => void;         // callback for click
}

export interface CheatCategory {
    label: string;              // category name
    items: CheatItem[];         // list of clickable items

}


export class ResourceCategory {
    id?: number;
    label?: string;
    activeItemId?: string;
    name?: string;
    description?: string;
    rowCounts?: number;                //number of rows or number of items per column
    resources?: CheatCategory[];
}
