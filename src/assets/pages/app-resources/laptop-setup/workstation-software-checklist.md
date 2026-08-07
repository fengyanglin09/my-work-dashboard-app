# Workstation Software Checklist

Use this as a quick checklist when setting up a development laptop or refreshing a working station.

## Terminal And Shell

### iTerm2

Better terminal experience on macOS.

- Install: [iTerm2 downloads](https://iterm2.com/downloads.html)
- Useful setup:
  - Set a readable font and color profile.
  - Enable unlimited or large scrollback.
  - Create profiles for common project folders if useful.

### Homebrew

Package manager for macOS command-line tools.

- Install: [Homebrew](https://brew.sh/)
- Verify:

```shell
brew --version
brew doctor
```

### Git

Source control CLI.

```shell
git --version
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Optional but useful:

```shell
git config --global init.defaultBranch main
git config --global pull.rebase false
```

## Editors And IDEs

### Visual Studio Code

Lightweight editor for frontend, docs, scripts, and quick edits.

- Install: [VS Code download](https://code.visualstudio.com/download)
- After install, enable the `code` terminal command from the Command Palette:

```text
Shell Command: Install 'code' command in PATH
```

Suggested extensions:

- Angular Language Service
- ESLint
- Prettier
- Markdown All in One
- GitLens

### IntelliJ IDEA

Primary IDE for Java, Spring Boot, Kotlin, and larger backend work.

- Install: [IntelliJ IDEA download](https://www.jetbrains.com/idea/download/)
- Alternative manager: [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/)

Suggested setup:

- Configure the project JDK.
- Enable annotation processing for Lombok projects.
- Install or enable the plugins that match the project stack.

Suggested IntelliJ plugins:

| Plugin | Use It For | Notes |
| --- | --- | --- |
| Jakarta EE: Persistence (JPA) | JPA entities, JPQL, Persistence tool window, ER diagrams | Bundled and enabled by default in IntelliJ IDEA. Check Installed plugins if JPA features are missing. |
| JPA Buddy | JPA, Hibernate, Spring Data JPA, Liquibase, Flyway, Lombok, MapStruct helpers | Useful add-on, especially when you want richer persistence tooling. |
| Database Tools and SQL | Database connections, SQL consoles, schemas, table browsing | Use with JPA Buddy for database connection management. |
| Spring | Spring Boot, Spring MVC, Spring Data, Spring configuration support | Enable for Spring Boot backend projects. |
| Lombok | Lombok annotations like `@Getter`, `@Builder`, `@RequiredArgsConstructor` | Also enable annotation processing in Settings. |
| MapStruct Support | Mapper navigation and completion | Useful for Java DTO/entity mapping projects. |
| Maven | Maven project import and lifecycle tasks | Usually bundled. |
| Gradle | Gradle project import and tasks | Usually bundled. |
| Docker | Dockerfiles, Compose files, images, containers | Also useful when using Podman with Docker-compatible workflows. |
| Kubernetes | Kubernetes YAML and cluster resources | Install only if the project uses Kubernetes manifests. |
| Angular and AngularJS | Angular templates, components, services, routing | Useful for Angular frontend projects. |
| JavaScript and TypeScript | TypeScript, npm, frontend tooling | Usually bundled in IntelliJ IDEA. |
| ESLint | JavaScript/TypeScript lint integration | Match the project lint config. |
| Prettier | Code formatting for frontend and markdown files | Match the project formatter config. |
| Mermaid | Preview `.mmd` / `.mermaid` diagrams | JetBrains Marketplace plugin by JetBrains. |
| Markdown | Markdown editing and preview | Usually bundled. |
| GitHub | Pull requests and GitHub integration | Usually bundled. |
| GitLab | Merge requests and GitLab integration | Install if your team uses GitLab. |
| .ignore | `.gitignore`, `.dockerignore`, and related ignore-file support | Handy small quality-of-life plugin. |
| SonarQube for IDE | Local static analysis and quality hints | Useful when the team uses SonarQube/SonarCloud. |

Install path:

```text
Settings > Plugins > Marketplace
```

For bundled plugins that are missing:

```text
Settings > Plugins > Installed
```

Think of IntelliJ plugins like adapters on a workbench: keep the ones for the tools you actually touch every week, and leave the rest unplugged so the IDE stays faster and quieter.

## Java And Runtime Tools

### SDKMAN

Install and switch Java versions cleanly.

- Install: [SDKMAN](https://sdkman.io/)
- Local guide: [Java Version Management With SDKMAN](assets/pages/app-resources/laptop-setup/java-sdkman.md)

Quick check:

```shell
sdk version
sdk list java
sdk current java
```

### Node.js

Needed for Angular and frontend tooling.

Recommended options:

- Use `nvm` if you switch Node versions often.
- Use the project `package-lock.json` and `npm ci` when you want reproducible installs.

Useful checks:

```shell
node --version
npm --version
```

## Containers And Local Services

### Podman

Container runtime for local databases and service dependencies.

- Install: [Podman installation](https://podman.io/docs/installation)
- Desktop option: [Podman Desktop macOS install](https://podman-desktop.io/docs/installation/macos-install)

For macOS, initialize and start the Podman machine:

```shell
podman machine init
podman machine start
podman info
```

### Docker Desktop

Useful when a project assumes Docker-specific tooling.

- Install: [Docker Desktop](https://www.docker.com/products/docker-desktop/)

Use either Docker Desktop or Podman as your default container workflow when possible. Running both is fine, but it can make ports, sockets, and mental context busier.

### Azurite

Azure Storage emulator used by some local app setups.

```shell
npm install -g azurite
azurite --version
```

## API And Integration Tools

### KeyRunner

Lightweight API client, especially useful for OAuth/client credential flows.

- Install: [KeyRunner download](https://docs.keyrunner.app/docs/Download.html)
- Related guide: [Client Credential API Tool Setup](assets/pages/development-resources/security/oauth-setup-keyrunner.md)

### Insomnia

API client for REST, GraphQL, auth testing, and environment-based requests.

- Install: [Insomnia download](https://insomnia.rest/download)

### Postman

API client and collection runner.

- Install: [Postman download](https://www.postman.com/downloads/)

## Database Tools

### DBeaver Community

General database client for SQL Server, PostgreSQL, SQLite, and others.

- Install: [DBeaver Community](https://dbeaver.io/download/)

### SQL Server Local Setup

Useful when a project needs local SQL Server on macOS.

- [MSSQL Local Installation - Podman macOS](assets/pages/development-resources/database/sql-server-mac-m4-podman.md)
- [MSSQL Local Setup Summary](assets/pages/development-resources/database/sql-server-mac-setup-summary.md)

## Browser And Web Debugging

Recommended browsers:

- Google Chrome
- Microsoft Edge
- Firefox

Useful browser extensions:

- JSON formatter
- Wappalyzer or similar technology inspector
- Auth/token inspection tools approved by your organization

## Security And Certificates

### Zscaler / Java Trust

If Java tools fail with TLS or certificate errors, check whether the corporate root certificate needs to be trusted by Java.

- [Java cacerts Import Reference](assets/pages/app-resources/nerds/Java_cacerts_Import_Reference.md)
- [Understanding Java Keystores and Truststores](assets/pages/app-resources/nerds/understanding_java_keystores_truststores.md)

### Password And Secret Hygiene

Recommended:

- Use an approved password manager.
- Do not store tokens in repo files.
- Prefer environment variables or approved secret stores for local credentials.
- Add `.env`, local config files, and generated certs to `.gitignore` when appropriate.

## AI Coding Tools

### Claude Code

Useful for repo navigation, code review, refactoring, and command-line workflows.

- [Claude Code Local Setup](assets/pages/development-resources/ai-resources/claude-code-llm-gateway.md)
- [Claude Code CLI Commands](assets/pages/development-resources/ai-resources/claude-code-cli-commands.md)

### VS Code / IntelliJ AI Assistants

If approved for your work:

- Configure organization-approved accounts only.
- Be careful with source code, secrets, PHI, credentials, logs, and internal URLs.

## Quick Verification Pass

Run these after setup:

```shell
git --version
node --version
npm --version
java -version
echo "$JAVA_HOME"
podman --version
podman info
code --version
```

For project-specific setup, also check:

```shell
npm ci
npm run build
```

## References

- [Podman installation](https://podman.io/docs/installation)
- [Podman Desktop macOS install](https://podman-desktop.io/docs/installation/macos-install)
- [KeyRunner download](https://docs.keyrunner.app/docs/Download.html)
- [iTerm2 downloads](https://iterm2.com/downloads.html)
- [VS Code download](https://code.visualstudio.com/download)
- [IntelliJ IDEA install guide](https://www.jetbrains.com/help/idea/installation-guide.html)
- [Insomnia download](https://insomnia.rest/download)
