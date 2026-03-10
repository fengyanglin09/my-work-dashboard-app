export interface emailItem {
    emailAddress: string;          // email address
    subject?: string;            // email subject
    body?: string;              // email body
    action: () => void;         // callback for click
}

export interface CheatItem {
    label: string;
    type?: 'link' | 'doc' | 'email' | 'download'; // type of item
    icon?: 'fas fa-file-alt' | 'fas fa-link' | 'fas fa-envelope' | 'fas fa-download';
    url?: string;          // URL for link or document
    htmlText?: string;         // display text for link or document
    emailItem?: emailItem;  // email item details
    filePath?: string;      // file path for download
    mdFilePath?: string;   // markdown file path for dialog display
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
    resources?: CheatCategory[];
}
