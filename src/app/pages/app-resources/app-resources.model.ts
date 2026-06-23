import { ResourceCategory } from '../../core/model/cheatsheet.model';

export const APP_RESOURCES: ResourceCategory[] = [
    {
        id: 1,
        label: 'Nerds',
        activeItemId: 'nerds',
        name: 'nerds',
        description: 'Nerds app-specific resources',
        resources: [
            {
                label: 'LocalSetup',
                items: [
                    {
                        label: 'NERDS Local Setup',
                        type: 'doc',
                        icon: 'fas fa-file-alt',
                        mdFilePath: 'assets/pages/app-resources/nerds/nerds-steup.md',
                        action: () => {}
                    },
                    {
                        label: 'SQL Server BACPAC Import - Podman macOS',
                        type: 'doc',
                        icon: 'fas fa-file-alt',
                        mdFilePath: 'assets/pages/app-resources/sqlserver_bacpac_import_podman_macos.md',
                        action: () => {}
                    }
                ]
            }
        ]
    }
];
