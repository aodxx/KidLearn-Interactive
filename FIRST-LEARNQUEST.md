# First LearnQuest Prototype

Version: 0.1
Status: Phase 0.5 Review Draft

## Prototype

**ระดับชั้น:** ป.4  
**วิชา:** วิทยาศาสตร์  
**ชื่อ:** ภารกิจสำรวจระบบสุริยะ

## Purpose

This prototype is not intended to become a large science unit. Its purpose is to prove the Interactive Hub architecture with one compact learner experience that combines reusable modules.

## Learning Objectives

After completing the mission, the learner should be able to:
1. Identify the Sun as the center of the solar system model used in the lesson.
2. Recognize major planet names.
3. Identify Mercury as the planet closest to the Sun.
4. Arrange a small selected set of planets in correct order from the Sun.

## Mission Structure

### Stage 1 — เปิดภารกิจ
Type: content/intro

Content:
- Mission title and illustration.
- Short instruction: "ออกเดินทางสำรวจระบบสุริยะ แล้วผ่านความท้าทายให้ครบทุกด่าน"

### Stage 2 — สำรวจระบบสุริยะ
Type: content

Content:
- One clear solar-system illustration.
- Short learner-friendly explanation.
- Highlight the Sun and selected planets used later in the activities.

Keep text concise; the purpose is preparation for interaction, not a long article.

### Stage 3 — คำถามนักสำรวจ
Module: `multiple-choice`

Example:
"ดาวเคราะห์ดวงใดอยู่ใกล้ดวงอาทิตย์ที่สุด?"

Choices:
- โลก
- ดาวพุธ
- ดาวอังคาร
- ดาวเสาร์

Correct: ดาวพุธ

Learn Mode feedback:
- Correct: short positive feedback + explanation.
- Incorrect: allow retry, optionally hint to look at the planet order.

### Stage 4 — จับคู่ดาวเคราะห์
Module: `matching`

Prototype pairs should use only 3-4 pairs to keep mobile interaction simple.

Example pairs:
- ดาวพุธ → ใกล้ดวงอาทิตย์ที่สุด
- โลก → ดาวเคราะห์ที่เราอาศัยอยู่
- ดาวอังคาร → มักเรียกว่า "ดาวเคราะห์สีแดง"

### Stage 5 — เรียงตำแหน่งดาวเคราะห์
Module: `drag-drop`

Task:
Drag selected planets into order from nearest to farther from the Sun.

Prototype set:
1. ดาวพุธ
2. ดาวศุกร์
3. โลก
4. ดาวอังคาร

Do not require all eight planets in the first interaction prototype.

### Stage 6 — สรุปภารกิจ
Type: summary

Show:
- Mission completed.
- Local Learn Mode score/progress where applicable.
- One short recap of what was learned.
- Actions: revisit lesson / choose another activity.

## Assessment Reuse

The same underlying modules may be reused in Assessment Mode, but assessment behavior differs:
- no immediate correctness disclosure by default
- no retry based on correctness during the attempt
- final result returned to Core
- total score persisted only after explicit submission

The learning mission and assessment do not need to be visually identical compositions even when sharing modules/content concepts.

## Asset Needs

For Phase 1 prototype:
1. Solar-system cover/hero image.
2. Solar-system learning diagram.
3. Optional small planet images/icons for Mercury, Venus, Earth and Mars.

All content media should be registered through the Drive asset convention rather than hard-coded ad hoc URLs.

## Definition of Done

The first LearnQuest prototype is successful when:
- it runs end to end on mobile
- all stages use the shared activity shell
- multiple-choice, matching and drag/drop are reusable modules
- content is separate from module implementation
- progress is understandable
- Learn Mode feedback follows UX rules
- the same assessment-capable modules can return the standard score contract
