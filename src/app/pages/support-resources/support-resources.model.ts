import { CheatCategory } from '../../core/model/cheatsheet.model';

export class MayoDResource {
    id?: number;
    label?: string;
    activeItemId?: string;
    name?: string;
    description?: string;
    rowCounts?: number;                //number of rows or number of items per column
    resources?: CheatCategory[];
}
