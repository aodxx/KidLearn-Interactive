# KidLearn Interactive

Interactive learning hub for primary learners (initial focus: Grade 4-5 / ป.4-ป.5).

## Product idea

KidLearn Interactive is a personal learning web app project, not a school LMS. It has two modes:

1. **Learn Mode** — public learning content, no login required.
2. **Assessment Mode** — lightweight pre-created learner identity required; stores assessment scores.

## Architecture

- Frontend: GitHub Pages
- Backend/API: Google Apps Script
- Data: Google Sheets
- Media storage: Google Drive
- Interactive activities: modular plugin/template architecture

## Project documents

- `PRD.md` — product requirements and scope
- `ARCHITECTURE.md` — technical architecture and boundaries
- `CONTRIBUTING.md` — team workflow and collaboration rules
- `MODULE-SPEC.md` — contract for adding interactive modules
- `PROGRESS.md` — current implementation status and next work

## First interactive template

**LearnQuest** — a reusable multi-stage interactive learning mission that can combine content, multiple choice, matching, drag-and-drop, and a summary stage.

## Google Drive workspace

Project media and content assets are stored separately from code in a dedicated `KidLearn Interactive` Drive folder with folders for learning assets, interactive content, and teacher resources.

## Status

Project foundation / Phase 0.
