# Interactive Module Specification

Version: 0.2

## Goal

Allow KidLearn Interactive to grow as a hub where new interactive learning experiences can be added without rewriting the core application.

All modules must also follow `DESIGN-SYSTEM.md`, `UX-FLOWS.md`, and `ASSESSMENT-RULES.md` when applicable.

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

## Required Module UX Contract

Every learner-facing module must provide or inherit the following states where relevant:

1. **Title / context** — learner knows what activity is open.
2. **Instruction state** — short explanation of what to do.
3. **Ready state** — interaction can begin.
4. **Active state** — clear controls and progress where useful.
5. **Feedback state** — Learn Mode may show immediate feedback.
6. **Completion state** — activity clearly communicates completion.
7. **Retry/reset behavior** — when supported, outcome must be predictable.
8. **Error/recovery state** — recoverable failures must offer a clear next action.

Assessment-capable modules must additionally respect:
- no correctness disclosure during assessment by default
- explicit completion before final score submission
- result contract consistency
- no direct persistence from the module

## Shared UI Rule

Modules should reuse Core shared components/tokens rather than create isolated visual systems.

Examples:
- buttons
- progress indicator
- instruction panel
- choice cards
- feedback panels
- result cards
- loading/error states

A module may introduce interaction-specific UI, but common controls should remain visually and behaviorally consistent with `DESIGN-SYSTEM.md`.

## Mobile & Accessibility Requirements

- Touch-friendly for mobile/tablet.
- Minimum essential touch target approximately 44×44 CSS px.
- Keyboard-accessible where practical.
- Clear success/error feedback.
- Do not use color as the only feedback signal.
- Respect reduced-motion preferences where practical.
- Essential instructions cannot exist only inside images.

## Technical Safety Requirements

- No external secrets.
- No direct database access.
- Safe cleanup on `unmount()`.
- Must not leak state into another activity.
- Should be reusable across subjects and grades.

## Learn vs Assessment Behavior

The same module may behave differently based on `context.mode` without duplicating the module.

### Learn Mode
- may allow retries
- may show immediate correctness
- may show hints/explanations
- score is local/non-official unless another feature explicitly persists it

### Assessment Mode
- default: no correctness feedback while in progress
- produces an official result only after completion
- Core/backend owns final submission
- must follow `ASSESSMENT-RULES.md`

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

LearnQuest must expose mission progress and a clear stage transition so the learner always knows where they are in the mission.

## Adding a new module

1. Define its learning interaction and data schema.
2. Define its UX states against this specification.
3. Add the module under the modules directory.
4. Register it with the module registry.
5. Add sample content.
6. Test it in Learn Mode.
7. If assessment-capable, test its result contract and Assessment Mode behavior.
8. Verify mobile/touch behavior.
9. Document any new schema/contract.
10. Update `PROGRESS.md`.

## Compatibility rule

Breaking changes to the module contract require a schema/version change and migration plan. Existing lesson content should not silently stop working after a new module release.
