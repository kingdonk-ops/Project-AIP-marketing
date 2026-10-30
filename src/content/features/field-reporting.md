---
title: "Field Reporting"
badge: "Offline capture"
headline: "Capture in the pipe rack, report before you leave site"
summary: "Inspectors record readings, photos and observations with no signal. Records stay provisional until they sync, and approved inspections become client-ready PDF reports without a night of copy and paste."
targetStandard: "Client report templates · branded PDF output"
order: 2
heroMetrics:
  - { value: "Offline", label: "Capture with no signal" }
  - { value: "Provisional", label: "Until reconciled" }
  - { value: "Annotated", label: "Photo evidence" }
  - { value: "PDF", label: "Client-ready output" }
pillars:
  - title: "Offline-first capture"
    status: next
    text: "Field crews work in tank bottoms, offshore modules and remote shuts with no connectivity. The field app keeps working, marks records as provisional, and reconciles them when the device reconnects, with any conflicts surfaced rather than overwritten."
    points:
      - "Inspections, readings, photos and signatures captured offline"
      - "Provisional status shown until the server accepts the record"
      - "Conflicts surfaced for review, never silently merged"
  - title: "Photo records that mean something"
    status: core
    text: "Photos attach to the inspection line, asset and reading they evidence, so a picture of a holiday test is filed against that tank section and that test, not a camera roll."
    points:
      - "Photos linked to the exact ITP line and asset"
      - "Captions and notes recorded with each image"
      - "Failed answers raise an issue with the photo attached"
  - title: "Client-ready PDF reports"
    status: next
    text: "Approving an inspection generates the report from a versioned template: your logo or the client's, the readings, ambient conditions, instruments used and signatures, in the format the client expects."
    points:
      - "Report generated on approval, not assembled by hand"
      - "Per-client templates, headers and footers"
      - "Published reports are fixed records; corrections issue a new revision"
relatedModules: ["offline", "report-engine", "diary", "markup", "forms"]
sampleReport: "coating-daily-report"
---

## From the field to the client, without retyping

The daily report isn't a separate document someone writes at night. It is a view of the records the crew already captured during the shift, so the numbers in the report are the numbers that were recorded, with the instrument and person attached to each one.
