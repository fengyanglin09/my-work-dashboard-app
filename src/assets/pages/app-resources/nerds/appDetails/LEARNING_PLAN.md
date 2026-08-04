# NERDS_API — Learning Plan

A step-by-step guide to understanding this app, its setup, and how to run it. Work through the steps in order — each builds on the previous. Time estimates assume you're comfortable with Java/Spring but new to *this* codebase.

> **What NERDS is:** **N**euroimmunology **E**lectronic **R**ecords and **D**ocuments **S**ystem — Mayo Clinic's Neuro-Immunology lab system for processing clinical samples through their lifecycle: **ordering → testing → result review → reporting**. This repo (`NERDS_API`) is the Spring Boot backend; the Angular `NERDS_UI` is the frontend that consumes it. The two are versioned in lockstep.

---

## Step 0 — Orientation (½ day)

**Goal:** Know what the app does and where the authoritative docs live before touching code.

1. Read [`CLAUDE.md`](../CLAUDE.md) — the single best high-level summary (architecture, profiles, commands).
2. Read [`.claude/rules/ado-workflow.md`](../.claude/rules/ado-workflow.md) — the git/PR + Azure DevOps workflow (branch off `develop`, two ADO projects, etc.).
3. Skim [`README.md`](../README.md) for local-setup steps — **but distrust its version numbers**: it still says JDK 8/11, Node 16, Oracle JDK. The truth is in `pom.xml`.
4. Open `pom.xml` and confirm the real stack.

**Visual companions for this step** (in [`00step/`](00step/) — see its [README](00step/README.md) for the full index, diagrams in Mermaid):
- [`00step/clinical-workflow/clinical-workflow.md`](00step/clinical-workflow/clinical-workflow.md) — the end-to-end clinical workflow (flowchart + status state machine), cross-checked against both API and UI.
- [`00step/system-architecture/system-architecture.md`](00step/system-architecture/system-architecture.md) — system context + layered architecture (how the software fits together).
- [`00step/testing-stage/testing-stage.md`](00step/testing-stage/testing-stage.md) — a deep dive on the Testing stage (`OnAssay` / `OnAutomation`): the step engine, a single step's lifecycle, and four real per-family assay lanes (IPA LDT, Automated CBA, IFA, RT-QuIC).

**Checkpoint — you can answer:**
- What clinical workflow does NERDS support end-to-end? *(walk the `clinical-workflow.md` flowchart)*
- How does a tasklist actually run a test, and why are `OnAssay` and `OnAutomation` the same step list with different drivers? *(see `testing-stage.md`)*
- Which repo is the frontend, and why do UI and API versions need to stay aligned?
- Where do code/PRs live vs. work items in Azure DevOps?

---

## Step 1 — The Stack & Build System (½ day)

**Goal:** Understand what's built, with what, and how.

| Concern | What this project uses |
|---|---|
| Language / framework | **Java 21**, **Spring Boot 3.5.14** |
| Packaging | **WAR** (`<packaging>war</packaging>`) → `target/nerds-api.war` (Tomcat is *provided*, not embedded) |
| Main class | `edu.mayo.lpea.small_custom_apps.nerds.NerdsApiApplication` |
| Database | **SQL Server** (H2 for tests) |
| Data access | Spring Data JPA + **QueryDSL** (generates `Q*` classes at compile) |
| Migrations | **Flyway** (~606 scripts in `src/main/resources/db/migration`) |
| Auth | OAuth2 resource server, Azure AD (Entra) JWTs, secrets in **Azure Key Vault** |
| Cloud | Azure **Blob** + **Queue** storage (Azurite emulator locally) |
| Boilerplate | **Lombok** + **ModelMapper** (entity ↔ DTO) |
| Unit tests | **Spock/Groovy** (~340 specs) — the dominant style |
| Integration tests | JUnit + TestNG + H2 |

**Try it — build the project (no DB needed to compile):**
```bash
./mvnw compile          # compiles + generates QueryDSL Q* classes
./mvnw clean package    # full build → target/nerds-api.war (runs tests)
./mvnw fmt:format       # google-java-format (also run by the pre-commit hook)
```

**Checkpoint:** `./mvnw compile` succeeds and you can find generated `Q*` classes under `target/generated-sources/`.

---

## Step 2 — The Layered Architecture (1 day)

**Goal:** Internalize the request flow and package layout.

Every feature is a vertical slice through the same layers:

```
controllers/   REST endpoints  (@RestController, /api/...)   e.g. SpecimenController
     ↓
services/      business logic                                e.g. SpecimenService
     ↓
repositories/  Spring Data JPA + QueryDSL                    e.g. SpecimenRepository
     ↓
model/         JPA entities                                  e.g. Specimen, Order
```

- `dtos/` — request/response shapes at the HTTP edge.
- `config/ModelMapperConfig` (+ many per-feature mapper configs) — maps DTO ↔ entity.
- Feature areas are sub-packaged consistently across **every** layer: `Qa/`, `admin/`, `automation/`, `documents/`, `tasklist_steps/`.

**Scale (so you know what you're dealing with):** ~873 main Java files — 67 controllers, 175 services, 109 repositories, 139 entities, 195 DTOs.

**Trace one real slice — the "specimen" feature:**
1. `controllers/SpecimenController.java` — mapped at `/api/specimen`, constructor-injects `SpecimenService` (+ others). Note the static permission helpers (`canAddFinal`, `canReviseComment`) and Swagger `@Operation` annotations.
2. `services/SpecimenService.java` — the business logic. Note the heavy use of static-import utils (`DateTimeUtils`, `FunctionalUtils`) and `io.vavr` (`Either`, `Tuple2`) functional types.
3. `repositories/SpecimenRepository.java` — extends `JpaRepository<Specimen, Long>`. Study `findBySoftSpecimenId` (uses `@EntityGraph` to eager-fetch relations) and the `@Query` JPQL projections returning interface projections like `ISpecimenLight`.
4. `model/Specimen.java` — the entity. Note `@Entity`, Lombok `@Data/@Builder`, `extends ExternalAudit`, and the `@ManyToOne(fetch = LAZY)` + separate scalar FK column pattern (`order` + `orderId`).

**Checkpoint:** On paper, trace an HTTP `GET /api/specimen/...` from controller → service → repository → entity and back to a DTO.

---

## Step 3 — What Makes This Codebase Distinctive (1 day)

**Goal:** Learn the five things that will confuse you if you assume "generic Spring app."

### 3a. Dual datasource routing
`config/RoutingDBConfig` builds a routing `DataSource` over two HikariCP pools: **PRIMARY** and **REPORTING** (a read replica). The `@ReportingDB` annotation (see `annotations/ReportingDB/`) flips a query to the replica per-call; if no reporting URL is configured it falls back to primary.
→ **Be deliberate about which DB a query runs against.**

### 3b. Clinical domain config lives in YAML, not the DB
`src/main/resources/application.yaml` is ~480 lines of *domain* config: test families, IFA confirmatory codes, `scanlist:` blind-sample maps, `tasklist:` config (lines ~34–282 alone!), QA rules, instrument-result mappings.
→ **When changing test/assay behavior, check `application.yaml` FIRST** — much of what looks like it "should be code" is data here.

### 3c. Clinical rules / override engine
`services/rules/` and `config/` hold per-assay interpretation logic: `Alpha3FlowScreenRules`, `MogFlowTiterRules`, `GadTitrationOverrideRules`, `ParaneoplasticIBRules`, `Map1bRules`, plus `services/rules/test_family_rules/`. This encodes the lab's clinical decision logic per test family.

### 3d. Soft LIS integration
`SoftServiceImpl` / `SoftController` exchange specimens & results with the **Soft** lab information system. Results are pushed back via an Azure queue (`nerds-to-soft-test-results-*`).

### 3e. Distributed scheduling + version gating
- `config/SchedulerConfig` uses **ShedLock** (JDBC-backed) so scheduled jobs run once across instances.
- `config/FrontEndAppVersionFilter` checks the UI's app version → keeps version-gated features coordinated between repos.

**Checkpoint:** You can explain (1) how a query targets the reporting replica, (2) where you'd go to change how a test family is interpreted, and (3) how results flow back to Soft.

---

## Step 4 — The Domain Model (1 day)

**Goal:** Learn the vocabulary so code names stop being opaque.

Core entities (all under `model/`):

| Area | Key entities |
|---|---|
| Sample & order | `Specimen`, `Order`, `OrderedTest` |
| People/places | `Patient`, `Physician`, `Clinic`, `Location` |
| Tests | `NerdsTest`, `NonClinicalTest`, `CompanionTests`, `Methodology` |
| QC / reagents | `Lot`, `Inventory`, `ControlRange`, `ControlRule`, `ControlType` |
| Physical plate work | `PlateLayout`, `PlateTemplate`, `PlateLayoutSpot`, `PipettingScheme` |
| Workflow | Tasklists + `tasklist_steps/` (incl. `dynamic/` step engine) |
| Review/reporting | `ReviewDecision`, `IFAInterpretationDecisionType`, `ReportingRule`, `HistoricalReportingRule` |
| Auditing | `Audit`, `ExternalAudit`, `OverrideLog`, `DeletedEntity` |

**Exercise:** Open `Specimen.java` and follow its relationships outward — `order → patient/clinic`, `location`, `specimenStatus`, `familiarPool`. Draw a quick ER sketch of the sample→order→test core.

**Checkpoint:** You can define specimen, ordered test, tasklist, lot, and reporting rule in one sentence each.

---

## Step 5 — Configuration & Profiles (½ day)

**Goal:** Know which config wins in which environment.

| File | Purpose |
|---|---|
| `application.yaml` | Base config + heavy clinical domain config |
| `application-localdb.yaml` | Local SQL Server dev (Flyway on, `show-sql`, `ddl-auto: none`) |
| `application-h2.yaml` | In-memory H2 for tests |
| `application-devddl.yaml` | Dev with DDL generation |

Selected via `-Dspring.config.location=...` or `spring.profiles.active`.

**Note the local QA bypass flags** in `application-localdb.yaml` (`allow-bypass-incubation`, `allow-bypass-soft`, `allow-bypass-odm`, …) — these let you run without the full lab pipeline wired up.

Secrets come from **Azure Key Vault** at startup (`config/AzureKeyVaultPropertiesListener`), overlaid by env vars locally.

**Checkpoint:** You know why tests hit H2 while local dev hits SQL Server, and where secrets come from.

---

## Step 6 — Run It Locally (1 day)

**Goal:** Get the app running and hit an endpoint.

### Prerequisites
- JDK 21
- SQL Server running locally (Docker is easiest — see below)
- Azurite (Azure Storage emulator) — `AzureWebJobsStorage=UseDevelopmentStorage=true`
- Azure Key Vault access env vars (ask a teammate for the client ID/secret)

### Option A — Docker for the database
```bash
docker-compose up db      # starts SQL Server on localhost:1433 (see docker-compose.yml)
```
> `docker-compose.yml` also has a `tomcat` service that builds/runs the WAR, but for day-to-day dev you'll usually run the app from IntelliJ against the Dockerized DB.

### Option B — Run the app from IntelliJ (recommended for dev)
1. Create a `nerds` database in your local SQL Server (first run of Flyway builds the schema).
2. Spring Boot run config, main class `edu.mayo.lpea.small_custom_apps.nerds.NerdsApiApplication`.
3. **VM options:**
   ```
   -Dspring.config.location=classpath:/application.yaml,classpath:/application-localdb.yaml
   ```
4. **Environment variables** (see `README.md` for the full list):
   | Var | Example |
   |---|---|
   | `spring.datasource.url` | `jdbc:sqlserver://localhost;database=nerds;` |
   | `spring.datasource.username` | `sa` |
   | `spring.datasource.password` | `Nerds123` |
   | `AzureKeyVaultBaseUrl` | `https://cad-dev-nerdsapinc-kv.vault.azure.net` |
   | `AzureKeyVaultClientId` / `ClientSecret` / `TenantId` | *ask a teammate* |
   | `AzureWebJobsStorage` | `UseDevelopmentStorage=true` |
   | `NerdsToSoftTestResultsQueueName` | `nerds-to-soft-test-results-local` |

### Verify it's up
- **Swagger UI:** http://localhost:8080/swagger-ui.html — browse and try endpoints interactively.
- **Actuator health:** the `spring-boot-starter-actuator` is on the classpath.

> Endpoints require a valid Azure AD JWT. For exploration, use Swagger with a token, or lean on the `qa.allow-*` bypass flags in `application-localdb.yaml`.

**Checkpoint:** App starts, Flyway migrations apply cleanly, Swagger UI loads and lists the `/api/...` endpoints.

---

## Step 7 — Testing (1 day)

**Goal:** Run the suite and write your first test.

```bash
./mvnw test    # runs Spock/Groovy unit tests + JUnit/TestNG integration tests
```
> ⚠️ There's a **pre-push git hook that runs the full suite (~5 min)**. The convention is `git push --no-verify` and run `./mvnw test` yourself, since CI re-runs everything anyway.

### Write unit tests as **Spock specs** (the dominant style)
Study a clean, mock-heavy example: `src/test/groovy/.../services/AppFlagServiceTests.groovy`. The pattern:
```groovy
class AppFlagServiceTests extends Specification {
    ApplicationFlagRepository appFlagRepo
    AppFlagService appFlagSvc

    def setup() {
        appFlagRepo = Mock()                          // Spock mock
        appFlagSvc  = Spy(new AppFlagService(appFlagRepo))
    }

    def "should return new flag when flag is not present"() {
        given:  appFlagRepo.findByFlagName(_) >> Optional.empty()
        when:   def flag = appFlagSvc.getFlag("INIT_RPT_TEST", "Test Report")
        then:   flag.flagName == "INIT_RPT_TEST"
    }
}
```
Note the `given/when/then` blocks, `Mock()`/`Spy()`, and the `_` argument matcher.

**Exercise:** Pick a small service method with a bug-free happy path and write a Spock spec covering one success + one edge case.

**Checkpoint:** `./mvnw test` passes locally and your new spec runs.

---

## Step 8 — Smoke Tests (optional, ½ day)

`smokeTestsApiTesting/` is a **separate Maven project** for endpoint/smoke tests that imports this API's published DTOs. Build order matters:
```bash
./mvnw clean package                              # in NERDS_API first (publishes DTOs)
cd smokeTestsApiTesting && ../mvnw clean compile  # then resolve DTO imports
```

---

## Step 9 — Contribute a Change (½ day)

**Goal:** Make and ship a change end-to-end.

1. **Branch off `develop`:** `<workitem-id>-<short-desc>` (e.g. `5174241-euroline-review`).
2. Make the change. If it touches a request/response contract, it likely needs a matching **NERDS_UI** change too.
3. `./mvnw fmt:format` (the pre-commit hook does this) and `./mvnw test`.
4. `git push --no-verify`.
5. Open a PR **targeting `develop`**. Required reviewers auto-attach. **Do not enable auto-complete.**
6. Link the DSS work item (numeric ID) to the PR.

**Checkpoint:** A green PR against `develop` with the work item linked.

---

## Suggested schedule

| Days | Focus |
|---|---|
| 1 | Steps 0–1: orientation + stack/build |
| 2–3 | Steps 2–3: architecture + what's distinctive |
| 4 | Step 4: domain model |
| 5 | Steps 5–6: config + run it locally |
| 6 | Steps 7–8: testing |
| 7 | Step 9: ship a small change |

---

## Quick reference — commands

```bash
./mvnw compile          # compile + generate QueryDSL classes
./mvnw test             # run all tests
./mvnw clean package    # full build → target/nerds-api.war
./mvnw fmt:format       # apply google-java-format
docker-compose up db    # local SQL Server on :1433
# Run app: IntelliJ Spring Boot config, main = NerdsApiApplication
#   VM: -Dspring.config.location=classpath:/application.yaml,classpath:/application-localdb.yaml
# Swagger: http://localhost:8080/swagger-ui.html
```

## Quick reference — where things live

| I want to… | Look in… |
|---|---|
| Add/change an endpoint | `controllers/` |
| Change business logic | `services/` |
| Change a DB query | `repositories/` (JPA methods, `@Query`, QueryDSL) |
| Change the data model | `model/` + a new Flyway script in `db/migration` |
| Change test/assay behavior | `application.yaml` **first**, then `services/rules/` |
| Change DTO/contract | `dtos/` + the matching UI change |
| Route a query to the read replica | `@ReportingDB` annotation |
| Add a scheduled job | `config/SchedulerConfig` (ShedLock) |
| Understand auth | `config/ResourceServerConfig`, `AadOAuth2LoginSecurityConfig` |
