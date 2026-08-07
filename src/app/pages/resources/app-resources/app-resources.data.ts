import { ResourceCategory } from '../../../core/model/cheatsheet.model';
import { doc, download, link } from '../../../core/model/resource-item.factory';

export const APP_RESOURCES: ResourceCategory[] = [
    {
        id: 0,
        label: 'Laptop Setup',
        activeItemId: 'laptop-setup',
        name: 'laptop-setup',
        description: 'Laptop Setup app-specific resources',
        resources: [
            {
                label: 'LocalSetup',
                items: [
                    link('SDKMAN', 'https://sdkman.io/'),
                    link('Docker', 'https://docker.com'),
                    link('Podman', 'https://podman.io/'),
                    doc('Workstation Software Checklist', 'assets/pages/app-resources/laptop-setup/workstation-software-checklist.md'),
                    doc('Install And Manage Java With SDKMAN', 'assets/pages/app-resources/laptop-setup/java-sdkman.md'),
                    doc('Java Versions With Homebrew And jEnv', 'assets/pages/development-resources/java/manage-java-versions.md'),
                    doc('JDK 21 Upgrade Plan', 'assets/pages/development-resources/java/jdk-upgrade-plan.md'),
                    doc('MSSQL Local Installation - Podman macOS', 'assets/pages/development-resources/database/sql-server-mac-m4-podman.md'),
                    doc('MSSQL Local Setup Summary', 'assets/pages/development-resources/database/sql-server-mac-setup-summary.md'),
                    doc('Claude Code Local Setup', 'assets/pages/development-resources/ai-resources/claude-code-llm-gateway.md'),
                    doc('Claude Code CLI Commands', 'assets/pages/development-resources/ai-resources/claude-code-cli-commands.md'),
                    doc('Client Credential API Tool Setup', 'assets/pages/development-resources/security/oauth-setup-keyrunner.md'),
                    doc('NERDS Local Setup', 'assets/pages/app-resources/nerds/nerds-steup.md'),
                    doc('Java cacerts Import Reference', 'assets/pages/app-resources/nerds/Java_cacerts_Import_Reference.md'),
                    doc('Understanding Java Keystores and Truststores', 'assets/pages/app-resources/nerds/understanding_java_keystores_truststores.md'),
                    download('Zscaler Certificate DER', 'assets/pages/app-resources/nerds/zscalercert.der'),
                    download('Zscaler Certificate PEM', 'assets/pages/app-resources/nerds/zscalercert.pem'),
                    link('Mayo Zscaler Knowledge Page', 'https://mcsm.service-now.com/now/nav/ui/classic/params/target/kb_view.do%3Fsysparm_article%3DKB0231309')
                ]
            }
        ]
    },
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
                    doc('NERDS Local Run Guide', 'assets/pages/app-resources/nerds/nerds-local-run.md'),
                    doc('NERDS Local Setup', 'assets/pages/app-resources/nerds/nerds-steup.md'),
                    doc('SQL Server BACPAC Import - Podman macOS', 'assets/pages/app-resources/nerds/sqlserver_bacpac_import_podman_macos.md'),
                    doc('Java cacerts Import Reference', 'assets/pages/app-resources/nerds/Java_cacerts_Import_Reference.md'),
                    doc('Understanding Java Keystores and Truststores', 'assets/pages/app-resources/nerds/understanding_java_keystores_truststores.md'),
                    download('Zscaler Certificate DER', 'assets/pages/app-resources/nerds/zscalercert.der'),
                    download('Zscaler Certificate PEM', 'assets/pages/app-resources/nerds/zscalercert.pem'),
                    link('Mayo Zscaler Knowledge Page', 'https://mcsm.service-now.com/now/nav/ui/classic/params/target/kb_view.do%3Fsysparm_article%3DKB0231309')
                ]
            }
        ]
    }
];
