# Design System — KidLearn Interactive

Version: 0.1
Status: Phase 0.5 Foundation

## 1. Design Direction

KidLearn Interactive should feel bright, friendly, modern, and playful without becoming visually noisy. It is a learning tool for Grade 4-5 learners, so clarity always wins over decoration.

Design keywords:
- Friendly
- Curious
- Playful
- Clear
- Safe
- Encouraging
- Modular

Avoid:
- LMS/admin-dashboard visual language on learner screens
- Dense forms
- Tiny controls
- Excessive gradients/animations
- Red-heavy error states that feel punitive

## 2. Mode Identity

The two product modes must be visually distinguishable.

### Learn Mode
Character: open, exploratory, playful.

### Assessment Mode
Character: focused, calm, clear about identity and score submission.

Mode distinction should use label, iconography, page title, and contextual styling — never color alone.

## 3. Color Tokens

Use semantic tokens in code rather than hard-coded page-specific colors.

Suggested starting palette:

```text
--color-primary: #4F46E5
--color-secondary: #06B6D4
--color-accent: #F59E0B
--color-success: #16A34A
--color-warning: #D97706
--color-danger: #DC2626
--color-bg: #F8FAFC
--color-surface: #FFFFFF
--color-text: #172033
--color-muted: #64748B
--color-border: #D8E0EA
```

These are initial tokens and may be tuned after visual prototype review.

## 4. Typography

Thai readability is critical.

Recommended font family class:
- Thai/Latin sans-serif with clear numerals and strong mobile readability.

Baseline scale:
- Display: 32-36px
- H1: 28-32px
- H2: 24px
- H3: 20px
- Body: 17-18px
- Supporting: 15-16px
- Button: 16-18px, medium/semibold

Avoid essential learner-facing text below 15px.

## 5. Spacing

Use a consistent 4px base spacing scale:

```text
4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48
```

Learner screens should favor generous vertical separation over compact dashboard density.

## 6. Shape & Elevation

- Cards: rounded corners, approximately 16-20px.
- Primary buttons: 14-18px radius.
- Interactive answer options: large card-like hit areas.
- Shadows: light and functional; avoid floating-everything design.

## 7. Touch Targets

- Minimum target: 44×44 CSS px.
- Preferred learner primary action: 48-56px height.
- Choice cards should allow tapping the whole option, not only radio controls/text.

## 8. Core Components

Phase 1 should establish reusable versions of:

1. App Header
2. Mode Badge
3. Grade Card
4. Subject Card
5. Lesson Card
6. Activity Card
7. Primary Button
8. Secondary Button
9. Choice Card
10. Progress Indicator
11. Instruction Panel
12. Feedback Panel
13. Result Card
14. Empty State
15. Loading State
16. Error/Retry State
17. Identity Confirmation Card
18. Assessment Submission State

New modules should reuse these shared components where possible.

## 9. Feedback Language

### Correct
Encouraging and brief.
Examples:
- ถูกต้อง!
- เยี่ยมมาก
- ทำได้ดี

### Incorrect in Learn Mode
Avoid shame or hard failure language.
Examples:
- ลองอีกครั้ง
- ใกล้แล้ว ลองดูคำใบ้
- ยังไม่ใช่คำตอบนี้

### Assessment Mode
Feedback behavior is controlled by assessment rules. Do not reveal correctness during an assessment unless the assessment configuration explicitly permits it.

## 10. Animation

Animation should communicate state, not decorate every interaction.

Allowed examples:
- Button press feedback
- Card selection
- Progress transition
- Correct/completion feedback
- Drag target response

Guidelines:
- Typical duration: 150-300ms.
- Avoid long blocking celebration sequences.
- Respect reduced-motion preferences.

## 11. Illustration & Media

Google Drive is the main content media workspace.

Learner media should:
- Support the lesson objective.
- Be readable on phone screens.
- Include alt text/description metadata where possible.
- Avoid embedding important instructions only inside images.

## 12. Accessibility Baseline

- Sufficient text/background contrast.
- Do not communicate correct/incorrect only by color.
- Visible keyboard focus for keyboard-capable activities.
- Semantic buttons rather than clickable generic containers.
- Labels for icons used as controls.
- Reduced motion support where practical.

## 13. Responsive Breakpoints

Design mobile-first.

Reference ranges:
- Mobile: < 640px
- Tablet: 640-1023px
- Desktop: >= 1024px

Do not design separate products for each breakpoint; components should adapt.

## 14. Visual Prototype Gate

Before Phase 1 UI implementation is considered stable, review at least these prototype screens:

1. Home / two-mode selection
2. Learn Mode grade/subject browsing
3. Lesson screen
4. LearnQuest mission cover
5. Interactive challenge
6. Assessment learner identification
7. Assessment start/submit
8. Result state

Visual tuning may change tokens, but must not invalidate the documented UX architecture without updating this file.
