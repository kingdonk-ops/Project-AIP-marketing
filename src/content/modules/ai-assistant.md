---
title: "AI Assistant"
tagline: "Ask plain-language questions of your inspection data, get cited answers, and let AI draft work that a person reviews and applies."
category: "Reporting, search & AI"
specs:
  - "Plain-language questions with cited answers"
  - "Answers respect each user's own permissions"
  - "Proposed changes applied only by a person"
  - "Certificate and MTR extraction with verification"
  - "NCR drafting from findings and photos"
  - "Per-organisation opt-in, usage view and kill switch"
status: roadmap
featured: false
order: 144
industryUse:
  - industry: "Oil, gas & LNG"
    text: "Ask which ITPs in an area are waiting on a hold point, or which RFIs on a piping unit are overdue, and get an answer that links to every record it used."
  - industry: "Welding & fabrication"
    text: "Extract heat numbers, grades and expiry dates from scanned material test reports, then have a person verify them before they feed traceability."
  - industry: "Coating & blasting"
    text: "Turn an inspector's findings and photos into a draft NCR with the asset, clause and evidence already filled in, ready for the inspector to approve."
  - industry: "Power & utilities"
    text: "Have an agent prepare a reinspection list for an outage from inspection history, using read-only tools, for the supervisor to review."
---

The AI Assistant lets people ask questions of their project data in plain language — for example, "which ITPs on Area 3 are waiting on a hold point?" — and answers from inspection, ITP and NCR history scoped to the asset. Every answer cites the records it used and shows the filters, counts and time range behind it, so users can confirm the question was understood.

AI never changes records on its own. Anything it suggests, such as creating a task or reassigning an RFI, is a proposal a person reviews and applies under their own identity, with the normal audit trail. The assistant only sees what the user is allowed to see, and it sits behind organisation-level controls designed to support governance reviews.

## Key features

- Chat over project data with citations and source links on every answer
- Answer cards showing the filters, record counts and time range used
- Proposed changes with a clear diff, applied only by a person with confirmation
- Bounded agents for multi-step tasks such as inspection summaries, read-only by default
- Certificate and MTR extraction from scans, with human verification
- NCR and corrective action drafting from inspection findings and photos
- Retrieved document and email content treated as untrusted, screened for prompt injection
- Domain question test set run whenever the AI configuration changes
- Per-organisation opt-in, kill switch and usage and data-flow view
- Logging of every prompt and tool call

## Works with

- [Search & Saved Views](/modules/search/) — retrieval behind every answer
- [Roles, Permissions & Teams](/modules/access/) — answers limited to what the user can see
- [Traceability: Components, Materials & Certificates](/modules/traceability/) — verified extraction from certificates
- [Issues, NCRs & Corrective Actions](/modules/issues/) — AI-drafted NCRs for approval
- [Audit Trail & Activity](/modules/audit/) — every run recorded on the timeline
