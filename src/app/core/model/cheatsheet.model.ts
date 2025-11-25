export interface CheatItem {
    label: string;
    icon?: string;              // optional PrimeIcons
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
