import { AppHeader } from '../../core/model/application-dashboard.model';
export * from '../../core/model/application-dashboard.model';

export const AppHeaderInfo: AppHeader[] = [
    {
        id: 1,
        name: 'Java Apps',
        image: 'assets/pages/specialty-apps/images/java-app.png',
        backlogUrl: [
            {
                icon: 'fa fa-tasks',
                label: 'NERDS',
                target: '_blank',
                command: () => window.open('https://dev.azure.com/mclm/GBS%20CAD/_backlogs/backlog/NERDS/Stories', '_blank')
            },
            {
                icon: 'fa fa-tasks',
                label: 'SMASH',
                target: '_blank',
                command: () => window.open('https://dev.azure.com/mclm/GBS%20CAD/_backlogs/backlog/SMASH/Stories', '_blank')
            },
            {
                icon: 'fa fa-tasks',
                label: 'Empiricals',
                target: '_blank',
                command: () => window.open('https://dev.azure.com/mclm/LT%20SAA/_backlogs/backlog/Empiricals/Stories', '_blank')
            }
        ]
    },

    {
        id: 2,
        name: 'DotNet Apps',
        image: 'assets/pages/specialty-apps/images/dotnet-app.png',
        backlogUrl: undefined
    },

    {
        id: 3,
        name: 'Dependency Apps',
        image: 'assets/pages/specialty-apps/images/dependency-app.png',
        backlogUrl: undefined
    }
];
