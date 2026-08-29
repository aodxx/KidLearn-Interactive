# Architecture — KidLearn Interactive

## System Context

```text
Learner / Content Operator
        |
        v
 GitHub Pages Frontend
        |
        v
 Google Apps Script API
      /     \
     v       v
Google Sheets  Google Drive
```

## Frontend responsibilities
- Render Learn Mode and Assessment Mode.
- Load lesson/activity definitions through API or approved static config.
- Run interactive modules through a module registry.
- Never expose write credentials or write directly to Sheets.

## Apps Script responsibilities
- Public read endpoints for published learning content.
- Assessment identity lookup/verification.
- Score submission validation.
- Controlled access to Sheets and Drive metadata.
- API response normalization and error handling.

## Google Sheets responsibilities
Structured application records only: learners, lessons, activity metadata, assessments, scores, configuration.

## Google Drive responsibilities
Binary/media assets and content resources: images, audio, video, PDFs, worksheets, and source media.

## Interactive module architecture

```text
Core App
  |
  +-- Module Registry
        |
        +-- learnquest
        +-- multiple-choice
        +-- matching
        +-- drag-drop
        +-- future modules...
```

Core owns navigation, session/mode state, API access, common UI primitives, scoring interface, and module loading.

Modules own their rendering, interaction rules, local state, validation, and result payload according to `MODULE-SPEC.md`.

## Recommended repository structure

```text
/
├─ README.md
├─ PRD.md
├─ ARCHITECTURE.md
├─ CONTRIBUTING.md
├─ MODULE-SPEC.md
├─ PROGRESS.md
├─ docs/
├─ frontend/
│  ├─ index.html
│  ├─ assets/
│  ├─ styles/
│  ├─ scripts/
│  └─ modules/
├─ apps-script/
│  ├─ Code.gs
│  └─ appsscript.json
├─ content/
│  ├─ schemas/
│  └─ samples/
└─ tests/
```

## Boundary rules
1. Interactive modules must not call Google Sheets directly.
2. Drive file IDs/URLs must be treated as content references, not hard-coded business logic.
3. Core UI must not contain subject-specific lesson logic.
4. New modules must register through the module registry and satisfy the module contract.
5. Data schemas should be forward-compatible with additional grades, subjects, and activity types.
6. Assessment identity is lightweight identity verification, not formal authentication.
