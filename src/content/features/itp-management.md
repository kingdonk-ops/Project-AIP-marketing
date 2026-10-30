---
title: "ITP Management"
badge: "Core differentiator"
headline: "Inspection and Test Plans that enforce themselves"
summary: "Build ITPs from your approved plan, gate the work behind real hold and witness points, and collect every signature in sequence, so nobody blasts, coats or backfills over an uninspected step."
targetStandard: "ISO 9001 · AS/NZS ISO 9001 quality records"
order: 1
heroMetrics:
  - { value: "Hold", label: "Blocks downstream tasks" }
  - { value: "Witness", label: "Notice, attend or waive" }
  - { value: "Pinned", label: "Template revision per record" }
  - { value: "Sequential", label: "Multi-party sign-off" }
pillars:
  - title: "Digital hold and witness gates"
    status: core
    text: "Every ITP line carries a point type that changes how the system behaves. A hold point blocks the tasks that follow until it is released with a signed release-to-proceed. A witness point notifies the client with the agreed notice period and records a waiver automatically if nobody attends."
    points:
      - "Hold points lock downstream tasks, so coating can't start until the surface profile line is released"
      - "Witness notices with timers, reminders and a recorded waiver"
      - "Review and surveillance points, with surveillance sampled rather than mandatory on every item"
      - "Every override is flagged in the audit trail so auditors can sample exceptions first"
  - title: "Multi-party sign-off without a full licence"
    status: core
    text: "Client representatives and third-party inspectors sign off on reviewer seats, which don't need a full user licence. Each signature records who signed, when, and how strongly they were authenticated."
    points:
      - "Sign on site by PIN or magic link, with the authentication strength recorded"
      - "Inspector, supervisor and client review chain with reject, resend and re-inspect"
      - "Eligibility check before each sign-off: signer qualification, instrument calibration, material in date"
      - "Corrections are recorded as superseding entries, never silent edits"
  - title: "Automated MDR and handover dossier assembly"
    status: next
    text: "Completed ITP lines, certificates, NDT reports and coating records are already linked to the asset they belong to. The data book is assembled from that live evidence instead of being collated by hand at the end of the job."
    points:
      - "Data book / MDR per asset or system with a hyperlinked index"
      - "Client-specific MDR structures: folder numbering, document codes and naming rules"
      - "Each submission frozen as an immutable snapshot with a hash manifest"
      - "Reopening an NCR flips the related dossier item back to open"
relatedModules: ["inspections", "eligibility", "handover", "issues", "audit"]
sampleReport: "itp-signoff-log"
---

## Why a checklist isn't an ITP

Generic form tools record that a box was ticked. An ITP has to do more: it decides what work is allowed to happen next, who has to be there to see it, and what evidence the client receives at handover. Project AIP treats each ITP line as a gate in the work sequence, not a question on a form.

Acceptance criteria, point types and signatories come from your approved ITP and project specification. Project AIP enforces them; it doesn't replace them.
