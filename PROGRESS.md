# Progress — KidLearn Interactive

## Current phase

Phase 0.5 — UX, Design & Content Foundation

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

## Phase 0.5 — Completed foundation documents

- [x] `UX-FLOWS.md` — Learn/Assessment flows, sitemap, LearnQuest learner flow, UI states
- [x] `DESIGN-SYSTEM.md` — visual direction, tokens, typography, spacing, components, responsive/accessibility baseline
- [x] `CONTENT-MODEL.md` — Grade → Subject → Unit → Lesson → Content/Activity architecture
- [x] `ASSESSMENT-RULES.md` — learner identity, attempts, score submission, feedback and failure rules
- [x] `MODULE-SPEC.md` v0.2 — module UX contract and Learn/Assessment behavior
- [x] `WIREFRAMES.md` — low-fidelity wireframes for 8 critical learner screens
- [x] `FIRST-LEARNQUEST.md` — first Grade 4 science LearnQuest scope
- [x] `IDENTITY-MODEL.md` — concrete V1 lightweight learner identity model
- [x] `DRIVE-ASSET-CONVENTION.md` — Drive folder/file/metadata convention

## Phase 0.5 — Remaining review gate

1. [ ] Review visual direction using the wireframes and design system together.
2. [ ] Check Phase 0.5 documents for contradictions discovered during review.
3. [ ] Approve/adjust the first LearnQuest prototype content.
4. [ ] Mark Phase 0.5 approved before production UI implementation begins.

## Critical screens now wireframed

1. Home / Learn vs Assessment
2. Learn Mode grade + subject browsing
3. Lesson screen
4. LearnQuest mission cover
5. Interactive challenge shell
6. Assessment learner identification
7. Assessment ready/start + submit state
8. Result screen

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

Asset naming and metadata rules are defined in `DRIVE-ASSET-CONVENTION.md`.

## Phase 1 — Blocked until Phase 0.5 approval

Goal after approval: produce the first running GitHub Pages shell and prove the interactive-module architecture before building the full backend.

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

## Phase 2 preview

- Google Sheets schema
- Apps Script API foundation
- lightweight learner identity verification
- assessment session flow
- score persistence
- Drive asset resolver/reference strategy

## Guardrails

Do not start full Phase 1 production UI before the Phase 0.5 wireframe/design review is approved.

Do not add full LMS features, school-wide administration, attendance, parent portal, formal proctoring, or complex authentication unless the PRD is explicitly changed first.
