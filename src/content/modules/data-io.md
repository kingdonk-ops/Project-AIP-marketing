---
title: "Data Import, Export & Backup"
tagline: "Get data in and out in bulk with validation and rollback, and keep a verifiable, no-lock-in exit path."
category: "Platform services"
specs:
  - "Excel and CSV import with dry run"
  - "Bulk create and update-by-key"
  - "Roll back a whole import batch"
  - "Export any register as Excel, CSV or JSON"
  - "Full organisation export with verification manifest"
  - "Tightly controlled, audited bulk exports"
status: core
featured: false
order: 151
industryUse:
  - industry: "Power & utilities"
    text: "Import a station's asset register from a spreadsheet, preview the resulting hierarchy and catch orphans and duplicate tags before anything is committed."
  - industry: "Welding & fabrication"
    text: "Bulk-update hundreds of existing weld and component records by key from a spreadsheet, and undo the whole batch if a column was mapped wrongly."
  - industry: "Civil & infrastructure"
    text: "Hand over a data book export for an asset subtree, with structured data, linked files and a checksummed manifest the asset owner can verify."
  - industry: "Insulation & CUI"
    text: "Export a client's full inspection history at contract end, complete with files and audit history, so nothing is locked in."
---

Data Import, Export & Backup gets data into and out of the platform in bulk. Spreadsheets are imported in the background with validation and a dry-run report before anything is committed, and a whole import batch can be rolled back if something isn't right. Imports can create new records or update existing ones by key.

Any register, or your whole organisation's data, can be exported as Excel, CSV or JSON, honouring permissions and field masking. A full export includes records, files and audit history with a verification manifest — your no-lock-in exit path. Because bulk export is sensitive, it is restricted, approved and logged. Legal hold is respected on every delete, overwrite and rollback.

## Key features

- Import wizard with template download, column mapping, dry run and row-level error report
- File size limits, validation and spreadsheet formula protection
- Asset tree import with parent resolution and a hierarchy preview that catches orphans and duplicate tags
- Update-by-key for bulk edits of existing assets, welds and components
- Import history with rollback of a whole batch
- Export any register or the whole organisation as Excel, CSV or JSON
- Export manifests with checksums and a documented schema per module
- Full exports restricted to admins, with step-up authentication, approval, expiring downloads and audit logging
- Handover data book export per asset subtree with linked files
- New modules join exports automatically

## Works with

- [Asset Hierarchy & Registers](/modules/assets/) — tree import and register exports
- [Handover, Data Books & Submissions](/modules/handover/) — data book exports
- [Organisations & Data Residency](/modules/organisations/) — full export on offboarding
- [Audit Trail & Activity](/modules/audit/) — every export logged
