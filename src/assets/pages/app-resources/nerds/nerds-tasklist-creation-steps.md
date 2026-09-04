# NERDS Task List Creation Steps

Steps to create a NERDS task list in a local development environment.

## Purpose

A task list groups the specimens and control barcodes for one plate/run of a NERDS
test. It is built from a **scan list** — a CSV of barcodes (control barcodes plus
specimen barcodes) laid out by carrier/position — combined with a kit lot and the
plate layout for the selected test.

## How the scan list is supplied (read this first)

There are two ways NERDS gets the scan list, depending on the Cleo setting:

- **Cleo bypass ON (`qa.allow-bypass-cleo: true`) — the local-dev default.**
  `application-localdb.yaml` sets this to `true`. With bypass on, NERDS **generates
  the scan list for you** (`QaCleoBypassService.generateScanlist`): it takes the
  control barcodes of the in-service lot mapped to the test, then appends the barcodes
  of specimens currently in **Pending** for that test (falling back to the placeholder
  specimen `90000000009` when there aren't enough). In this mode you do **not** hand-edit
  a scan list file — you only need the right specimens to be Pending and a valid in-service
  kit lot. This is the normal local path.

- **Cleo bypass OFF (`qa.allow-bypass-cleo: false`) — deployed envs, or when you
  point local at the real share.** NERDS reads a real `.csv` off the Neuro-Immunology
  MFAD file share through Cleo. This is when you need to place a personal scan list file
  (see "Create a personal scan list file" below).

## Prerequisites

- A running local NERDS environment (`localdb` profile) and the NERDS UI pointed at it.
- A valid NERDS test with an associated Soft test code (e.g. **AEM CBA**).
- Specimens that have the selected test ordered and are still in **Pending** status.
- An **in-service** kit lot for the test, with its control barcodes and a plate layout.

## Steps

### 1. Identify the NERDS test code

1. Open the admin page.
2. Go to **Soft Tests**.
3. Search for the applicable test (e.g. **AEM CBA**).
4. Note one of the Soft test codes associated with that NERDS test.

### 2. Find eligible specimens

1. Search the local environment for specimens that have the selected test ordered.
2. Pick several specimens for testing.
3. Open **Details** → **Sample Results**.
4. Confirm the selected test is still **Pending** with no results yet.
5. Copy the Soft specimen IDs of the eligible specimens.

> The Soft specimen ID is the 11–12 digit specimen barcode used in the scan list
> (`SpecimenRegex = \d{11,12}`).

### 3. (Cleo bypass OFF only) Create a personal scan list file

Skip this step when `qa.allow-bypass-cleo: true` (the local default) — the scan list
is generated automatically.

**Where the file goes:** the Neuro-Immunology MFAD file share, under
`Instruments/<INSTRUMENT>/Output/`, saved as a `.csv`. `<INSTRUMENT>` is the instrument
folder name you will select in the workflow. This path comes from
`file-service.scanlist-folder: Instruments/%INSTRUMENT%/Output` in `application.yaml`,
with `%INSTRUMENT%` substituted at runtime. NERDS lists only the `.csv` files in that
folder (`GET /api/testing/instrument-files`), so the file must have a `.csv` extension
and sit directly in the `Output` folder for the chosen instrument.

1. Navigate to `Instruments/<INSTRUMENT>/Output/` on the share.
2. Copy an existing scan list `.csv` for the same test/instrument and **Save As** a
   personal version (e.g. `AEMCBA_Mark.csv`).
3. Edit it in a **plain-text editor** (e.g. VS Code) — **do not open/save it in Excel**,
   which can reformat the CSV.
4. Keep the vendor header/layout intact. NERDS auto-detects the format:
   - **Hamilton** — header starts with `Carrier,Position,Barcode`
     (or quoted `"Carrier","Position","Barcode"`).
   - **Tecan** — positional columns (lane = col 0, position = col 2, barcode = col 6).
5. Replace the specimen barcodes with the Soft specimen IDs from step 2, leaving the
   control barcode rows in place.
6. Save.

### 4. Verify the kit lot and control barcodes

1. In NERDS, open **Inventory**.
2. Filter for the applicable test (e.g. **Automated CBA**).
3. Open the in-service kit lot to be used (e.g. `AEM 0001`).
4. Open the **Barcodes** section.
5. Confirm the lot's control barcodes cover every control type required by the plate
   layout. (These barcodes are what the generated/edited scan list pulls in.)

> Two different control types may share one barcode when the same physical control is
> tracked in multiple positions.

### 5. Verify the plate layout

1. Return to the admin page → **Plate Layout**.
2. Filter for the applicable test and open the plate assigned to the NERDS test.
3. Review the control types the plate uses.
4. Confirm each required control type has a matching barcode available from the lot.

> The plate layout supplies the control positions; specimens fill the remaining
> positions in sequence per the plate's pipetting scheme.

### 6. Create the task list in NERDS

1. Start the task-list creation workflow.
2. Select the scan list file (bypass OFF) or accept the generated scan list (bypass ON).
3. Select or enter the verified in-service kit lot number.
4. Create the task list, then open the newly created task list.

> A new task list may show no user name at first — the displayed name is whoever
> completed the latest workflow step, not necessarily the creator.

### 7. Complete the initial task-list workflow

The exact fields depend on the test family (e.g. IFA tests ask for slide/conjugate lots;
CBA tests differ). For an IFA-style flow:

1. Select **Continue** through the initial steps.
2. Enter the slide lot in **Slide Lot 1**; if one lot covers every slide, give the full
   slide range (e.g. slides 1–2). Leave **Slide Lot 2** blank if unused.
3. Enter the conjugate lot.
4. Select an instrument.
5. Copy the task list name and use it as the **Plate Barcode**.
6. Confirm the deck layout was verified.

### 8. Enter slide barcodes

Build each slide barcode from the task list name plus a two-digit slide number:

```text
<TaskListName>_01
<TaskListName>_02
<TaskListName>_03
```

Continue for all additional slides.

### 9. Complete the MTP error step

1. Continue to the MTP error screen.
2. Enter `0` when not simulating MTP errors.
3. Submit, then continue to **Initial Results**.

## Troubleshooting Checklist

If the task list cannot be created, verify:

- [ ] You are on the local `localdb` environment.
- [ ] The selected specimens have the test ordered and are still **Pending**.
- [ ] An **in-service** kit lot exists for the test, with control barcodes.
- [ ] Every control type required by the plate layout has a matching barcode.
- [ ] The correct plate is assigned to the selected NERDS test.
- [ ] (Bypass OFF) The scan list is a `.csv` in `Instruments/<INSTRUMENT>/Output/`,
      saved as plain text (not touched by Excel), with valid 11–12 digit specimen IDs
      and its vendor header intact.

## Quick Summary

```text
Choose test code
    -> Find pending specimens (copy Soft specimen IDs)
    -> Scan list: auto-generated (Cleo bypass ON) OR personal .csv in
       Instruments/<INSTRUMENT>/Output/ (bypass OFF)
    -> Verify in-service kit lot and control barcodes
    -> Verify plate layout
    -> Create task list in NERDS
    -> Enter lots, instrument, and barcodes
    -> Continue to Initial Results
```
