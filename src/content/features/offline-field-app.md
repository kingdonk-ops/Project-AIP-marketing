---
title: "Offline Field App & Sync"
badge: "Works with no signal"
headline: "The whole inspection runs offline, then syncs without losing a reading"
summary: "Crews download their assets, templates and drawings before they drive out, then capture inspections, photos, measurements and defects all shift with no coverage. Records sit in a visible queue and are designed never to be overwritten or lost, and when two people change the same field the app shows a merge screen instead of silently picking a winner."
order: 3
heroMetrics:
  - { value: "Offline", label: "Full capture, no signal" }
  - { value: "Queued", label: "Readings never overwritten" }
  - { value: "Merge", label: "Field-level conflict screen" }
  - { value: "Encrypted", label: "On-device, remote wipe" }
pillars:
  - title: "Download your scope, work the whole shift offline"
    status: next
    text: "Before heading out, each device pulls down its assigned sites and projects, the active templates, open work and recent history, plus the drawings and documents for the work area. In the field, inspectors capture inspections, photos, measurements, voice notes and defects exactly as they would online — the app does not degrade to a read-only mode when the signal drops."
    points:
      - "Sync scope covers assigned assets, active templates, open work and recent history"
      - "Scan a QR or NFC tag to open an asset, with the last-used asset as the default"
      - "Offline drawing and document packs per work area, with version and stale warnings"
      - "Qualification and calibration checks run offline from a downloaded snapshot"
  - title: "A sync queue that never silently overwrites"
    status: next
    text: "Every answer is saved as it is entered, and recorded readings wait safely in a visible queue until the device reconnects. Sync runs automatically on reconnect, on opening the app and at regular intervals. When two people change the same field, the app opens a field-level merge screen so the right value is kept, rather than letting the last write win."
    points:
      - "Per-item sync status with a sync indicator always visible in the header"
      - "Automatic sync on reconnect, on app open and at intervals, with frequent autosave"
      - "Conflict rules per record type and a field-level merge screen"
      - "Eligibility snapshots are rechecked on sync, and sign-off on since-expired data is flagged"
  - title: "Encrypted on the device, wipeable if it is lost"
    status: next
    text: "Field data sitting on a phone or tablet is encrypted on-device, and a lost or stolen device can be revoked and remotely wiped from the device register. Photos upload in the background once coverage returns, with compression and a storage budget so a week of capture doesn't fill the device."
    points:
      - "Encrypted on-device storage, device registration and remote wipe"
      - "Deferred background photo upload with compression and prioritisation"
      - "Storage budget and media compression controls"
      - "Sync diagnostics and a shareable support bundle when something looks wrong"
relatedModules: ["offline", "inspections", "forms", "eligibility", "equipment"]
sampleReport: "coating-daily-report"
---

## Offline-first, not offline-tolerant

Plenty of tools let you view something offline and sync a note later. Industrial QA/QC doesn't work that way: the inspection itself happens in a tank bottom, inside an LNG module or deep in a plant during a shutdown, where there is no signal for the whole shift. The Offline Field App is built so the complete workflow — open the asset, run the ITP, capture readings and photos, raise a defect, sign off — runs on the device, and the server reconciles the result afterwards.

The guarantee that matters is simple: a reading your crew recorded in the field does not disappear and is not quietly replaced. It is saved the moment it is entered, held in a queue you can see, and merged on your terms when the device is back in coverage. If something does go wrong on sync, the diagnostics and support bundle show what is still pending rather than leaving you guessing.

This page is about the app and its sync engine as a platform capability. For how that offline capture turns into a client-ready daily report, see [Field Reporting](/features/field-reporting/).
