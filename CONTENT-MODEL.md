# Content Model — KidLearn Interactive

Version: 0.1
Status: Phase 0.5 Foundation

## 1. Purpose

Define how learning content is structured so lessons and interactive activities can grow without redesigning the application.

## 2. Hierarchy

```text
Grade
  → Subject
    → Unit
      → Lesson
        → Content Blocks
        → Activities
```

V1 may omit visible Unit navigation when a subject is small, but the data model should reserve the concept.

## 3. Core Entities

### Grade
Examples: ป.4, ป.5

Minimum fields:
- id
- name
- order
- status

### Subject
Minimum fields:
- id
- gradeId
- name
- iconRef
- description
- order
- status

### Unit
Minimum fields:
- id
- subjectId
- title
- description
- order
- status

### Lesson
Minimum fields:
- id
- unitId
- title
- summary
- objectives[]
- coverAssetRef
- order
- status
- activities[]

### Content Block
Supported baseline block types:
- text
- image
- video
- callout
- example
- key-point
- activity-link

Content blocks should be data-driven and renderer-based where practical.

### Activity
Minimum fields:
- id
- lessonId
- module
- title
- instructions
- modeSupport
- config
- assetRefs[]
- status

## 4. Asset References

Large lesson media belongs in Google Drive.

Content should reference assets through stable metadata rather than copying Drive URLs throughout module source code.

Recommended logical asset record:

```json
{
  "id": "asset-solar-cover",
  "type": "image",
  "driveFileId": "...",
  "title": "ภาพระบบสุริยะ",
  "alt": "ภาพแสดงดวงอาทิตย์และดาวเคราะห์",
  "usage": "lesson-cover"
}
```

The asset resolver is responsible for producing a usable URL/source for the frontend.

## 5. Separation of Content and Interaction

Subject content must not be hard-coded inside module implementations.

Example:
- `matching` knows how matching works.
- Content data defines which planets and descriptions are matched.

This allows the same module to support Science, Math, Thai, English, and future subjects.

## 6. Lesson Objectives

Each lesson should declare 1-5 concise objectives.

Example:
```json
{
  "objectives": [
    "บอกชื่อดาวเคราะห์สำคัญได้",
    "เรียงลำดับดาวเคราะห์จากดวงอาทิตย์ได้"
  ]
}
```

Objectives are useful for future assessment mapping even though V1 only stores total scores.

## 7. Publishing States

Recommended content states:
- draft
- ready
- published
- archived

Only `published` content appears in Learn Mode.

## 8. LearnQuest Content

LearnQuest is a composition layer, not a special subject data format.

Example:

```json
{
  "id": "learnquest-solar-p4-01",
  "module": "learnquest",
  "title": "ภารกิจสำรวจระบบสุริยะ",
  "gradeId": "p4",
  "subjectId": "science-p4",
  "lessonId": "solar-system",
  "stages": [
    {"type":"content","ref":"solar-intro"},
    {"type":"activity","ref":"solar-choice-01"},
    {"type":"activity","ref":"solar-matching-01"},
    {"type":"activity","ref":"solar-drag-01"},
    {"type":"summary"}
  ]
}
```

## 9. Content Validation

Before content is published, validate at minimum:
- required IDs exist
- referenced module exists
- referenced assets exist
- title/instructions are present
- scoring config is valid when assessment-capable
- no dangling lesson/activity references

## 10. Future Compatibility

The model should support later additions such as:
- difficulty
- curriculum tags
- learning objective tags
- prerequisites
- estimated duration
- per-question analytics
- content versions

Do not require these fields in V1.
