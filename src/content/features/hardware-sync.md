---
title: "Hardware & Gauge Sync"
badge: "Instrument traceability"
headline: "Every reading tied to the gauge that took it"
summary: "Readings carry the instrument serial and its calibration status, and an out-of-calibration gauge can't be used. Direct Bluetooth capture from DFT and profile gauges is on the roadmap to remove double entry altogether."
targetStandard: "ISO 19840 · SSPC-PA 2 · ISO 8503 measurement records"
order: 5
heroMetrics:
  - { value: "Serial", label: "Recorded with each reading" }
  - { value: "Blocked", label: "Out-of-calibration gauges" }
  - { value: "Batch", label: "Material lot traceability" }
  - { value: "Roadmap", label: "Bluetooth streaming" }
pillars:
  - title: "Calibration and batch validation"
    status: core
    text: "Instrument fields capture the gauge serial and check it against the equipment register before the reading is accepted. Coating and abrasive batches link to their technical data sheets and certificates, so the evidence a client asks for is attached to the record already."
    points:
      - "A reading can't be recorded with an out-of-calibration gauge"
      - "Calibration certificates kept as a history per instrument"
      - "If a calibration later fails, find every reading that gauge took"
      - "Kits (gauge, probes, cables) assigned as a unit; one invalid part blocks the kit"
  - title: "Direct Bluetooth gauge streaming"
    status: roadmap
    text: "The goal is to stream readings from digital DFT and surface profile gauges straight into the inspection line, with the gauge identity and timestamp captured automatically, so no one transcribes readings from a gauge screen or paper scrapbook."
    points:
      - "Bluetooth LE capture from supported DFT and profile gauges"
      - "Readings land in the right inspection cell with instrument identity attached"
      - "Pilot partners help choose which gauge families are supported first"
relatedModules: ["equipment", "eligibility", "traceability", "forms"]
sampleReport: "coating-daily-report"
---

## Why instrument traceability matters

When a gauge fails calibration, the question is always the same: which readings did it take, on which assets, since the last good certificate? Project AIP answers that from the record, because every reading already names its instrument.

Bluetooth gauge streaming is not available yet. If direct gauge capture is important to your evaluation, tell us which gauges your crews use. That shapes the order we build integrations in.
