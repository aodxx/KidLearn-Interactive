# KidLearn Interactive

Interactive learning hub for primary learners, initially focused on ป.4-ป.5.

## Product modes

1. **Learn Mode** — public learning content, no login required.
2. **Assessment Mode** — lightweight pre-created learner identity; score persistence will be connected through Apps Script.

## Architecture

- Frontend: GitHub Pages
- Backend/API: Google Apps Script
- Structured data: Google Sheets
- Media: Google Drive
- Interactive activities: modular registry/template architecture

## Phase 1 prototype

The repository now contains a static-first learner prototype:

- Home: Learn / Assessment mode selection
- Grade and subject browsing
- Grade 4 Science lesson: ระบบสุริยะ
- LearnQuest: ภารกิจสำรวจระบบสุริยะ
- Reusable modules: `multiple-choice`, `matching`, `drag-drop`, `learnquest`
- Assessment entry placeholder (Backend is intentionally deferred to Phase 2)

GitHub Pages entry point: `index.html`

## Validate

```bash
npm test
```

GitHub Actions also runs the same validation on pushes and pull requests to `main`.

## Project contracts

Read these before changing architecture or UI:

- `PRD.md`
- `ARCHITECTURE.md`
- `DESIGN-SYSTEM.md`
- `VISUAL-DESIGN-REVIEW.md`
- `UX-FLOWS.md`
- `WIREFRAMES.md`
- `CONTENT-MODEL.md`
- `MODULE-SPEC.md`
- `DATABASE-SCHEMA.md`
- `CONTRIBUTING.md`
- `PROGRESS.md`

## Google Drive / Database

Media and content assets live in the dedicated `KidLearn Interactive` Drive workspace.

Native database workbook: `KidLearn Interactive - Database v1`.

## Status

**Phase 1 — Frontend + Interactive Prototype: in progress.**

Prototype implementation is committed; deployment/mobile verification remains before Phase 1 can be closed.
