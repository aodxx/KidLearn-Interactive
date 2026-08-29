# PRD — KidLearn Interactive

Version: 0.1
Status: Foundation

## 1. Product Vision

KidLearn Interactive is a personal interactive-learning hub focused initially on learners in Grade 4-5 (ป.4-ป.5). The system helps create, publish, reuse, and extend interactive learning experiences while providing a lightweight assessment mode that can record scores.

This is **not** intended to be a school-wide LMS and does not assume institutional teacher/student administration.

## 2. Core Goals

1. Make interactive learning content easy to access without login.
2. Provide a separate assessment mode with lightweight learner identity verification.
3. Store assessment scores reliably in Google Sheets.
4. Store images, audio, video, worksheets, and supporting media in Google Drive.
5. Support new interactive activity types through reusable modules/templates rather than hard-coding every activity into the core app.
6. Keep the repository understandable and safe for multi-person and AI-agent collaboration.

## 3. Target Users

### Learner
- Initial target: ป.4-ป.5.
- Uses Learn Mode freely.
- Uses Assessment Mode with a pre-created learner identity.

### Content/Admin Operator
- Creates and manages lessons, activities, assets, learner accounts, and assessments.
- This is a personal project role, not a school administrator role.

### Developer / AI Agent
- Builds the core, backend, templates, and interactive modules while following project contracts and documentation.

## 4. Product Modes

### 4.1 Learn Mode
- No login required.
- All published learning content is accessible.
- User can browse by grade, subject, lesson, or activity.
- No permanent learner score is required.

### 4.2 Assessment Mode
- Login/identity check required.
- Learner accounts are created beforehand.
- Avoid heavy password-based authentication.
- Verification should be sufficient to distinguish learners in normal use without creating school-grade identity friction.
- V1 stores the total score for each completed assessment.

## 5. Initial Grade Scope

- ประถมศึกษาปีที่ 4
- ประถมศึกษาปีที่ 5

Data structures must allow more levels later without redesigning the core.

## 6. Initial Content Structure

Grade → Subject → Lesson → Activity

Each activity is driven by structured content and an interactive module.

## 7. Interactive Hub Requirement

The application must operate as an extensible Interactive Learning Hub.

Interactive activities must not be tightly coupled to a single lesson. Each activity type should be implemented as a reusable module or template with a documented contract.

Expected future module types include:
- Multiple Choice
- True / False
- Matching
- Drag & Drop
- Ordering
- Flashcards
- Fill in the Blank
- Timed Challenge
- Exit Ticket
- Interactive Story
- Diagram/Labeling
- Math Manipulative

## 8. First Interactive Activity — LearnQuest

`LearnQuest` is the first reference template and architecture proof.

A LearnQuest contains multiple stages, for example:
1. Intro/content stage
2. Multiple-choice checkpoint
3. Matching challenge
4. Drag-and-drop challenge
5. Summary/result stage

The same template can be reused for different subjects by replacing structured content and assets.

Example:
- Science ป.4: Solar System Mission
- Math ป.5: Fraction Mission
- Thai: Parts of Speech Mission
- English: Vocabulary Mission

## 9. Assessment

V1 assessment requirements:
- Associate an assessment with a learner identity.
- Submit a final total score.
- Store attempt timestamp.
- Prevent accidental anonymous score submission.
- Permit future expansion to per-question analytics without requiring a new architecture.

## 10. Data Storage

### Google Sheets
Primary structured data store.

Planned logical tables/sheets:
- Learners
- Grades
- Subjects
- Lessons
- Activities
- Assessments
- Scores
- AppConfig

### Google Drive
Media/object storage for:
- Images
- Audio
- Video
- PDFs / worksheets
- Interactive-content source assets
- Teacher/content resources

Do not store large binary media inside Google Sheets or the Git repository unless it is a small application-owned static asset.

## 11. Technical Architecture

Frontend:
- GitHub Pages
- HTML/CSS/JavaScript
- Mobile-first responsive UI

Backend:
- Google Apps Script Web App/API

Data:
- Google Sheets

Media:
- Google Drive

Communication:
- Frontend → Apps Script API → Google Sheets / Google Drive

Frontend must not directly write to Google Sheets.

## 12. UX Principles

- Designed for children in ป.4-ป.5 first.
- Large readable typography and touch targets.
- Clear progress and feedback.
- Avoid unnecessarily complex menus.
- Learn Mode should feel immediate and frictionless.
- Assessment Mode should make identity status obvious before starting.
- Interactive content should feel playful without becoming visually distracting.

## 13. Team Development Requirements

The repository must keep these documents current:
- `PRD.md`
- `ARCHITECTURE.md`
- `CONTRIBUTING.md`
- `MODULE-SPEC.md`
- `PROGRESS.md`

Every new interactive module must follow `MODULE-SPEC.md`.

Core system changes and module changes should remain separable wherever possible.

## 14. Out of Scope for V1

- Full school LMS
- Official school roster synchronization
- Complex role/permission hierarchy
- Parent portal
- Attendance system
- Formal exam proctoring
- High-assurance identity verification
- Complex ranking/leaderboards
- Full per-question learning analytics

## 15. MVP / V1

V1 must deliver:
1. GitHub Pages shell.
2. Learn Mode.
3. Assessment Mode identity entry.
4. Grade 4-5 content navigation.
5. Apps Script API foundation.
6. Google Sheets schema.
7. Google Drive asset strategy.
8. Interactive module registry/loader.
9. First LearnQuest template.
10. At least one working LearnQuest learning activity.
11. Assessment score submission and storage.
12. Basic result screen.

## 16. Success Criteria

The foundation is successful when:
- A learner can open a lesson without logging in.
- A learner can run a reusable interactive activity.
- A new activity module can be added without modifying unrelated modules.
- A known learner can enter Assessment Mode and submit a score.
- Score data reaches Google Sheets through Apps Script.
- Project media can be referenced from the designated Drive workspace.
- A new developer or AI Agent can understand the project structure and begin work from repository documentation alone.
