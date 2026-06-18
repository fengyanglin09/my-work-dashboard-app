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
                label: 'Database',
                items: [
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
