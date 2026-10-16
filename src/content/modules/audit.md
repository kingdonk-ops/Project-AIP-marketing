---
title: "Audit Trail & Activity"
tagline: "A tamper-evident record of who did what and when, on every asset and record, that can be verified independently."
category: "Reporting, search & AI"
specs:
  - "Append-only, tamper-evident audit log"
  - "Activity feed per asset and record"
  - "Project timeline across every module"
  - "Reason-for-change on controlled records"
  - "Independent verification of the record"
  - "Legal holds and recycle bin"
status: core
featured: false
order: 141
industryUse:
  - industry: "Oil, gas & LNG"
    text: "Sample overridden hold points and expiry bypasses first during a turnaround audit, with every exception flagged and traceable to the person who made it."
  - industry: "Civil & infrastructure"
    text: "Assemble evidence for a claim or dispute from a verifiable timeline of inspections, approvals and changes, and place a legal hold on the affected project."
  - industry: "Welding & fabrication"
    text: "See exactly who changed a weld inspection result after submission, when, and why — with the earlier value preserved rather than overwritten."
  - industry: "Power & utilities"
    text: "Open a unit's activity feed to see everything that happened to it and every component beneath it, from construction through to service."
---

Every significant event across the platform is captured with who did it, when, and what changed — before and after. The record is append-only: corrections are added as new entries that supersede the old ones, never edits, and both remain visible.

The history is shown as an activity tab on each asset, inspection and project, a roll-up for an asset and everything beneath it, and a project-wide timeline. Because entries are chained together, the record can be verified independently of the platform, making it a dependable evidence source for audits, claims and disputes.

## Key features

- Append-only log with actor, timestamp and before and after values
- Tamper-evident chaining so any alteration can be detected
- Activity tab on assets, inspections and projects, with a link to the source record from any event
- Project timeline filterable by module, person, asset subtree and date
- Asset roll-up showing who touched a unit and everything beneath it
- Field-level history with reason-for-change on controlled records such as inspection results and certificates
- Flags on override, force-unlock and on-behalf-of events so auditors can sample exceptions first
- Separate security audit stream for sign-in, permission changes and exports
- Offline verifier and signed export for checking the record without trusting the platform
- Legal hold manager and recycle bin with scheduled purge that respects legal holds

## Works with

- [E-Signatures & Tamper-Evident Records](/modules/signing/) — signed attestations
- [Comments, Mentions & Notifications](/modules/comments/) — events trigger notifications
- [Asset Hierarchy & Registers](/modules/assets/) — activity by asset subtree
- [Roles, Permissions & Teams](/modules/access/) — separate audit read and export permissions
