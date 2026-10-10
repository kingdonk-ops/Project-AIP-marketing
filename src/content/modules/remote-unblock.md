---
title: "Remote Inspection Unblock & Targeted Recovery"
tagline: "Recover a blocked field session without wiping unrelated job data."
category: "System Governance & Safety"
specs:
  - "Permission-gated administrative recovery"
  - "Targeted cleanup of selected corrupted local records"
  - "Server-side rejection of invalid or stale payloads"
  - "Auditable recovery actions and operator attribution"
safetyCompliance: "Recovery operations should preserve chain-of-custody and follow project retention and incident procedures."
order: 2
---

## Targeted recovery for field sessions

When a device encounters a damaged attachment or a checkout conflict, administrators need a controlled way to restore work without unnecessarily resetting the device.

A recovery workflow can invalidate a selected checkout token, queue a targeted cleanup directive and record the action in an audit trail. The device applies the directive when it reconnects. Recovery behaviour should be tested against the actual sync engine before being represented as a guaranteed production capability.