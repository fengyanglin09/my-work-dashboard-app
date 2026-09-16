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

### 1. Find a test and specimens

1. Open **Admin** and go to **Soft Tests**.
2. Search for the desired test code, such as an **AEM/AEM001**-related test.
3. Note the associated **Soft Test ID** and use it to locate specimens.
4. Open each specimen's **Details** → **Sample Results**.
5. Confirm the selected test is still **Pending** with no results, then copy the Soft
   specimen IDs for the specimens you want to test.

> The Soft specimen ID is the 11–12 digit specimen barcode used in a scan list
> (`SpecimenRegex = \d{11,12}`).

### 2. Verify specimens, controls, and barcodes

1. Open **Inventory** and filter for the applicable test.
2. Open the in-service kit lot and review the **Barcodes** section.
3. Review the control types and specimens expected on the plate.
4. Confirm the required specimen and control barcodes are available before proceeding.
5. In **Admin** → **Plate Layout**, confirm the correct plate is assigned to the test
   and its control types match the available lot barcodes.

The Inventory screen shows which specimens and controls are expected on the plate and,
therefore, which barcodes are needed. Two control types can share one barcode when the same
physical control is tracked in more than one position.

### 3. (Cleo bypass OFF only) Create a task-list scan file

Skip this step when `qa.allow-bypass-cleo: true` (the local default) because NERDS generates
the scan list automatically. When bypass is off, create a personal file from an existing scan
file for the same instrument and test scenario.

**Where the file goes:** the Neuro-Immunology MFAD file share, under
`Instruments/<INSTRUMENT>/Output/`, saved as a `.csv`. `<INSTRUMENT>` is the instrument
folder selected in the workflow. NERDS lists only `.csv` files directly in that folder.

1. Navigate to `Instruments/<INSTRUMENT>/Output/` on the network share.
2. Find an existing task-list scan file for the same test/instrument.
3. Duplicate it and rename the copy for your test scenario, for example `AEMCBA_Mark.csv`.
4. Edit it in a **plain-text editor** such as VS Code. Do **not** open and save it in Excel,
   which can change the CSV format.
5. Keep the vendor header and layout intact:
   - **Hamilton** begins with `Carrier,Position,Barcode` (or the quoted equivalent).
   - **Tecan** uses positional columns: lane = column 0, position = column 2, barcode = column 6.
6. Replace the specimen barcodes with the Soft specimen IDs from step 1, leaving the control
   barcode rows in place, then save the file.

### 4. Create the task list

1. Start the task-list creation workflow.
2. Select the scan list file (bypass OFF) or accept the generated scan list (bypass ON).
3. Select or enter the verified in-service kit lot number.
4. Create the task list and open the newly created task list.
5. Continue through the wizard pages. When **Continue** is enabled and no validation message
   is shown, there is nothing additional required on that page.

> A new task list may initially show no user name. The displayed name is the person who
> completed the latest workflow step, not necessarily the creator.

### 5. Configure slides

At the slide-related step, use the number of generated slide-barcode fields to determine the
number of slides required. The count is calculated from the specimens and controls on the task list.

For example, two slide-barcode fields require two slides, so the slide range is **Slide 1**
through **Slide 2**.

### 6. Enter and verify lot information

For every field with a **Verify** button:

1. Enter the appropriate lot number.
2. Select **Verify**.
3. Confirm the field turns green before continuing.

This includes fields such as **Slide Lot**, **Conjugate Lot**, and other inventory lots. For
multiple slides, use the same lot for every slide unless the lab is intentionally changing lots.

### 7. Select an instrument

Choose an instrument for the workflow step. The selected instrument does not need to be the
same instrument used when the task list was originally created.

### 8. Enter plate barcodes

The plate barcode is the **task-list scan file name**. Enter the values NERDS expects and verify
them before continuing; incorrect values are highlighted and block the workflow.

For multiple plates, append the two-digit plate sequence to the task-list file name:

```text
<TaskListFileName>_01
<TaskListFileName>_02
```

Use `_01` for the first plate, `_02` for the second plate, and continue the sequence for
additional plates.

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
    -> Verify the plate's specimens, controls, and required barcodes in Inventory
    -> Scan list: auto-generated (Cleo bypass ON) OR personal .csv in
       Instruments/<INSTRUMENT>/Output/ (bypass OFF)
    -> Create task list in NERDS
    -> Configure slides and verify all required lots
    -> Select instrument
    -> Enter task-list file-name plate barcodes (_01, _02, ...)
    -> Continue to Initial Results
```
