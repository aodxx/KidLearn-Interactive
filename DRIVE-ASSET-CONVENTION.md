# Google Drive Asset Convention — KidLearn Interactive

Version: 0.1
Status: Phase 0.5 Foundation

## Workspace

Root folder: `KidLearn Interactive`

Existing top-level folders:
- `01-Learning-Assets`
- `02-Interactive-Content`
- `03-Teacher-Resources`

## Recommended Learning Asset Structure

```text
01-Learning-Assets/
  p4/
    science/
      solar-system/
        images/
        audio/
        video/
        worksheets/
  p5/
```

Create deeper folders only when assets actually exist; avoid empty folder sprawl.

## File Naming

Use lowercase ASCII machine-friendly file names in Drive when practical:

```text
<grade>-<subject>-<topic>-<purpose>-<sequence>.<ext>
```

Examples:
- `p4-science-solar-cover-01.webp`
- `p4-science-solar-diagram-01.webp`
- `p4-science-mercury-icon-01.webp`
- `p4-science-solar-explanation-01.mp3`

Thai titles/descriptions may be stored in content metadata even when filenames are machine-friendly.

## Asset Metadata

Application content should use an asset record instead of scattering raw Drive links:

```json
{
  "id": "asset-p4-sci-solar-cover-01",
  "driveFileId": "...",
  "type": "image",
  "title": "ภาพปกภารกิจระบบสุริยะ",
  "alt": "ภาพดวงอาทิตย์และดาวเคราะห์",
  "gradeId": "p4",
  "subjectId": "science-p4",
  "topicId": "solar-system",
  "purpose": "cover",
  "status": "active"
}
```

## Rules

- Do not use the filename as the only learner-facing title.
- Do not store large binaries in Google Sheets.
- Do not hard-code arbitrary Drive sharing URLs inside individual module source files.
- Keep application UI assets separate from lesson/content media where practical.
- Replace an asset by updating its metadata/reference deliberately; avoid silently changing learning meaning under an existing ID.
- Record useful alt/description text for instructional images.

## First LearnQuest Asset IDs

Reserve logical IDs:
- `asset-p4-sci-solar-cover-01`
- `asset-p4-sci-solar-diagram-01`
- `asset-p4-sci-mercury-01`
- `asset-p4-sci-venus-01`
- `asset-p4-sci-earth-01`
- `asset-p4-sci-mars-01`

Actual Drive files may be added during Phase 1 content preparation.
