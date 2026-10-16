---
title: "Content Types & Attributes"
tagline: "Define new kinds of records and their fields without code, then evolve them safely as your work changes."
category: "Asset core"
specs:
  - "Admin-defined record types, categories and fields"
  - "Units, tolerances and out-of-range flags"
  - "Versioned schemas with migration preview"
  - "Type inheritance to avoid duplicated fields"
  - "Starter packs for NDT, coating, welding, insulation"
status: core
featured: false
order: 109
industryUse:
  - industry: "Insulation & CUI"
    text: "Extend a base Pipe type into Insulated Pipe with cladding, insulation material and CUI risk fields, and calculate remaining life from measured thickness and corrosion rate."
  - industry: "Coating & blasting"
    text: "Set up coating system, surface preparation grade and DFT range as typed attributes with units and tolerances, so readings outside specification are flagged the moment they are entered."
  - industry: "Welding & fabrication"
    text: "Define spool, weld and component types with the fields your QA plan needs, and have each new weld automatically create its ITP from a default template."
  - industry: "Mining & resources"
    text: "Register conveyors, chutes, tanks and mobile plant as their own record types, each with its own register page, fields and status names that match how the site talks."
---

Content types are the configuration layer behind every register in the platform. Admins define new kinds of records — assets, staff, vehicles, equipment, consumables, scopes of work and more — and each one gets its own navigation entry and register page, generated from configuration rather than code.

Beneath each content type, **item categories and item types** describe exactly what gets recorded: field types, required and expiry flags, references to other records, units and tolerances. Schemas are versioned, can inherit from a parent type, and can carry conditional and calculated fields, so your data model grows with the work without breaking existing records.

## Key features

- Content types with their own icon, navigation entry, register page and drill-down detail
- Item categories and item types with a full attribute schema, including components and assemblies
- One field-type set shared with the form designer: text, numbers, dates, dropdowns, measurements, GPS, QR, photos, video, audio, repeating tables and scoped references
- Shared attributes registry so common fields are reused across types
- Units and tolerances on measurements, with out-of-range flags
- Conditional and calculated fields using safe, sandboxed expressions — for example remaining life from thickness and corrosion rate
- Schema versioning with draft, publish, deprecate and a migration preview showing the impact on existing assets and completed inspections
- Type inheritance, so a child type adds to its parent instead of duplicating it
- Custom status names per item type, mapped to standard lifecycle states for consistent reporting
- Auto-create ITPs or inspections from default templates, and sync approved inspection values back to asset fields
- Starter packs for NDT and CUI, welding, insulation and coating to get new projects running quickly

## Works with

- [Asset Hierarchy & Registers](/modules/assets/) — defines every asset's fields
- [Form & Template Designer](/modules/forms/) — the same field types as inspection templates
- [Inspections, ITPs & Hold Points](/modules/inspections/) — auto-created per item type
- [Rules & Validation Engine](/modules/rules/) — uses tolerances and out-of-range flags
- [Terminology & Localisation](/modules/terminology/) — rename types and statuses per market
