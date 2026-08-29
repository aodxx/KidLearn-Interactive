# Visual Design Review — KidLearn Interactive

Version: 0.1
Status: Approved foundation for Phase 1

## Decision

Phase 0.5 visual direction is approved for implementation.

The learner-facing visual language is **Playful Learning Cards + Mission UI**.

This means:
- friendly and energetic, but not preschool-like;
- large touchable cards and clear typography;
- one obvious primary action per screen;
- lightweight illustration/decorative shapes, never at the expense of reading;
- Learn Mode may feel exploratory and playful;
- Assessment Mode must feel calmer, more focused, and trustworthy.

## Representative visual mockups

- `design/mockups/home-mode-selection.svg`
- `design/mockups/learnquest-challenge.svg`
- `design/mockups/assessment-result.svg`

These mockups are visual references, not production code.

## Approved visual principles

### 1. Learner-first hierarchy

Primary information appears before decoration. Learners should understand where they are, what they need to do, and what happens next within a few seconds.

### 2. Mode distinction

Learn Mode:
- open and playful;
- allows hints/retry where content permits;
- exploration is encouraged.

Assessment Mode:
- visibly labeled;
- identity remains clear where relevant;
- avoids distracting celebration during answering;
- final success is shown only after backend score confirmation.

### 3. Cards as the main interaction language

Use cards for:
- mode choices;
- grade/subject choices;
- lessons;
- answer choices;
- activity missions;
- results and feedback.

Cards should be large, spaced, and tappable as a whole.

### 4. Color direction

Keep the semantic palette from `DESIGN-SYSTEM.md` as the starting implementation palette.

Primary indigo communicates exploration/learning.
Cyan supports assessment/status distinction.
Green communicates successful completion.
Amber is reserved for hints/warnings.
Red is reserved for real errors or destructive actions, not ordinary wrong answers in Learn Mode.

### 5. Typography

Thai mobile readability is a hard requirement.
Production implementation should use a Thai-capable sans-serif font with strong numerals and readable medium/bold weights.

Do not reduce learner body text below the documented design-system baseline merely to fit more content on one screen.

### 6. Motion

Motion is functional only:
- tap/select feedback;
- activity transition;
- progress movement;
- correct/complete acknowledgment;
- drag target affordance.

No long decorative intro or blocking celebration is required in V1.

## Screen-by-screen review

### Home / Mode Selection
Approved direction:
- two unmistakable large mode cards;
- Learn Mode first;
- Assessment Mode explicitly states identity/score implication;
- avoid login language on Learn Mode.

### Learn Browse
Approved direction:
- grade selection above subjects;
- subjects shown as friendly cards;
- avoid admin-dashboard tables.

### Lesson
Approved direction:
- lesson objective and media first;
- activity/mission CTA visually separated;
- lesson should not become a long dense document.

### LearnQuest
Approved direction:
- mission framing;
- stage/progress always visible during challenge;
- child knows how far remains;
- child can exit without accidental score submission.

### Assessment Identity
Approved direction:
- learner code lookup;
- show only enough learner information to confirm identity;
- explicit confirmation before session starts;
- do not require conventional email/password login in V1.

### Assessment Result
Approved direction:
- clear numeric score;
- persistent status text saying whether score was saved;
- saved-success message only after backend confirmation;
- route back to learning is available.

## V1 component visual contract

Phase 1 should implement shared components before individual modules invent their own styling:
- AppHeader
- ModeBadge
- Card
- PrimaryButton
- SecondaryButton
- ProgressBar
- ChoiceCard
- InstructionPanel
- FeedbackPanel
- IdentityCard
- ResultCard
- LoadingState
- ErrorRetryState

Interactive modules should compose these shared components wherever possible.

## Contradiction review

Reviewed together:
- `PRD.md`
- `UX-FLOWS.md`
- `WIREFRAMES.md`
- `DESIGN-SYSTEM.md`
- `CONTENT-MODEL.md`
- `ASSESSMENT-RULES.md`
- `IDENTITY-MODEL.md`
- `MODULE-SPEC.md`
- `FIRST-LEARNQUEST.md`
- `DRIVE-ASSET-CONVENTION.md`

No blocking product contradiction was found.

Important implementation boundary:
Learn Mode feedback can be immediate and instructional; Assessment Mode feedback must follow assessment configuration and must not accidentally disclose correctness while the attempt is active.

## Phase 0.5 exit criteria

Approved:
- product mode UX;
- sitemap and critical flows;
- low-fidelity wireframes;
- visual direction;
- baseline design tokens/components;
- content hierarchy;
- assessment behavior;
- learner identity approach;
- interactive-module UX contract;
- first LearnQuest scope;
- Google Drive asset convention.

Phase 0.5 is therefore ready to close and Phase 1 may begin using these documents as implementation contracts.
