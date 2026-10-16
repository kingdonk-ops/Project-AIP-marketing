---
title: "Users, Sign-in & SSO"
tagline: "The right sign-in for staff, customers, field crews and integrations — from single sign-on to simple, secure access on site."
category: "Identity & access"
specs:
  - "SAML and OIDC single sign-on"
  - "SCIM provisioning and fast deprovisioning"
  - "Multi-factor authentication for privileged roles"
  - "Magic link or PIN access for field users"
  - "Shared-device mode with individual sign-off"
  - "Scoped, expiring API keys for integrations"
status: core
featured: false
order: 146
industryUse:
  - industry: "Construction & building"
    text: "Staff sign in with their Microsoft Entra ID account, and when someone leaves, deprovisioning revokes their sessions, keys and portal access within minutes."
  - industry: "Mining & resources"
    text: "Crews at remote sites share a rugged tablet with PIN quick-switch and auto-lock, while every sign-off is still attributed to the individual."
  - industry: "Oil, gas & LNG"
    text: "Give a third-party inspector a sponsor-owned account that expires automatically at the end of the turnaround, with periodic re-confirmation by the internal sponsor."
  - industry: "Power & utilities"
    text: "Require re-authentication at hold-point sign-off so each signature is bound to a verified person and their recorded competency."
---

Users, Sign-in & SSO manages accounts, invitations, profiles and authentication for everyone who uses the platform. It supports four kinds of user, each with its own session policy: staff on single sign-on, customers without SSO who use email, password and multi-factor authentication, field and external users who get single-use magic links or PINs with narrow scope, and system integrations.

When a user is removed in your directory, their sessions, API keys, magic links and portal access are revoked together, within minutes. Every sign-in and privilege change is written to the tamper-evident audit log, and SSO-managed users can't fall back to a password.

## Key features

- Single sign-on via SAML 2.0 and OIDC, including Microsoft Entra ID, Okta and Google
- Domain claim and SSO enforcement per organisation
- SCIM provisioning with group-to-role mapping and no implicit privilege escalation
- Multi-factor authentication for local accounts and privileged roles, even under SSO
- Single-use, short-lived magic links and PINs for field users, safe from email link scanners
- Shared-device field mode with PIN quick-switch, auto-lock and individual sign-off
- Sponsor-owned external accounts with automatic expiry and re-confirmation
- Profile with contact details, competencies, signature and notification preferences
- Step-up re-authentication for e-signatures at hold points
- Scoped, expiring API keys and client credentials for integrations, plus audited break-glass access

## Works with

- [Roles, Permissions & Teams](/modules/access/) — roles applied after sign-in
- [Client & Subcontractor Portal](/modules/portal/) — external users sign in through the same service
- [E-Signatures & Tamper-Evident Records](/modules/signing/) — step-up at sign-off
- [Audit Trail & Activity](/modules/audit/) — every sign-in and privilege change logged
- [Certificates, Competency & Calibration Gate](/modules/eligibility/) — qualifications linked to the profile
