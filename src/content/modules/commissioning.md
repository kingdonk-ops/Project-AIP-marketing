---
title: "Commissioning"
tagline: "System commissioning checklists, weighted readiness and a gated commission action for process plant and MEP."
category: "Inspection & quality"
specs:
  - "Systems and subsystems over the asset tree"
  - "Pre-functional and functional checklists"
  - "Risk-weighted readiness score"
  - "Commission action gated on checks and sign-offs"
  - "Sealed mechanical completion certificates"
status: roadmap
featured: false
order: 114
industryUse:
  - industry: "Oil, gas & LNG"
    text: "Group tags into systems from the P&IDs, run pre-functional checks by tag set, and only release ready-for-commissioning once category A punch items and blocking NCRs are closed."
  - industry: "Power & utilities"
    text: "Track readiness for each switchboard, pump set and cooling system with weighting for critical checks, so a high percentage can't hide an outstanding protection test."
  - industry: "Mining & resources"
    text: "Commission a new processing circuit system by system, with credentialled sign-offs and automatic re-test when equipment is changed after it was signed off."
  - industry: "Construction & building"
    text: "Run MEP functional checklists across building services, log commissioning issues, and feed system readiness straight into the handover status for each asset."
---

Commissioning groups assets into systems and subsystems, generates pre-functional and functional checklists from templates, keeps an issue log, and calculates a readiness score for each system. It is built on the same inspection, form and workflow engines used across the platform, so checklists behave like any other inspection.

The **commission action is gated**: a system can't be commissioned until required checks are complete, no blocking NCRs are open and sign-offs are made by people with valid credentials. Readiness is weighted by check type and risk, so critical items are never hidden behind a flat percentage.

## Key features

- Systems and subsystems built over the asset tree, with include and exclude membership
- Pre-functional and functional checklist templates
- Readiness score weighted by check type and risk
- Gated commission action, with the gate defined as a rule set
- Punch category rules deciding which open items block each gate
- Gate certificates such as mechanical completion and ready for commissioning, issued as sealed reports
- System boundary markup on P&IDs or isometrics, linked to assets
- Bulk check completion by tag set, with evidence required
- Re-open and re-test when an asset changes after sign-off
- Commissioning issue log and notifications for assignments, blocking issues, readiness and gate results

## Works with

- [Inspections, ITPs & Hold Points](/modules/inspections/) — checklists are inspections
- [Rules & Validation Engine](/modules/rules/) — gate evaluation
- [Certificates, Competency & Calibration Gate](/modules/eligibility/) — credentialled sign-offs
- [Report Engine & Published Records](/modules/report-engine/) — gate certificates
- [Handover, Data Books & Submissions](/modules/handover/) — readiness feeds handover status
