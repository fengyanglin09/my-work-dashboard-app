# Step 0 — Diagrams & Notes Index

Visual companions for **Step 0 (Orientation)** of the [learning plan](../LEARNING_PLAN.md). These explain *what NERDS does* and *how it's built*, before you touch code.

Files are grouped into topic folders:
```
00step/
├── README.md                  ← you are here
├── clinical-workflow/         the end-to-end sample lifecycle
├── system-architecture/       how the software/system is built
├── testing-stage/             deep dive: the Testing stage (OnAssay/OnAutomation)
├── review-stage/              deep dive: the Review stage (S/C/L review, 2nd review, ODM)
└── materials-qc/              reference: Lot, Inventory, Control, Instrument & QC
```

The narrated **`.md` files are the source of truth**. Read these files directly: they embed the diagrams, explain how to read them, and point into the actual code.

> **Rendering:** the `.md` files render in any Markdown+Mermaid viewer (IntelliJ Mermaid plugin, VS Code Mermaid extension, GitHub/Azure DevOps preview). All diagrams are themed for readable text on a light diagram canvas, even when the Markdown page itself is in dark mode.

---

## Suggested reading order

1. **[`clinical-workflow/clinical-workflow.md`](clinical-workflow/clinical-workflow.md)** — *what happens to a sample* (the business process).
2. **[`system-architecture/system-architecture.md`](system-architecture/system-architecture.md)** — *how the software is built* (components, layers, external systems).
3. **[`testing-stage/testing-stage.md`](testing-stage/testing-stage.md)** — *a deep dive on the busiest stage* (how a test is physically run).
4. **[`review-stage/review-stage.md`](review-stage/review-stage.md)** — *a deep dive on the trickiest stage* (Specialist/Consultant/Lab Director review, the separate interpretive-comment 2nd review, and the ODM rules engine).

(Optional detour after step 1: [`clinical-workflow/order-origins.md`](clinical-workflow/order-origins.md) — where orders come from.)

(Reference, read whenever a term is unclear: [`materials-qc/materials-qc.md`](materials-qc/materials-qc.md) — what **lot / inventory / control / instrument** mean and how they connect.)

---

## The narrated docs (`.md`)

| File | What it answers | Diagrams inside |
|---|---|---|
| [`clinical-workflow/clinical-workflow.md`](clinical-workflow/clinical-workflow.md) | The end-to-end clinical lifecycle: ordering → testing → review → reporting. Cross-checked against **both** API and UI. | Workflow flowchart; status **state machine**; UI cross-check tables |
| [`clinical-workflow/order-origins.md`](clinical-workflow/order-origins.md) | The three ways an order enters NERDS (Soft vs. in-app "offline" clinical vs. non-clinical) and *when* each is used. | Order-origins flowchart; comparison table |
| [`system-architecture/system-architecture.md`](system-architecture/system-architecture.md) | How the app is put together and what it talks to. Includes the **read-direct / write-via-queue** Soft explanation. | System context; layered request flow; **specimen round-trip sequence**; frontend cross-check |
| [`testing-stage/testing-stage.md`](testing-stage/testing-stage.md) | How `OnAssay` & `OnAutomation` actually work — the data-driven step engine, and why both paths are the *same* step list with different drivers. | Step engine; single-step lifecycle; 4 per-family assay lanes |
| [`review-stage/review-stage.md`](review-stage/review-stage.md) | The **four** things all called "review" (test-result ladder, interpretive-comment 2nd review, IFA sub-pipeline, QC review), and what **ODM** actually is (an external rules engine, *not* part of Soft). | Pipelines overview; S/C/L decision ladder; ODM round-trip sequence; interpretive-comment 2nd review; IFA sub-pipeline; 3-kinds-of-override comparison |
| [`review-stage/odm-payload-mapping.md`](review-stage/odm-payload-mapping.md) | *How* NERDS packages its data into the ODM payload and maps ODM's answer back — and why the mapping is **per test family** (all those `*ResultModelMapperConfig` classes). Includes the **parser** layer. | Round-trip mapping pipeline; request payload shape; per-family adapter; response write-back field map; parser layers |
| [`review-stage/worked-example-alpha3-flow.md`](review-stage/worked-example-alpha3-flow.md) | One specimen traced **end to end** (file → parser → measurements → ODM → entities) with sample numbers. Defines **"translate"** and **"enhance results."** | Single numeric trace diagram |
| [`materials-qc/materials-qc.md`](materials-qc/materials-qc.md) | Reference for the materials/QC vocabulary: **Lot, Inventory, Control, Instrument, target value**, how they relate, and how they show up in a test run. Read whenever one of these terms is fuzzy. | Plain-language concept map; ER diagram; lot lifecycle; materials-in-a-run |

---

## "I want to understand… → look here"

| Question | Go to |
|---|---|
| What does NERDS do, start to finish? | [`clinical-workflow/clinical-workflow.md`](clinical-workflow/clinical-workflow.md) |
| Where do orders come from — can the app place them? | [`clinical-workflow/order-origins.md`](clinical-workflow/order-origins.md) |
| From status X, can a test move to status Y? | [`clinical-workflow/clinical-workflow.md`](clinical-workflow/clinical-workflow.md) — "The status lifecycle as a state machine" |
| What systems does the API depend on? | [`system-architecture/system-architecture.md`](system-architecture/system-architecture.md) — §1 "System context" |
| How does a single request get processed? | [`system-architecture/system-architecture.md`](system-architecture/system-architecture.md) — §2 "Internal layered architecture" |
| Which database does a query use, and why two DBs? | [`system-architecture/system-architecture.md`](system-architecture/system-architecture.md) — "Why is there a REPORTING replica?" |
| How do results actually get to Soft? | [`system-architecture/system-architecture.md`](system-architecture/system-architecture.md) — "Concrete example — one specimen's round trip" |
| How is a test physically run on the bench? | [`testing-stage/testing-stage.md`](testing-stage/testing-stage.md) |
| What are the exact steps for assay *X*? | its `V1_*` seed migration (`db/migration`) — see the accuracy notes in `testing-stage.md` |
| How does result review / escalation work (Specialist/Consultant/Lab Director)? | [`review-stage/review-stage.md`](review-stage/review-stage.md) |
| What is ODM, and what does "Send to ODM" do? | [`review-stage/review-stage.md`](review-stage/review-stage.md) — "The ODM round trip" + the term primer |
| How is data packaged for ODM / mapped back (and why per-test-family)? | [`review-stage/odm-payload-mapping.md`](review-stage/odm-payload-mapping.md) |
| What are the "parsers" and how do they relate to ODM mapping? | Diagram 5 of [`review-stage/odm-payload-mapping.md`](review-stage/odm-payload-mapping.md) |
| What do "translate" / "enhance results" mean, and can I see one full example? | [`review-stage/worked-example-alpha3-flow.md`](review-stage/worked-example-alpha3-flow.md) |
| What is the "2nd review" and how is it different from Specialist/Consultant review? | [`review-stage/review-stage.md`](review-stage/review-stage.md) — "Interpretive-comment review & the mandatory 2nd review" |
| What is a **lot** / inventory / control / instrument? | [`materials-qc/materials-qc.md`](materials-qc/materials-qc.md) |
| How do controls end up on a plate, and what makes a run pass/fail QC? | [`materials-qc/materials-qc.md`](materials-qc/materials-qc.md) — "How lot / instrument / control show up in a real run" |
| How does the Angular UI map onto all this? | the "frontend cross-check" sections in `clinical-workflow.md` & `system-architecture.md` |

---

## Glossary (terms used across these docs)

| Term | Meaning |
|---|---|
| **Test family** (`TestFamily`) | NERDS's grouping of related assays (e.g. `IFA`, `RT-QuIC`, `IPA LDT`, `MAP1B`, `Automated CBA`). Owns **one ordered step list** (`TasklistTestFamilySteps`) and contains one or more orderable NERDS tests. Often shortened to **"family."** |
| **OrderedTest** | One test ordered on one specimen — the object that moves through the workflow (`New → OnAssay → Review → …`). |
| **Tasklist** | A bench worklist / run of a test family's steps for a set of specimens. |
| **Assay** | The lab test procedure itself (incubations, additions, plate reads, instrument runs). |
| **`OnAssay`** | Status meaning "a tasklist is created and its steps are being worked" (either human- or automation-driven). |
| **`OnAutomation`** | Status meaning "queued/claimed for the automation pipeline" — *before* the tasklist runs (which is `OnAssay`). |
| **`stepType`** | The *kind* of a step (enum: `Incubation`, `ReadPlate`, `Review`, …). |
| **`subtypeData`** | JSON on a step holding the data produced by doing it (times, lot, instrument, readings). |
| **Soft (LIS)** | The hospital's Lab Information System — orders come from it; results go back to it. |
| **Lot** | A specific **batch** of a lab material (reagent / control / consumable) from one manufacturing run — identified by a unique **lot number**, with its own **expiration date** and QC/approval status. Like the batch code on a milk carton: same product, one particular run. Techs record which lot(s) a test used, for traceability and to block expired/unapproved lots. (`model/Lot.java`.) |
| **Inventory** | The catalog entry for a *material itself* (e.g. "anti-XYZ conjugate"); each Inventory item has many Lots. Its `InventoryType` is one of `Reagent`, `Normal`, `Control`, `PrepsAndToxins`, `TestAssayControl`. (`model/Inventory.java`.) |
| **Control** | A sample with a *known* expected result, run alongside patient specimens to prove the assay is working (QC). Its own inventory/lots; "Control Review" checks control results before patient results. |
| **ODM** | An external rules/decision engine NERDS calls over HTTP to translate raw numbers or a reviewer's typed decision into a formatted final result. **Separate from Soft** (never talks to it). Acronym never spelled out in code; fingerprints point to IBM Operational Decision Manager (high confidence, not certain). |
| **Sign Out** | The reviewer action that persists a final result and (if reportable) posts it to the Soft queue — always the last step of a review decision. |
| **Verify Decision** ("Send to ODM") | A *preview* call: send a typed decision to ODM, get a formatted result back, *before* Sign Out. |
| **`Pending2ndReview`** | A status used **only** by the interpretive-comment (report-text) review pipeline — not by test-result review. Requires a *different* person to complete than whoever last edited it. |
| **Interpretive comment** | Free-text report boilerplate on an `OrderedTest`, reviewed on its own timeline (separate from the test result), and never sent through ODM. |
| **Raw data** | The instrument's untouched per-well readings (optical density, counts, signal, and a background/blank). Not yet meaningful on its own. |
| **Calculated data** | Raw readings *processed* into per-specimen values — mainly **background subtraction** and comparison to controls — shown on the "Calculated Data" tab. The middle layer between raw output and an interpreted result; it's what "Send to ODM" sends. |
| **Background (bkgd)** | The plate's blank/baseline signal subtracted from each specimen when computing calculated data (`Tasklist.originalBkgd` / `updateBkgd`). |
| **Parser** (`*Parser`) | A per-test-family class (`constraints/instrument_results/`) that reads a specific instrument's **raw result file** into structured measurements, and maps ODM's computed measurements back (`mapMeasurements`). Distinct from the ODM *payload* mapper. |
| **Translate** | The `POST /api/results/translate` action (the "Send to ODM" button) — round-trips parsed measurements through ODM to get interpreted results. Backed by `enhanceResults`. |
| **Enhance results** | `InstrumentResultService.enhanceResults(...)` — the method behind "translate"; "enhances" plain measurements with ODM's computed result/decision/colors, then saves. |
