---
title: "Inbound Capture & Connectors"
tagline: "Bring documents and correspondence in from folders, cloud drives, email and site instruments — screened and filed by a person."
category: "Documents & records"
specs:
  - "Watched folders and cloud drive connectors"
  - "Forwarded email capture with threading"
  - "Agent for site laptops and NDT instruments"
  - "Malware scan and OCR on every file"
  - "Filing queue with suggested project and asset"
  - "Mill certificate recognition for review"
status: roadmap
featured: false
order: 120
industryUse:
  - industry: "Welding & fabrication"
    text: "Forward supplier mill certificates by email and have heat number, material grade and standard read automatically and proposed as component certificates for a person to confirm."
  - industry: "Insulation & CUI"
    text: "Pick up thickness readings and UT files from the NDT instrument's export folder on the site laptop and queue them for filing against the right line."
  - industry: "Mining & resources"
    text: "Collect reports dropped into a shared project folder at a remote site on a schedule, with a dashboard flagging anything quarantined, failed or left unfiled too long."
  - industry: "Oil, gas & LNG"
    text: "Route client emails sent to a project address into the correspondence register, with unverified senders quarantined and attachments scanned before anyone opens them."
---

Inbound Capture & Connectors brings documents and correspondence in from outside the platform: watched folders and cloud drives, forwarded emails, chat and SMS gateways, webhooks, and an outbound-only agent for site laptops and NDT instrument export folders.

Every channel feeds **one governed pipeline**. Files are quarantined, scanned for malware, checked and read by OCR, then attributed to a verified sender — or marked unverified — and land in a filing queue for a person to file or reject. Nothing inbound creates records automatically, duplicates are detected, and matching file names become new versions of existing documents. It is switched off by default and enabled per organisation.

## Key features

- Watched folder and cloud drive connectors with schedules, health status, test connection, pause, run now and retry
- Forwarded email capture with threading, attachments extracted as documents and message bodies safely sanitised
- Chat, SMS and webhook channels with signed requests and rate limiting
- Quarantine, malware scan and OCR before anything is filed
- Sender verification, per-project addresses and sender trust levels, with unverified senders quarantined
- Filing queue suggesting project, asset, document type and thread, learned from past filing
- Mill certificate and test report recognition, proposing heat number, grade and standard for confirmation
- Site laptop and NDT instrument agent with an outbound-only connection
- Per-connector rules for allowed file types, size limits, paths and source-copy retention
- Ingestion dashboard with quarantined, failed and unfiled counts and ageing alerts

## Works with

- [Document Library & Control](/modules/documents/) — files into the library
- [Transmittals & Correspondence](/modules/transmittals/) — emails into correspondence
- [Traceability: Components, Materials & Certificates](/modules/traceability/) — certificate candidates
- [Integrations & Webhooks](/modules/integrations/) — connected systems
