import { CheatItem } from './cheatsheet.model';

const noAction = () => {};

export const link = (label: string, url: string): CheatItem => ({
    label,
    type: 'link',
    icon: 'fas fa-link',
    url,
    action: noAction
});

export const doc = (label: string, mdFilePath: string): CheatItem => ({
    label,
    type: 'doc',
    icon: 'fas fa-file-alt',
    mdFilePath,
    action: noAction
});

export const download = (label: string, filePath: string): CheatItem => ({
    label,
    type: 'download',
    icon: 'fas fa-download',
    filePath,
    action: noAction
});
