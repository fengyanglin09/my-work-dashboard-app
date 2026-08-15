# NERDS Enums And Status Values

This page is a quick reference for NERDS status values and core enum values. The Java enum value is the stable code value; the display label can come from the `WorkflowStatus` table.

## Final Result / LIS Statuses

These are the statuses you will usually see after final results are imported or sent toward LIS / Soft.

| Display label | Code value | Meaning | Code reference |
|---|---|---|---|
| `Complete` | `WorkflowStatusType.FinalResults` | The final results were processed and saved in NERDS. | `NERDS_API/src/main/java/edu/mayo/lpea/small_custom_apps/nerds/model/WorkflowStatusType.java:17`; display seed in `NERDS_API/src/main/resources/db/migration/V1_167__AddWorkflowStatusDisplayName.sql:24` |
| `Complete - Sending to LIS` | `WorkflowStatusType.QueuedForSoft` | The final results were sent to the queue and are waiting for the function to pick them up and send them to LIS / Soft. | `NERDS_API/src/main/java/edu/mayo/lpea/small_custom_apps/nerds/model/WorkflowStatusType.java:20`; display seed in `NERDS_API/src/main/resources/db/migration/V1_189__QueuedForSoftStatusAndResultFileLog.sql:8` |
| `Sent To Soft` | `WorkflowStatusType.SentToSoft` | The function sent the final results to Soft. | `NERDS_API/src/main/java/edu/mayo/lpea/small_custom_apps/nerds/model/WorkflowStatusType.java:18` |
| `Complete-Not Sent to Soft` | `WorkflowStatusType.NotSentToSoft` | The final results are complete in NERDS, but were not sent to Soft. Use this as a troubleshooting/retry status. | `NERDS_API/src/main/java/edu/mayo/lpea/small_custom_apps/nerds/model/WorkflowStatusType.java:21`; display seed in `NERDS_API/src/main/resources/db/migration/V1_360__Not_Sent_To_Soft_Workflow_Status.sql:4` |

Note: older DB migration code seeded `SentToSoft` with the display label `Signed Out`. If the UI shows `Sent To Soft`, treat `SentToSoft` as the reliable backend value and the label as the user-facing wording.

## WorkflowStatusType

Code reference: `NERDS_API/src/main/java/edu/mayo/lpea/small_custom_apps/nerds/model/WorkflowStatusType.java:9`

| Code value | Typical display label | Notes |
|---|---|---|
| `New` | `Pending` | Initial/pending workflow status. |
| `OnAssay` | `On Assay` | Test is on assay. |
| `Review` | `Review` | General review status. |
| `SReview` | `Specialist Review` | Specialist review. Included in in-process status logic. |
| `CReview` | `Consultant Review` | Consultant review. Included in in-process status logic. |
| `TNP` | `Test Not Processed` | Not updateable by `WorkflowStatusType.updateable()`. |
| `QNS` | `QNS` | Quantity not sufficient. Not updateable by `WorkflowStatusType.updateable()`. |
| `FinalResults` | `Complete` | Final results exist in NERDS. |
| `SentToSoft` | `Sent To Soft` / `Signed Out` | Sent to Soft/LIS. Not updateable by `WorkflowStatusType.updateable()`. |
| `Cancelled` | `Cancelled` | Cancelled/no longer active. Not updateable by `WorkflowStatusType.updateable()`. |
| `QueuedForSoft` | `Complete - Sending to LIS` | Waiting for the send-to-LIS function. Included in `isInProcessStatus()`. |
| `NotSentToSoft` | `Complete-Not Sent to Soft` | Complete in NERDS, not sent to Soft. |
| `NonOrderedTest` | `Non Ordered Test` | No longer ordered. Not updateable by `WorkflowStatusType.updateable()`. |
| `OnAutomation` | `On Automation` | Automation workflow status. Display seed: `NERDS_API/src/main/resources/db/migration/V1_500__OnAutomationWorkflowStatus.sql:1`. |
| `Hold` | `On Hold` | Hold status. Included in in-process status logic. Display seed: `NERDS_API/src/main/resources/db/migration/V1_566__HoldWorkflowStatus.sql:9`. |
| `Pending2ndReview` | `Pending Second Review` | Pending second review. Display seed: `NERDS_API/src/main/resources/db/migration/V1_675__Add2ndReviewWfStatus.sql:1`. |
| `LReview` | `Lab Director Review` | Lab director review. Display seed: `NERDS_API/src/main/resources/db/migration/V1_946__AddLReviewWorkflowStatus.sql:1`. |

Important workflow helpers:

| Helper | Values |
|---|---|
| `updateable()` excludes | `NonOrderedTest`, `SentToSoft`, `Cancelled`, `TNP`, `QNS` |
| `isInProcessStatusTypes()` returns | `SReview`, `CReview`, `LReview`, `Hold` |
| `isInProcessStatus()` returns | `CReview`, `SReview`, `QueuedForSoft`, `Hold` |
| `noLongerOrdered()` returns true for | `NonOrderedTest`, `Cancelled` |

## ResultDecisionType

Code reference: `NERDS_API/src/main/java/edu/mayo/lpea/small_custom_apps/nerds/model/ResultDecisionType.java:3`

| Code value | Notes |
|---|---|
| `Report` | Reportable. For IFA, maps to final result. |
| `Repeat` | Repeat decision. For IFA, maps to initial result. |
| `RepeatFailQC` | Repeat because QC failed. |
| `CReview` | Consultant review decision. |
| `SReview` | Specialist review decision. Needs preliminary/final result. For IFA, maps to preliminary result. |
| `LReview` | Lab director review decision. |
| `TNP` | Test not processed. |
| `QNS` | Quantity not sufficient. |
| `Hold` | Hold decision. For IFA, maps to initial result. |
| `Omit` | Omit decision. |

## ActionType

Code reference: `NERDS_API/src/main/java/edu/mayo/lpea/small_custom_apps/nerds/model/ActionType.java:3`

| Code value | Meaning |
|---|---|
| `InterpCmtConsReviewRequest` | Interpretive comment consultant review requested. |
| `InterpCmtConsReviewComplete` | Interpretive comment consultant review completed. |
| `InterpCmt2ndReviewRequest` | Interpretive comment second review requested. |
| `InterpCmt2ndReviewComplete` | Interpretive comment second review completed. |
| `InterpCmtLabDirReviewRequest` | Interpretive comment lab director review requested. |
| `InterpCmtLabDirReviewComplete` | Interpretive comment lab director review completed. |

## Other Model Enum Quick List

These values were found under `NERDS_API/src/main/java/edu/mayo/lpea/small_custom_apps/nerds/model`.

| Enum | Values |
|---|---|
| `ApplicationSectionType` | `Admin`, `Testing`, `Inventory`, `Reports`, `SampleMonitoring`, `Specialist`, `Consultant`, `Search`, `InterpretiveComments`, `LabDash`, `LabDirector` |
| `ArchiveType` | `archive`, `unarchive` |
| `CommentType` | `Root`, `Interpretive`, `Specimen`, `FailedTasklist` |
| `AntibodiesSuspectedOptions` | `AGNA1`, `AMPA`, `Amphi`, `ANNA1`, `ANNA2`, `ANNA3`, `AP3B2`, `AQP4`, `CASPR2`, `CRMP5`, `DPPX`, `GABAB`, `GAD`, `GFAP`, `GRAF1`, `IgLON5`, `ITPR1`, `LGI1`, `mGluR1`, `NCDN`, `NIF`, `NMDA`, `NOS`, `PCA1`, `PCA2`, `PCATr`, `PDE10A`, `Septin5`, `Septin7`, `SRP`, `TRIM46`, `UNCA` |
| `IFAInterpretationDecisionType` | `RepeatFailQC`, `RepeatScreen`, `RepeatTitration`, `ScreenReview`, `Negative`, `Omit`, `LT_240`, `LT_2`, `Reactive`, `Pos_240`, `Pos_480`, `Pos_960`, `Pos_1920`, `Pos_3840`, `Pos_7680`, `Pos_GTE_7680`, `Pos_15360`, `Pos_30720`, `Pos_GTE_30720`, `Pos_61440`, `Pos_122880`, `Pos_245760`, `Pos_GTE_245760`, `Pos_2`, `Pos_4`, `Pos_8`, `Pos_16`, `Pos_32`, `Pos_64`, `Pos_GTE_64`, `Pos_128`, `Pos_GTE_256`, `Pos_256`, `Pos_512`, `Pos_1024`, `Pos_GTE_1024`, `Unknown` |
| `InstrumentType` | `Instrument`, `PlateWasher`, `GammaCounter`, `Microscope`, `FlowCytometer`, `MicroplateReader`, `Helmed`, `Avidien`, `Aptiva`, `Bench`, `Fridge`, `Euroline`, `ELLA` |
| `InterestingReasonType` | `Null`, `ConsultantRequest`, `DrawSite`, `Familiar`, `TestResults`, `SpecimenType`, `DevelopmentTesting`, `OfflineTesting` |
| `InterferenceType` | `Tech`, `ODM`, `Override` |
| `InventoryType` | `Reagent`, `Normal`, `Control`, `CriticalReagents`, `TestAssayControl` |
| `MAP1BInterpretationDecisionType` | `Negative`, `Positive`, `Repeat`, `Omit`, `Unknown` |
| `NoteSubType` | `SpecialistInstructions`, `AdditionalReview`, `ConsultantInstructions`, `ResultsImport`, `IFAReadingSummary`, `IFAConsultantReadingSummary`, `PhotoCanceled`, `FinalResultOverride`, `LabDashOrder`, `ApprovedExpired`, `CollectedDate`, `ReviewerNote`, `FailedReason`, `OmittedNote`, `MissingLost`, `OmittedByResultsImport` |
| `NoteType` | `Clinical`, `Specimen`, `Lot`, `Tasklist`, `TasklistSpecimen`, `TestResult`, `IfaResult`, `OrderedTest` |
| `OverrideLogIdType` | `Specimen`, `Tasklist` |
| `QcResultType` | `Pass`, `Fail`, `PartialFail` |
| `ResultLayoutType` | `Simple4` |
| `ResultSourceType` | `Excel`, `Instrument`, `InterpretiveComment`, `EBookMigration`, `Manual`, `SystemGenerated` |
| `ResultType` | `Initial`, `Preliminary`, `Final` |
| `SpecType` | `SERUM`, `CSF` |
| `SpecimenMatrixIdStatusType` | `Active`, `Remedy`, `Expired`, `Extinguished` |
| `TasklistTestFamilyStepType` | `Created`, `CompleteOnly`, `Instrument`, `Incubation`, `Review`, `LotInstrument`, `BufferKit`, `Base`, `ReadPlate`, `SampleAddition`, `InstrumentWorkflow`, `ReadyForReview`, `Lot`, `IFAReadyForReview`, `FinalReview`, `IFAHelmedSetup`, `SetupComplete`, `StabilityTimer`, `TransientFlowPart2`, `TransientFlowAnalysis`, `IFASerumAbsorption`, `ModulatingFlowPart1`, `ModulatingFlowPart2`, `CellPreCheck`, `StableFlowPart2`, `TechReview`, `Testing`, `GenericReview`, `IncubationAutoStart`, `SlideSetup`, `AssaySetup`, `SampleDilution`, `SlidePreparationGFAP`, `SlidePreparationNIF`, `CReview`, `Gating`, `LoadControl`, `ReviewControl`, `AptivaAssaySetup`, `IncubationInstrument`, `GlioInstrumentWorkflow`, `MAP1BStartingStripNumber`, `MAP1BAddition`, `MAP1BWash`, `MAP1BReadyForReview`, `MAP1BReview`, `EurolineInstrumentWorkflow`, `Alpha3FlowPart2`, `Washing2CBA`, `Washing3CBA`, `SampleDilutionCytokines` |
| `TasklistFileCommonHeaders` | `PipettingSchemeType`, `PlateNumber`, `Run`, `CSF`, `Spin`, `WellIDs`, `StripNumber` |
| `TestFam` | `IFA`, `MAP1B`, `Euroline`, `Alpha3Flow`, `Aptiva`, `AutomatedCBA`, `BCA`, `Blots`, `CBA`, `GAD`, `Gangliosides`, `Generic`, `GFAPCBA`, `GlycineCBA`, `GQ1B`, `IPALDT`, `IPAVended`, `Ma2CRMP5`, `MAG`, `ModulatingFlow`, `NIFCBA`, `RTQuIC`, `StableFlow`, `TransientFlow`, `Zinc`, `CSFCytokines` |

## Other Backend Enum Quick List

These values live outside the main `model` folder. I kept `IANATimezone` out of this quick reference because it is a long timezone lookup enum, not a NERDS business/status enum.

| Enum | Values |
|---|---|
| `DatabaseType` | `PRIMARY`, `REPORTING` |
| `PassedStatus` | `Pass`, `Fail`, `Nothing` |
| `AutomationErrorLogActionType` | `PendingSpecimenList`, `PendingControlList`, `TaskList`, `SettingWorkflowStatus`, `PurgeReport`, `TasklistIssueNotes`, `Other` |
| `DynamicFieldType` | `Lot`, `Instrument`, `FileUpload`, `Text`, `Checkbox`, `BufferKit`, `InstrumentAtRoot`, `ModulatingFlowPart1`, `Calculated` |
| `Roles` | `DENERD`, `ADMIN_ASSISTANT`, `CONSULTANT`, `DEV_TECH`, `LAB_ASSISTANT`, `SUPPORT_USER`, `TECHNOLOGIST`, `VIEWER`, `SPECIALIST`, `AUTOMATION`, `LAB_DIRECTOR` |
| `SpecimenTypesForPendingList` | `SERUM`, `CSF`, `ALL` |
