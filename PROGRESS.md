# Progress — KidLearn Interactive

## Current phase

**Phase 1 — Frontend + Interactive Prototype (In progress)**

## Completed foundations

### Phase 0 — Product & Architecture
- [x] Product direction and two-mode model (Learn / Assessment)
- [x] GitHub Pages + Apps Script + Google Sheets + Google Drive architecture
- [x] Interactive Hub/plugin direction
- [x] Team collaboration contracts

### Phase 0.5 — UX, Design & Content
- [x] UX flows and 8 critical-screen wireframes
- [x] Design system and approved visual language: Playful Learning Cards + Mission UI
- [x] Content model and first LearnQuest scope
- [x] Assessment rules and lightweight identity model
- [x] Module UX/technical contract
- [x] Drive asset convention

### Phase 0.6 — Google Sheets Data Foundation
- [x] `DATABASE-SCHEMA.md` physical schema
- [x] Native Google Sheet database created
- [x] 21 schema tabs with stable IDs, relationships, versioning and migration rules
- [x] Schema version `1.0.0`
- [x] Seed Grade 4/5 and initial module registry

Database workbook: `KidLearn Interactive - Database v1`  
Spreadsheet ID: `17Uw464IVDGj0a5Sv08gzby3satdN-fhiXx5pL1PgFyA`

## Phase 1 — Implemented in prototype

- [x] Root `index.html` GitHub Pages entry point
- [x] Static-first frontend structure under `frontend/`
- [x] Shared Phase 1 design tokens/components in CSS
- [x] Home screen with Learn / Assessment separation
- [x] Learn Mode grade + subject navigation
- [x] Lesson screen for the first Grade 4 science prototype
- [x] Module registry/loader
- [x] `multiple-choice` module
- [x] `matching` module
- [x] `drag-drop` / ordering module with touch-friendly up/down fallback
- [x] `learnquest` composite module
- [x] Grade 4 Science — `ภารกิจสำรวจระบบสุริยะ`
- [x] LearnQuest progress and final local result
- [x] Assessment entry placeholder clearly marked as Backend Phase 2 work
- [x] Static module/content validation script under `tests/`
- [x] `.nojekyll` added for static GitHub Pages delivery

## Phase 1 — Verification still required before closure

- [ ] Confirm GitHub Pages is enabled from `main` / repository root and deployment succeeds
- [ ] Run/confirm `npm test` in an environment with repository access
- [ ] Mobile UX smoke test on the deployed site
- [ ] Verify Multiple Choice retry and feedback
- [ ] Verify Matching completion on touch-sized viewport
- [ ] Verify Drag/ordering on Android/iOS touch interaction
- [ ] Verify LearnQuest end-to-end navigation and exit behavior
- [ ] Check keyboard focus and reduced-motion baseline
- [ ] Fix any defects found during deployed review

> Note: the current execution environment could not clone GitHub over the local container network, so local `npm test` could not be executed from that environment. The validation script is committed and ready for CI/local execution.

## Phase 1 implementation contract

Phase 1 must continue to follow:
- `VISUAL-DESIGN-REVIEW.md`
- `DESIGN-SYSTEM.md`
- `UX-FLOWS.md`
- `WIREFRAMES.md`
- `MODULE-SPEC.md`
- `CONTENT-MODEL.md`
- `DATABASE-SCHEMA.md`

Interactive modules must remain data-driven and must not access Google Sheets directly.

## Phase 2 preview — Backend Integration

Only begin after Phase 1 deployed UX verification:
- Apps Script API foundation
- sheet repository/data-access layer using header names
- schema-version guard
- learner identity lookup/verification
- assessment attempt/session lifecycle
- idempotent score persistence
- Drive asset resolver
- content publishing/validation endpoints
- backup + migration utilities

## Guardrails

Do not add school-wide LMS features, attendance, parent portals, formal proctoring, or complex authentication unless the PRD is intentionally revised.

Do not use spreadsheet row numbers as record identity.

Do not show Assessment score-save success until Apps Script confirms persistence.
