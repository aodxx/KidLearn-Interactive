# Interactive Module Specification

Version: 0.1

## Goal

Allow KidLearn Interactive to grow as a hub where new interactive learning experiences can be added without rewriting the core application.

## Module contract

Every module must declare at minimum:

```js
{
  id: "matching",
  name: "Matching",
  version: "1.0.0",
  supportedModes: ["learn", "assessment"],
  schemaVersion: "1"
}
```

A module should expose a lifecycle similar to:

```js
mount(container, activity, context)
unmount()
getResult()
reset()
```

## Context supplied by Core

Core may provide:
- current mode (`learn` or `assessment`)
- learner session when applicable
- shared UI helpers
- asset resolver
- locale
- completion callback
- score/report callback

Modules must not read or write Google Sheets directly.

## Result contract

V1 minimum result:

```js
{
  completed: true,
  score: 8,
  maxScore: 10
}
```

Modules may return richer local data, but Core determines what is persisted.

## Content contract

Interactive content must be data-driven. Example:

```json
{
  "module": "multiple-choice",
  "title": "ระบบสุริยะ",
  "prompt": "ดาวเคราะห์ดวงใดอยู่ใกล้ดวงอาทิตย์ที่สุด?",
  "choices": ["โลก", "ดาวพุธ", "ดาวอังคาร", "ดาวเสาร์"],
  "correctIndex": 1,
  "points": 1
}
```

Subject-specific content belongs in content data, not in module source code.

## Required module qualities

- Touch-friendly for mobile/tablet.
- Keyboard-accessible where practical.
- Clear success/error feedback.
- No external secrets.
- No direct database access.
- Safe cleanup on `unmount()`.
- Must not leak state into another activity.
- Should be reusable across subjects and grades.

## LearnQuest reference template

LearnQuest is a composite experience that sequences several stages under one mission.

Example definition:

```json
{
  "module": "learnquest",
  "title": "ภารกิจระบบสุริยะ",
  "stages": [
    { "type": "content", "contentRef": "solar-intro" },
    { "type": "multiple-choice", "activityRef": "solar-q1" },
    { "type": "matching", "activityRef": "solar-match" },
    { "type": "drag-drop", "activityRef": "solar-order" },
    { "type": "summary" }
  ]
}
```

LearnQuest should orchestrate modules; it should not duplicate the internal implementation of each child activity.

## Adding a new module

1. Define its learning interaction and data schema.
2. Add the module under the modules directory.
3. Register it with the module registry.
4. Add sample content.
5. Test it in Learn Mode.
6. If assessment-capable, test its result contract.
7. Document any new schema/contract.
8. Update `PROGRESS.md`.

## Compatibility rule

Breaking changes to the module contract require a schema/version change and migration plan. Existing lesson content should not silently stop working after a new module release.
