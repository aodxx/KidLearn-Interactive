# Assessment Rules — KidLearn Interactive

Version: 0.1
Status: Phase 0.5 Foundation

## 1. Purpose

Define clear V1 behavior for Assessment Mode before implementation so score handling, learner identity, feedback, and retry behavior do not change unpredictably during development.

## 2. Identity

Assessment Mode requires a pre-created learner record.

V1 identity flow:
1. Learner enters or selects a learner code.
2. System retrieves the matching learner record.
3. System shows display name and basic identity summary.
4. Learner explicitly confirms the identity before starting.

V1 does not require email/password registration.

A short PIN may be added later without changing the core learner identity model.

## 3. Score Storage

V1 persists:
- learnerId
- assessmentId
- score
- maxScore
- percentage (derived or stored)
- submittedAt
- attemptId
- status

V1 product reporting only requires the final total score.

The runtime/module contract may generate richer local answer data, but it is not required to be persisted in V1.

## 4. Attempts

Default V1 policy:
- Multiple attempts are allowed unless the assessment configuration disables them.
- Every submitted attempt receives its own attemptId and timestamp.
- Previous attempts are not overwritten.
- Result views may show the latest attempt by default.

Supported future reporting can choose best/latest/first attempt without losing history.

## 5. Incomplete Attempts

An activity that is exited before final submission is not an official score submission.

V1 does not require server-side resume of partially completed assessments.

## 6. Correctness Feedback

### Learn Mode
Immediate feedback may be shown after each interaction.

### Assessment Mode
Default behavior:
- Do not reveal the correct answer during the assessment.
- Do not show per-question correctness before final submission.
- After final submission, V1 may show total score only.

Assessment configuration may later permit richer review behavior.

## 7. Submission

Official score persistence occurs only after explicit final submission.

Required states:
1. Ready to submit
2. Submitting/saving
3. Submission succeeded
4. Submission failed

The UI must not show success until the Apps Script backend confirms score storage.

If submission fails:
- Keep the learner informed.
- Allow retry without redoing the completed activity when safely possible.
- Do not silently discard the score.

## 8. Time Limits

No time limit is required by default in V1.

An activity/module may support a timer, but Assessment Mode only enforces a timer when the assessment configuration explicitly enables it.

## 9. Passing Threshold

A pass/fail threshold is optional.

Default V1 result is numeric score, not pass/fail.

Example future config:
```json
{
  "passingPercent": 70
}
```

## 10. Score Calculation

Each assessment-capable module returns:

```json
{
  "completed": true,
  "score": 8,
  "maxScore": 10
}
```

For composite LearnQuest assessment:
- child stage scores are aggregated by LearnQuest/Core according to configuration
- the backend receives the final total and maximum score

No module writes directly to Google Sheets.

## 11. Assessment Configuration

Recommended configuration shape:

```json
{
  "id": "assessment-solar-p4-01",
  "activityRef": "learnquest-solar-p4-01",
  "allowMultipleAttempts": true,
  "showScoreAfterSubmit": true,
  "showAnswersAfterSubmit": false,
  "timeLimitSeconds": null,
  "status": "published"
}
```

## 12. Integrity Level

KidLearn Interactive uses lightweight identity verification, not formal examination security.

V1 explicitly does not promise:
- anti-cheating controls
- high-assurance authentication
- locked browser
- remote proctoring
- official exam identity verification

## 13. Duplicate Submission Protection

The backend should treat `attemptId` as an idempotency key where practical so retrying the same network submission does not accidentally create duplicate official score rows.

## 14. Privacy / Data Minimization

Store only learner information needed for identification and score association.

Avoid collecting unnecessary sensitive personal information.

## 15. Phase 0.5 Decisions Locked for Phase 1

Unless this document is intentionally revised:
- Learn Mode remains anonymous.
- Assessment Mode uses pre-created learner identities.
- V1 official reporting uses total scores.
- Assessment does not reveal answers while in progress.
- Submission success requires backend confirmation.
- Multiple attempts are supported by data design.
