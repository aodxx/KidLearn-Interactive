# UX Flows & Sitemap — KidLearn Interactive

Version: 0.1
Status: Phase 0.5 Foundation

## 1. UX Goal

KidLearn Interactive must feel like a learning playground, not a school administration system. The interface is designed first for Grade 4-5 learners using phones and tablets.

## 2. Product Entry

The home screen presents two clearly separated paths:

1. **เรียนรู้ (Learn Mode)** — open access, no login.
2. **ประเมินความเข้าใจ (Assessment Mode)** — lightweight learner identity required.

The visual distinction between the two modes must remain obvious throughout the experience.

## 3. Learn Mode Flow

```text
Home
  → Learn Mode
    → Grade (ป.4 / ป.5)
      → Subject
        → Unit / Topic
          → Lesson
            → Learning content
            → Interactive activity
            → Local result / encouragement
            → Continue / choose another activity
```

### Learn Mode rules
- No login wall.
- Published content should be reachable within a few taps.
- Do not ask for learner identity just to learn.
- Activities may provide feedback and local results, but Learn Mode does not create an official assessment score.
- The learner can leave an activity and return to content navigation safely.

## 4. Assessment Mode Flow

```text
Home
  → Assessment Mode
    → Identify learner
      → Confirm identity summary
        → Available assessments
          → Assessment introduction
            → Start
              → Interactive assessment
                → Submit
                  → Result summary
                    → Return to assessment list
```

### Identity flow
V1 uses a pre-created learner identity with low-friction verification.

Recommended V1 interaction:
1. Enter/select learner code.
2. System shows learner display name.
3. Learner confirms "นี่คือฉัน".
4. Optional short PIN may be added later if misuse is observed.

Do not design email/password registration for V1.

### Assessment UX rules
- Identity must be visible before assessment starts.
- Starting an assessment is an explicit action.
- Submission requires an explicit final confirmation when answers can no longer be changed.
- Network/storage failure must never look like a successful score submission.
- V1 displays total score only; architecture may retain richer local result data for future expansion.

## 5. LearnQuest Flow

```text
Mission Cover
  → Mission Intro
  → Learning Stage
  → Checkpoint
  → Interactive Challenge
  → Interactive Challenge
  → Mission Summary
```

A stage must always show where the learner is in the mission.

Recommended structure for the first Grade 4 sample:

**ภารกิจสำรวจระบบสุริยะ**

1. เปิดภารกิจ — visual introduction.
2. สำรวจ — short illustrated content.
3. คำถามนักสำรวจ — multiple choice.
4. จับคู่ดาวเคราะห์ — matching.
5. จัดตำแหน่ง — drag/drop.
6. สรุปภารกิจ — completion state.

The same LearnQuest shell must be reusable with different subject content.

## 6. Sitemap

```text
/
├── learn/
│   ├── grades/
│   ├── subjects/
│   ├── units/
│   ├── lessons/
│   └── activity/:activityId
│
├── assessment/
│   ├── identify/
│   ├── available/
│   ├── activity/:assessmentId
│   └── result/
│
└── info/
    └── about/
```

This is an information architecture, not a requirement for literal file paths.

## 7. Navigation

### Learner navigation
Keep primary learner navigation small:
- Home
- เรียนรู้
- ประเมิน

Avoid exposing admin/developer navigation in the learner UI.

### Activity navigation
Interactive activities use a focused activity shell instead of the full site navigation when practical.

Required actions:
- Back/Exit
- Progress where relevant
- Primary action appropriate to the activity

## 8. Required UI States

Every major screen must plan for:
- Loading
- Ready
- Empty
- Offline/network failure
- Recoverable error
- Success/completed

Assessment submission additionally requires:
- Saving/submitting
- Save failed
- Submitted successfully

## 9. Mobile-first constraints

- Primary actions reachable comfortably on small screens.
- Avoid horizontal scrolling for normal content.
- Avoid dense tables in learner-facing screens.
- Instructions should be short and visually separated from the activity.
- Do not place essential controls only in hover states.

## 10. Phase 0.5 Exit Criteria

UX foundation is ready for implementation when:
- Learn and Assessment flows are agreed.
- Sitemap is stable enough for the first shell.
- LearnQuest has an end-to-end learner flow.
- Required loading/error/success states are defined.
- Design system tokens and components are documented separately.
