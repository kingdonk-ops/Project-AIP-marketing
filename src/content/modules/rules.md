---
title: "Rules & Validation Engine"
tagline: "Define business rules once to check data, guard workflow steps and trace spec requirements to evidence."
category: "Inspection & quality"
specs:
  - "Rules checked on the server, never trusted client-side"
  - "Block or warn on workflow transitions"
  - "Versioned rule sets with test cases"
  - "Ready-made inspection completeness rule packs"
  - "Requirements register linked to evidence"
status: core
featured: false
order: 111
industryUse:
  - industry: "Coating & blasting"
    text: "Block submission of a coating inspection until every DFT reading is present and within the specified range, and the gauge used is in calibration on the day of the test."
  - industry: "Welding & fabrication"
    text: "Require NDT results to be recorded and the inspector to be qualified for the method before a weld inspection can be approved, with any waiver reasoned and audited."
  - industry: "Power & utilities"
    text: "Capture clauses from the specification as requirements, convert them to rules, and see a coverage matrix showing which clauses have passing evidence before handover."
  - industry: "Civil & infrastructure"
    text: "Prevent approval while critical issues remain open, and preview how many existing records would fail before a new project rule set is switched on."
---

The rules engine is one place to define the business rules that check your data and guard your workflows. Rules are stored as simple expressions with a target record, a message and a severity — block or warn — and are used for field validation, workflow guards, report pre-flight checks and bulk validation runs.

Rules are always evaluated on the server in a sandbox, so results can't be bypassed from a device. Rule sets are **versioned and frozen on publish**, so any past run can be reproduced, and **time-aware** — a certificate that was valid on the test day still passes that historical record.

## Key features

- Rules as data: target record, expression, message, severity and trigger
- Workflow transition guards, for example no open critical issues before approval
- Versioned rule sets per organisation or project, with project and scope overrides
- Test panel with sample records and saved test cases before publishing
- Impact preview showing how many existing records would fail on activation
- Time-aware evaluation as at each record's event date
- Rule packs for inspection completeness: NDT readings present, DFT within range, hold points signed, instrument calibrated, inspector qualified
- Requirements register capturing clauses from specs and contracts, convertible into rules
- Requirement-to-evidence coverage matrix
- Waiver workflow with reason, expiry and audit trail, plus notifications for failures and changes

## Works with

- [Workflow & Approvals](/modules/approvals/) — guards on transitions
- [Form & Template Designer](/modules/forms/) — field validation
- [Certificates, Competency & Calibration Gate](/modules/eligibility/) — validity checks
- [Report Engine & Published Records](/modules/report-engine/) — pre-flight before generation
- [Commissioning](/modules/commissioning/) — gate rule sets
