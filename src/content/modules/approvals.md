---
title: "Workflow & Approvals"
tagline: "One status model and approval engine shared by every record type, with one audit trail behind every decision."
category: "Documents & records"
specs:
  - "Configurable states, transitions and guards"
  - "Sequential, parallel and conditional approval routes"
  - "Approvals inbox with batch actions"
  - "Delegation, escalation and authority limits"
  - "Re-authentication on critical sign-offs"
  - "Tamper-evident decision history"
status: core
featured: false
order: 115
industryUse:
  - industry: "Welding & fabrication"
    text: "Route weld inspection reviews through the QC inspector and then the client, with a re-authentication step before a hold point is released for the next fabrication stage."
  - industry: "Civil & infrastructure"
    text: "Approve variations and purchase orders through value-threshold bands, so larger amounts automatically go to the right authority, with out-of-office cover recorded on the record."
  - industry: "Oil, gas & LNG"
    text: "Run document approvals that stamp the approved PDF as a new version, and automatically invalidate open approvals when a newer revision is uploaded."
  - industry: "Power & utilities"
    text: "Require the approver of an electrical test record to hold a current competency, and test a new approval route against sample records before it goes live."
---

Workflow & Approvals is the single status and approval engine used by every record type — inspections, ITP sign-offs, issues and NCRs, documents, purchase orders, variations, invoices and submittals. Everything shares one status model and one audit trail.

Workflows are defined as configuration: states, transitions, the role required, guard rules and side effects, per record type and optionally per project. **Approval routes** add ordered approver steps, delegation, thresholds and escalation. Definitions are versioned, so records already in progress stay on the version they started with.

## Key features

- Configurable states and transitions per record type, with project-specific statuses
- Approval routes with sequential, parallel and conditional steps, due times, reminders and escalation
- Approvers as a user, role or team
- Approvals inbox with batch actions, inline document preview and route visualisation
- Guard rules checked on the server, including a qualification check on approver steps
- Re-authentication or PIN on critical transitions such as hold point release and final sign-off
- Dated delegation that shows who acted on whose behalf
- Authority matrix with value-threshold bands for commercial approvals
- Instance timeline with delegate, reassign, recall and resubmit
- Dry-run simulator to test a route before activating it
- Preset templates for inspection review, issue lifecycle, document approval with stamp, PO, variation and invoice approval
- Tamper-evident decision history

## Works with

- [Rules & Validation Engine](/modules/rules/) — transition guards
- [Inspections, ITPs & Hold Points](/modules/inspections/) — review chains
- [Document Library & Control](/modules/documents/) — document approval and stamping
- [Certificates, Competency & Calibration Gate](/modules/eligibility/) — qualified approvers
- [Audit Trail & Activity](/modules/audit/) — every transition logged
