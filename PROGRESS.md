# Progress — KidLearn Interactive

## Current phase

Phase 1 — Ready to start

## Completed — Phase 0

- [x] Repository selected: `aodxx/KidLearn-Interactive`
- [x] Product direction defined
- [x] Two-mode model defined: Learn / Assessment
- [x] Initial grade scope defined: ป.4-ป.5
- [x] Google Apps Script + Google Sheets + Google Drive architecture defined
- [x] Interactive Hub/plugin direction defined
- [x] First reference activity selected: LearnQuest
- [x] Team collaboration rules documented
- [x] Interactive Module contract documented
- [x] Dedicated Google Drive workspace created

## Completed — Phase 0.5 UX, Design & Content Foundation

- [x] `UX-FLOWS.md`
- [x] `DESIGN-SYSTEM.md`
- [x] `CONTENT-MODEL.md`
- [x] `ASSESSMENT-RULES.md`
- [x] `MODULE-SPEC.md` v0.2
- [x] `WIREFRAMES.md`
- [x] `FIRST-LEARNQUEST.md`
- [x] `IDENTITY-MODEL.md`
- [x] `DRIVE-ASSET-CONVENTION.md`
- [x] `VISUAL-DESIGN-REVIEW.md`
- [x] Representative visual mockups under `design/mockups/`
- [x] Phase 0.5 review gate approved

## Completed — Phase 0.6 Google Sheets Data Foundation

- [x] `DATABASE-SCHEMA.md` defines the physical data model column-by-column
- [x] Stable primary-key convention defined; row numbers are not IDs
- [x] Foreign-key relationships documented
- [x] Module-specific configuration separated from core `Activities`
- [x] Composite activity stages separated into `ActivityStages`
- [x] Assessment definitions separated from runtime `Attempts`
- [x] Official `Scores` separated from attempts for history/idempotency
- [x] Google Drive asset registry defined via `Assets`
- [x] Learning-objective and tag bridge tables reserved for future analytics
- [x] Schema versioning and migration rules defined
- [x] Apps Script integrity responsibilities defined
- [x] Capacity guardrails and future database migration triggers documented
- [x] Native Google Sheet database created and placed in the project Drive workspace
- [x] 21 schema tabs created with frozen headers
- [x] Timezone set to `Asia/Bangkok`
- [x] Seed records created for schema metadata, ป.4/ป.5, initial modules, and public app config
- [x] Initial schema version locked at `1.0.0`

### Database workbook

Title: `KidLearn Interactive - Database v1`

Spreadsheet ID: `17Uw464IVDGj0a5Sv08gzby3satdN-fhiXx5pL1PgFyA`

Schema tabs:
1. `_Meta`
2. `Grades`
3. `Subjects`
4. `Units`
5. `Lessons`
6. `ContentBlocks`
7. `Activities`
8. `ActivityConfigs`
9. `ActivityStages`
10. `Assessments`
11. `Learners`
12. `Attempts`
13. `Scores`
14. `Assets`
15. `LearningObjectives`
16. `LessonObjectives`
17. `Tags`
18. `ContentTags`
19. `Modules`
20. `AppConfig`
21. `AuditLog`

## First content prototype

**ป.4 วิทยาศาสตร์ — ภารกิจสำรวจระบบสุริยะ**

Purpose: prove that one LearnQuest can combine learning content, multiple choice, matching and drag/drop under the same module contract.

See `FIRST-LEARNQUEST.md` for the scoped lesson and stages.

## Google Drive workspace

Root: `KidLearn Interactive`

Subfolders:
- `01-Learning-Assets`
- `02-Interactive-Content`
- `03-Teacher-Resources`
- Native database workbook: `KidLearn Interactive - Database v1`

Asset naming and metadata rules are defined in `DRIVE-ASSET-CONVENTION.md`.

## Phase 1 — Ready

Goal: produce the first running GitHub Pages shell and prove the interactive-module architecture before building the Apps Script integration.

Planned Phase 1 work:

1. Create frontend application shell.
2. Create Learn Mode landing/navigation.
3. Create Assessment Mode entry screen placeholder.
4. Implement shared design tokens/components.
5. Implement module registry/loader.
6. Implement baseline `multiple-choice` module.
7. Implement baseline `matching` module.
8. Implement baseline `drag-drop` module.
9. Implement first `LearnQuest` composite module.
10. Add the approved Grade 4 learning mission.
11. Add basic automated/static checks for module registration and content validity.

## Phase 1 implementation contract

Phase 1 UI must follow:
- `VISUAL-DESIGN-REVIEW.md`
- `DESIGN-SYSTEM.md`
- `UX-FLOWS.md`
- `WIREFRAMES.md`
- `MODULE-SPEC.md`
- `CONTENT-MODEL.md`
- `DATABASE-SCHEMA.md` for any data-shaped fixtures/interfaces

Production modules must not invent a separate design language or database contract without updating the shared documentation.

## Phase 2 preview — Backend Integration

- Apps Script API foundation
- sheet repository/data-access layer using header names, not fixed column numbers
- schema-version check on startup/admin migration operations
- lightweight learner identity lookup/verification
- assessment attempt/session flow
- idempotent score persistence
- Drive asset resolver/reference strategy
- content publishing/validation endpoints
- backup + migration utilities

## Guardrails

Do not add full LMS features, school-wide administration, attendance, parent portal, formal proctoring, or complex authentication unless the PRD is explicitly changed first.

Do not write Apps Script code that relies on spreadsheet row numbers as record identity.

Do not let interactive modules write directly to Google Sheets.
