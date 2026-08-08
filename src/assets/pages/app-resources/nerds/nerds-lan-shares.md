# NERDS LAN Shares And Excel Files

This note captures the LAN share and Excel-file context from `NerdsLanShares.docx`.

Mac links use `smb://` URLs and should open in Finder when clicked from a browser or copied into Finder > Go > Connect to Server.

## Clinical LAN Share

### Base Directories

| Environment | Windows Path | Mac Link |
| --- | --- | --- |
| Dev / Dev2 | `\\roisi01.mayo.edu\dlmpim_neuroimmunology_standard\Neuroimmunology Clinical\Projects\NERDS\NERDS Instrument Files\Neuro_Clinical_Dev\NERDS` | [Open in Finder](smb://roisi01.mayo.edu/dlmpim_neuroimmunology_standard/Neuroimmunology%20Clinical/Projects/NERDS/NERDS%20Instrument%20Files/Neuro_Clinical_Dev/NERDS) |
| INT / INT2 | `\\roisi01.mayo.edu\dlmpim_neuroimmunology_standard\Neuroimmunology Clinical\Projects\NERDS\NERDS Instrument Files\Neuro_Clinical_Int\NERDS` | [Open in Finder](smb://roisi01.mayo.edu/dlmpim_neuroimmunology_standard/Neuroimmunology%20Clinical/Projects/NERDS/NERDS%20Instrument%20Files/Neuro_Clinical_Int/NERDS) |
| PROD | `\\roisi01.mayo.edu\dlmpim_neuroimmunology_standard\Neuroimmunology Clinical\NERDS` | [Open in Finder](smb://roisi01.mayo.edu/dlmpim_neuroimmunology_standard/Neuroimmunology%20Clinical/NERDS) |

### Subdirectories

| Directory | Usage |
| --- | --- |
| `\NERDS_Final_Test_Data` | Final results files available to import are stored here. |
| `\NERDS_Initial_Report` | Initial result report files are stored here. They are generated when a user clicks the link in the UI on the Reports > Initial Results page. |
| `\NERDS_Test_Data` | Initial result files available to import are stored here. |
| `\NERDS_Worklists\Output` | Pending result reports are saved here. Pending reports are generated hourly and can also be generated on demand from the UI Reports section. |
| `\NERDS_Worklists\Problem_Patient_Data` | Output files from processing a Problem Patient sheet through Sample Monitoring > File Upload are stored here. |

## Restrictive LAN Share

### Base Directories

| Environment | Windows Path | Mac Link |
| --- | --- | --- |
| Dev / Dev2 | `\\roisi01.mayo.edu\dlmpim_neuroimmunology_standard\Neuroimmunology Clinical\Projects\NERDS\NERDS Instrument Files\Neuro_Restrictive_Dev\NERDS` | [Open in Finder](smb://roisi01.mayo.edu/dlmpim_neuroimmunology_standard/Neuroimmunology%20Clinical/Projects/NERDS/NERDS%20Instrument%20Files/Neuro_Restrictive_Dev/NERDS) |
| INT / INT2 | `\\roisi01.mayo.edu\dlmpim_neuroimmunology_standard\Neuroimmunology Clinical\Projects\NERDS\NERDS Instrument Files\Neuro_Restrictive_Int\NERDS` | [Open in Finder](smb://roisi01.mayo.edu/dlmpim_neuroimmunology_standard/Neuroimmunology%20Clinical/Projects/NERDS/NERDS%20Instrument%20Files/Neuro_Restrictive_Int/NERDS) |
| PROD | `\\rchappvs03.mayo.edu\DLMPIM_DI_CRITICAL\LPEA_DI_NEURO_IMM\NERDS` | [Open in Finder](smb://rchappvs03.mayo.edu/DLMPIM_DI_CRITICAL/LPEA_DI_NEURO_IMM/NERDS) |

### Subdirectories

| Directory | Usage |
| --- | --- |
| `Archived\<NERDSTEST>` | Archived results folder. When the tasklist is complete, results move from the results folder to the archived results folder. Example: `Archived\EZNT8`. |
| `Instruments\<INSTRUMENT>\Output` | Scanlist folder. Scanlist instrument files are exported here from the instrument and can be imported when creating a new tasklist. Example: `Instruments\Darth Vader\Output`. |
| `Instruments\<INSTRUMENT>\Plate_Reader\<TEST_NAME>` | Results folder. Instrument data files are saved from the plate reader in this folder. Example: `Instruments\Darth Vader\Plate_Reader\Zinc`. |
| `Tasklists\<NERDSTEST>_TL` | Tasklists folder. When a user creates a new tasklist in the UI, it is stored here and can be reopened from here later. Example: `Tasklists\EZNT8_TL`. |

## Ebook LAN Shares

These files are needed in NERDS and currently live on LAN shares. The original note says Russ is investigating whether they can move to Azure Blob Storage in the future.

### INT Or DEV

| Tab | Windows / Network Path | Mac Link |
| --- | --- | --- |
| Sample | `//mfad.mfroot.org/chapp/dlmpim_lpea_critical/sko_form_dev/Integration/Neuroimmunology Clinical/Accessioning/Sample Info Ebook` | [Open in Finder](smb://mfad.mfroot.org/chapp/dlmpim_lpea_critical/sko_form_dev/Integration/Neuroimmunology%20Clinical/Accessioning/Sample%20Info%20Ebook) |
| CBA | `//mfad.mfroot.org/rchapp/dlmpim_lpea_critical/sko_form_dev/Integration/IF Pictures/CBA Ebook` | [Open in Finder](smb://mfad.mfroot.org/rchapp/dlmpim_lpea_critical/sko_form_dev/Integration/IF%20Pictures/CBA%20Ebook) |
| IFA | `//mfad.mfroot.org/rchapp/dlmpim_lpea_critical/sko_form_dev/Integration/IF Pictures/MATK Ebook` | [Open in Finder](smb://mfad.mfroot.org/rchapp/dlmpim_lpea_critical/sko_form_dev/Integration/IF%20Pictures/MATK%20Ebook) |

### PROD

| Tab | Windows Path | Mac Link |
| --- | --- | --- |
| Sample | `\\mfad\rchdept\dlmpim_Neuroimmunology_standard\Neuroimmunology Clinical\Accessioning\Sample Info Ebook` | [Open in Finder](smb://mfad/rchdept/dlmpim_Neuroimmunology_standard/Neuroimmunology%20Clinical/Accessioning/Sample%20Info%20Ebook) |
| CBA | `\\mfad\rchdept\dlmpim_Neuroimmunology_standard\IF Pictures\CBA Ebook` | [Open in Finder](smb://mfad/rchdept/dlmpim_Neuroimmunology_standard/IF%20Pictures/CBA%20Ebook) |
| IFA | `\\mfad\rchdept\dlmpim_Neuroimmunology_standard\IF Pictures\MATK Ebook` | [Open in Finder](smb://mfad/rchdept/dlmpim_Neuroimmunology_standard/IF%20Pictures/MATK%20Ebook) |

## Excel And CSV File Usage

NERDS uses Excel files for several workflows:

- Import initial results.
- Import final results.
- Generate Pending Results reports in Excel format.
- Generate Initial Results reports in Excel format.
- RLIMS input: Excel file uploaded with a list of specimens and RLIMS / Matrix IDs.
- Tossing input: Excel file uploaded with a list of specimens to discard.
- Tossing output: Excel file returned with success or failure details.
- Problem Patient input: Excel file uploaded with a list of patients needing further review.
- Creating tasklist instrument files.
- Several other CSV-format files are also used.

The original note says initial and final result import through Excel will be phased out.

## Follow-Up Notes

- Confirm whether the future Azure Blob Storage migration happened or is still planned.
- Confirm which application config keys map to each LAN share.
- Confirm whether these paths are still correct for Dev2 / INT2.
- Add any required access group or permission notes when known.
