# Learner Identity Model — KidLearn Interactive

Version: 0.1
Status: Phase 0.5 Foundation

## Goal

Provide enough identity confidence for personal assessment score tracking without creating heavy account-management friction.

## V1 Learner Record

Recommended fields:
- learnerId — internal stable ID, e.g. `learner_0004`
- learnerCode — short code entered by learner, e.g. `KL-004`
- displayName — name shown for confirmation
- gradeId — optional content/assessment filtering
- pinHash — optional/null in initial V1
- status — active/inactive
- createdAt
- updatedAt

Do not use personal email as a required learner identifier.

## Verification Flow

1. Learner enters `learnerCode`.
2. Backend checks an active learner record.
3. Frontend shows only enough information to confirm identity, normally displayName + learnerCode.
4. Learner taps `นี่คือฉัน`.
5. Backend/Core creates a short assessment session identity.

## Optional PIN Upgrade

If accidental/intentional identity confusion becomes a real problem, add a 4-6 digit PIN verification step.

PIN should not be stored as plaintext in Google Sheets.

This upgrade must not require redesigning score records because scores reference `learnerId`, not a login method.

## Session Guidance

Assessment identity should be remembered only for an appropriate limited session. Provide a visible way to switch/clear learner identity on shared devices.

Do not silently assume the previous learner on a shared phone/tablet without showing current identity before an assessment.

## Example Records

```json
[
  {
    "learnerId": "learner_0001",
    "learnerCode": "KL-001",
    "displayName": "น้องต้น",
    "gradeId": "p4",
    "pinHash": null,
    "status": "active"
  },
  {
    "learnerId": "learner_0002",
    "learnerCode": "KL-002",
    "displayName": "น้องฟ้า",
    "gradeId": "p5",
    "pinHash": null,
    "status": "active"
  }
]
```

## Security Boundary

This is lightweight identification for a personal learning product. It is not high-assurance authentication and must not be described as suitable for formal high-stakes examinations.
