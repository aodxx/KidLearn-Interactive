# Low-Fidelity Wireframes — KidLearn Interactive

Version: 0.1
Status: Phase 0.5 Review Draft

These wireframes define hierarchy and interaction only. They are not final visual designs.

## 1. Home — Choose Mode

```text
┌──────────────────────────────┐
│ KidLearn Interactive         │
│ เรียนให้สนุก เข้าใจให้จริง   │
│                              │
│ ┌──────────────────────────┐ │
│ │   เรียนรู้               │ │
│ │   เปิดเรียนได้ทันที      │ │
│ │   [ เริ่มเรียน ]         │ │
│ └──────────────────────────┘ │
│                              │
│ ┌──────────────────────────┐ │
│ │   ประเมินความเข้าใจ      │ │
│ │   ยืนยันตัวตนก่อนเริ่ม    │ │
│ │   [ เข้าสู่การประเมิน ] │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
```

Priority: learner understands the difference between modes immediately.

## 2. Learn — Grade & Subject

```text
┌──────────────────────────────┐
│ ← เรียนรู้                   │
│ เลือกระดับชั้น               │
│ [ ป.4 ]    [ ป.5 ]          │
│                              │
│ วิชาของ ป.4                  │
│ ┌────────┐ ┌────────┐        │
│ │ วิทย์  │ │ คณิต   │        │
│ └────────┘ └────────┘        │
│ ┌────────┐ ┌────────┐        │
│ │ ไทย    │ │ อังกฤษ │        │
│ └────────┘ └────────┘        │
└──────────────────────────────┘
```

## 3. Lesson Screen

```text
┌──────────────────────────────┐
│ ← วิทยาศาสตร์ ป.4           │
│ [ภาพปก]                      │
│ ระบบสุริยะ                   │
│ เราจะเรียนรู้อะไร            │
│ • รู้จักดาวเคราะห์           │
│ • เรียงลำดับดาวเคราะห์ได้   │
│                              │
│ [เนื้อหาสั้น/ภาพ/วิดีโอ]    │
│                              │
│ ┌──────────────────────────┐ │
│ │ ภารกิจสำรวจระบบสุริยะ    │ │
│ │ 5 ด่าน                    │ │
│ │ [ เริ่มภารกิจ ]          │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
```

## 4. LearnQuest Mission Cover

```text
┌──────────────────────────────┐
│ × ออกจากภารกิจ       ด่าน 0/5│
│                              │
│       [ภาพภารกิจ]            │
│                              │
│ ภารกิจสำรวจระบบสุริยะ       │
│ สำรวจดาวเคราะห์และพิชิต     │
│ ความท้าทายให้ครบทุกด่าน     │
│                              │
│ สิ่งที่ต้องทำ                │
│ • สำรวจ                     │
│ • ตอบคำถาม                  │
│ • จับคู่                    │
│ • ลากและวาง                 │
│                              │
│ [ เริ่มภารกิจ ]             │
└──────────────────────────────┘
```

## 5. Interactive Challenge Shell

```text
┌──────────────────────────────┐
│ × ออก           ด่าน 2/5    │
│ ████████░░░░░░              │
│                              │
│ คำถามนักสำรวจ               │
│ ดาวเคราะห์ใดอยู่ใกล้         │
│ ดวงอาทิตย์ที่สุด?            │
│                              │
│ ┌──────────────────────────┐ │
│ │ โลก                      │ │
│ └──────────────────────────┘ │
│ ┌──────────────────────────┐ │
│ │ ดาวพุธ                   │ │
│ └──────────────────────────┘ │
│ ┌──────────────────────────┐ │
│ │ ดาวอังคาร                │ │
│ └──────────────────────────┘ │
│                              │
│ [ ตรวจคำตอบ ]               │
└──────────────────────────────┘
```

Learn Mode after answer may show an inline feedback panel and retry/continue.

## 6. Assessment Identity

```text
┌──────────────────────────────┐
│ ← ประเมินความเข้าใจ         │
│                              │
│ ก่อนเริ่ม บอกเราว่าคุณคือใคร │
│                              │
│ รหัสผู้เรียน                 │
│ [______________]             │
│                              │
│ [ ค้นหา ]                    │
│                              │
│ ┌──────────────────────────┐ │
│ │ พบผู้เรียน               │ │
│ │ น้องต้น                  │ │
│ │ รหัส KL-004              │ │
│ │ [ นี่คือฉัน ]            │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
```

Do not expose unnecessary personal information.

## 7. Assessment Ready / Submit

Ready:
```text
┌──────────────────────────────┐
│ ประเมินความเข้าใจ            │
│ ผู้เรียน: น้องต้น KL-004     │
│                              │
│ ระบบสุริยะ                   │
│ คะแนนเต็ม 10                 │
│ ไม่มีการเฉลยระหว่างทำ        │
│                              │
│ [ เริ่มทำแบบประเมิน ]       │
└──────────────────────────────┘
```

Final submit:
```text
┌──────────────────────────────┐
│ พร้อมส่งคำตอบแล้วหรือยัง?    │
│                              │
│ เมื่อตกลง ระบบจะบันทึกคะแนน  │
│                              │
│ [ กลับไปตรวจ ]              │
│ [ ส่งคำตอบและบันทึกคะแนน ] │
└──────────────────────────────┘
```

## 8. Result Screen

```text
┌──────────────────────────────┐
│          ทำสำเร็จ            │
│                              │
│           8 / 10             │
│                              │
│ บันทึกคะแนนเรียบร้อยแล้ว ✓   │
│                              │
│ [ กลับหน้าประเมิน ]         │
│ [ ไปเรียนรู้เพิ่มเติม ]      │
└──────────────────────────────┘
```

Never show "บันทึกเรียบร้อย" until backend confirmation succeeds.

## Cross-Screen Interaction Rules

- One clear primary action per decision point.
- Learner-facing screens avoid dense toolbars.
- Important mode/identity status remains visible when relevant.
- Back/exit behavior should not accidentally submit an assessment.
- All asynchronous states must show understandable status text.
- Error states always include a recovery action when possible.

## Visual Prototype Next

These wireframes are the layout contract for the first visual mockup. Final colors, illustration style, icon family and component appearance are governed by `DESIGN-SYSTEM.md` and should be reviewed before production UI is considered stable.
