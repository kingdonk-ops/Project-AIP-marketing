---
title: "Integrations & Webhooks"
tagline: "Connect inspection data to your ERP, maintenance systems, Teams, Slack, email and calendars — with every outbound destination approved."
category: "Platform services"
specs:
  - "Versioned public REST API"
  - "Signed outbound webhooks with retry and replay"
  - "Teams, Slack and email notifications"
  - "ERP, EAM and CMMS work order and asset sync"
  - "Calendar feeds for inspection schedules"
  - "Admin-approved destinations with payload redaction"
status: roadmap
featured: false
order: 152
industryUse:
  - industry: "Power & utilities"
    text: "Sync assets and work orders with the owner's maintenance system, using their register as master for tag numbers, and push inspection results back as notifications."
  - industry: "Mining & resources"
    text: "Post a summary to the site's Teams channel when an NCR is raised or a hold point is signed off, without exposing commercial detail."
  - industry: "Oil, gas & LNG"
    text: "Publish the shutdown inspection schedule as a calendar feed so supervisors and witnesses see upcoming hold points in their own calendar."
  - industry: "Construction & building"
    text: "Send signed webhooks to a project controls system whenever an approval is rejected or a deadline falls due, with a delivery log and replay."
---

Integrations & Webhooks connects the platform to the tools your teams and clients already use: ERP, EAM and CMMS systems, Microsoft Teams, Slack, email and calendars. A versioned public REST API supports system-to-system integration, and outbound webhooks push events such as an NCR raised, an inspection signed off or an approval rejected, with signing and automatic retry.

Connectors sync assets and work orders with client maintenance systems, using the client's register as the master for tag numbers, and push inspection results and findings back. Every outbound destination must be approved by an organisation admin, and payloads are redacted by audience so commercial or sensitive data doesn't leak into chat or external systems.

## Key features

- Public REST API with documentation, client credentials, idempotency and rate limits
- Scoped API keys per project and module, with usage logs
- Outbound webhooks with signatures, retries, delivery log and replay
- Payload redaction profiles by audience, including summary-only for chat
- Microsoft Teams and Slack notifications, plus email digests
- Admin approval of every outbound destination, with an allowlist
- Calendar feeds for inspection and shutdown schedules, revoked when a user is deactivated
- ERP, EAM and CMMS connectors for work orders and assets, with field mapping and conflict rules
- Inspection results and findings pushed back to the client's maintenance system
- Integration health page with failed delivery queue, alerts and audit log

## Works with

- [Comments, Mentions & Notifications](/modules/comments/) — notification channels
- [Asset Hierarchy & Registers](/modules/assets/) — asset sync
- [Scopes of Work, Disciplines & Tasks](/modules/scope-work/) — work orders
- [Inbound Capture & Connectors](/modules/ingestion/) — inbound email and data
- [Users, Sign-in & SSO](/modules/identity/) — API keys and client credentials
