# Contributing — KidLearn Interactive

## Purpose

This repository is designed for collaboration between people and AI coding agents. The project direction is controlled by the repository documents, not by assumptions made inside individual tasks.

## Source of truth order

1. `PRD.md` — product intent and scope
2. `ARCHITECTURE.md` — technical boundaries
3. `MODULE-SPEC.md` — interactive module contract
4. `PROGRESS.md` — current state and next approved work
5. Code/tests

When documents conflict, stop expanding scope and align the documents first.

## Team workflow

Before implementing:
1. Read the five core documents.
2. Identify whether the change belongs to Core, Backend, Content, or an Interactive Module.
3. Avoid modifying unrelated areas.
4. Reuse existing contracts before inventing new ones.

During implementation:
- Keep modules isolated.
- Do not store secrets in the repository.
- Do not hard-code Google Sheet IDs, Drive IDs, Apps Script deployment URLs, API keys, or personal learner data in committed source files.
- Use configuration placeholders and documented setup steps.
- Add tests for shared/core behavior where practical.

Before delivery:
- Run available tests/build checks.
- Fix failures caused by the change.
- Update `PROGRESS.md`.
- Update architecture/module docs if a contract changed.
- Ensure no temporary files, debug dumps, local credentials, or generated junk are committed.

## Areas of ownership

### Core frontend
Navigation, mode switching, shared layout, accessibility, API client, module registry.

### Interactive modules
Self-contained activity experiences following `MODULE-SPEC.md`.

### Apps Script backend
API routing, validation, identity checks, score persistence, Sheet/Drive integration.

### Content
Lesson/activity definitions and sample content; content must not redefine core behavior.

### Documentation
Architecture decisions, setup guides, progress, and module contracts.

## Change discipline

A new activity type should normally be implemented as a new module rather than by adding conditionals to the core app.

A new subject or lesson should normally be content/configuration, not a code fork.

A new grade should normally be data/configuration, not a new frontend application.

## Definition of Done

A change is done only when:
- It matches the PRD.
- It respects architecture boundaries.
- It does not introduce secrets or personal data into Git.
- Existing relevant checks pass.
- Documentation reflects material behavior changes.
- Another developer/agent can understand what changed from the repository alone.
