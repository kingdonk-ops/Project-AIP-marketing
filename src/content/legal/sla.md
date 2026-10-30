---
title: "Service Level Agreement"
lastUpdated: "Revision A — draft, requires legal review"
jurisdiction: "Australia"
version: "A (Draft)"
---

| Field | Detail |
|---|---|
| Document ID | AIP-LEG-003 |
| Revision | A |
| Status | Draft (subject to legal review before issue) |
| Category | Customer legal & commercial |
| Audience | Customers, procurement |
| Owner | [OWNER NAME AND ROLE] |
| Approved by | [APPROVER NAME AND ROLE] |
| Effective date | [EFFECTIVE DATE] |
| Next review | [REVIEW DATE, e.g. 12 months from effective date] |

## Revision History

| Rev | Date | Author | Description |
|---|---|---|---|
| A | [DATE] | [AUTHOR] | First draft for review |

## 1. Introduction

1.1 This Service Level Agreement (**SLA**) sets out the service levels that [COMPANY LEGAL NAME] (ABN [ABN]) of [REGISTERED ADDRESS], Western Australia (**we**, **us**, **our**) provides to customers (**Customer**, **you**, **your**) for the Project-AIP inspection management platform (**Service**).

1.2 This SLA forms part of, and is governed by, the [MASTER SUBSCRIPTION AGREEMENT / TERMS OF SERVICE] (**Agreement**) between us and the Customer. Capitalised terms not defined in this SLA have the meaning given in the Agreement.

1.3 This SLA describes:

- (a) our availability commitment for the Service;
- (b) how availability is measured and calculated;
- (c) the severity levels we use to classify incidents and the response and resolution targets for each;
- (d) the service credits available if we do not meet our availability commitment; and
- (e) the responsibilities of each party in supporting these service levels.

1.4 **Customer-specific terms.** The service levels in this SLA are our standard service levels. Specific customers may agree different service levels, support hours, credit amounts or remedies. Any such variations will be recorded in Schedule 1 (Customer-Specific Variations) or in the Customer's Order Form. They apply to that Customer only.

## 2. Definitions

2.1 In this SLA:

- **Business Day** means a day other than a Saturday, Sunday or public holiday in Perth, Western Australia.
- **Business Hours** means 8:30 am to 5:00 pm Australian Western Standard Time (AWST) on a Business Day, unless Schedule 1 or the Order Form specifies otherwise.
- **Downtime** means any period, measured in minutes, during which the Service is Unavailable, excluding Excluded Downtime.
- **Emergency Maintenance** means unplanned maintenance required urgently to address a security vulnerability, prevent imminent loss of data or service, or comply with law.
- **Excluded Downtime** means any period of unavailability described in clause 6 (Exclusions).
- **Incident** means an unplanned interruption to, or reduction in the quality of, the Service.
- **Monthly Fees** means the subscription fees paid or payable by the Customer for the Service for the relevant calendar month, excluding GST, one-off fees, implementation fees and professional services fees.
- **Monthly Uptime Percentage** means the percentage calculated under clause 5.
- **Production Environment** means the live, customer-facing instance of the Service hosted on Amazon Web Services (AWS) in the [AWS REGION, e.g. Asia Pacific (Sydney) ap-southeast-2] region. It does not include any development, test, staging, sandbox, trial or demonstration environment.
- **Resolution** means the Incident has been fixed, or a permanent workaround has been implemented that restores the affected functionality to normal operation.
- **Response** means the first acknowledgement from a member of our support team (not an automated message) confirming that the Incident has been received, assigned and is being investigated.
- **Scheduled Maintenance** means planned maintenance notified in accordance with clause 4.2.
- **Service Credit** means a credit calculated in accordance with clause 7.
- **Severity Level** means the classification of an Incident under clause 8.
- **Support Channels** means the channels listed in clause 9.2.
- **Unavailable** has the meaning given in clause 5.2.
- **Workaround** means a temporary measure that restores the affected functionality, or allows the Customer to continue its work, while a permanent fix is developed.

## 3. Scope

3.1 This SLA applies to:

- (a) the Project-AIP web application in the Production Environment, including asset registers, Corrosion Under Insulation (CUI) inspection records, Non-Destructive Testing (NDT) records, Inspection and Test Plan (ITP) and Manufacturer's Data Report (MDR) records, related document storage, and user authentication; and
- (b) the production hosting infrastructure on which the Service runs, which we procure from Amazon Web Services as a third-party provider and manage under our AWS organisation and accounts.

3.2 This SLA does not apply to:

- (a) non-production environments, including development, test, staging, trial and sandbox environments;
- (b) beta, preview, pilot or early-access features identified as such;
- (c) third-party products, integrations or services not provided by us, including customer-owned systems, identity providers and network services;
- (d) customisations, reports or integrations built by or for the Customer outside the standard Service, unless the Order Form states otherwise; and
- (e) professional services, training and implementation services.

## 4. Availability Commitment

4.1 **Uptime target.** We will use commercially reasonable efforts to make the Production Environment available with a Monthly Uptime Percentage of at least **99.9%** in each calendar month, excluding Scheduled Maintenance and other Excluded Downtime.

> For reference, 99.9% availability allows for approximately 43 minutes of Downtime in a 30-day month.

4.2 **Scheduled Maintenance.**

- (a) We will give at least **[5] Business Days'** notice of Scheduled Maintenance by email to the Customer's nominated contacts and on our status page at [STATUS PAGE URL].
- (b) We will schedule maintenance during a standard maintenance window of **[SATURDAY 10:00 pm to SUNDAY 4:00 am AWST]** wherever reasonably practicable. This window is chosen to minimise impact on field inspection activity.
- (c) Scheduled Maintenance will not exceed **[8] hours** in total in any calendar month. Maintenance beyond this limit counts as Downtime.
- (d) Where possible, we will perform maintenance without interrupting the Service, using rolling or zero-downtime deployments.

4.3 **Emergency Maintenance.**

- (a) We may perform Emergency Maintenance at any time where reasonably required.
- (b) We will give as much notice as is reasonably practicable and will post updates to the status page.
- (c) Emergency Maintenance counts as Downtime, unless it is required to address a vulnerability or issue caused by the Customer or by an event described in clause 6.1.

## 5. Uptime Measurement and Calculation

5.1 **Monitoring.** We monitor the availability of the Production Environment using automated external monitoring. This monitoring checks the application's login page and core application endpoints from at least [two] independent locations at intervals of no more than [one] minute. Our monitoring records are the primary source for calculating the Monthly Uptime Percentage. We will take into account any evidence the Customer reasonably provides.

5.2 **Unavailable.** The Service is **Unavailable** when either:

- (a) authorised users cannot log in to the Service; or
- (b) authorised users cannot view, create or update asset and inspection records,

because of a failure of the Service or our production hosting, as confirmed by our monitoring or by our verification of a Customer report. A period of unavailability is counted from the earlier of:

- (i) the time our monitoring first detects the failure; and
- (ii) the time the Customer reports it through a Support Channel,

until the time the Service is restored.

5.3 **Partial unavailability.** Where only some functions are affected, or only some users are affected, the period counts as Downtime only if a core function described in clause 5.2 is unavailable to the majority of the Customer's users. Other degradation is treated as an Incident under clause 8 but is not counted as Downtime.

5.4 **Formula.** The Monthly Uptime Percentage is calculated as follows:

**Monthly Uptime % = ((Total Minutes − Excluded Minutes − Downtime Minutes) ÷ (Total Minutes − Excluded Minutes)) × 100**

where:

- **Total Minutes** is the total number of minutes in the calendar month;
- **Excluded Minutes** is the total number of minutes of Excluded Downtime, including Scheduled Maintenance, in that month; and
- **Downtime Minutes** is the total number of minutes of Downtime in that month.

5.5 **Worked example.** In a 30-day month:

| Item | Minutes |
|---|---|
| Total Minutes (30 × 24 × 60) | 43,200 |
| Scheduled Maintenance (4 hours) | 240 |
| Eligible minutes (43,200 − 240) | 42,960 |
| Downtime | 60 |
| Available minutes (42,960 − 60) | 42,900 |

Monthly Uptime % = (42,900 ÷ 42,960) × 100 = **99.86%**

This is below the 99.9% target. A Service Credit would apply under clause 7.

5.6 **Rounding.** The Monthly Uptime Percentage is rounded to two decimal places.

5.7 **Reporting.** On request, and no more than once per month, we will provide a report of the Monthly Uptime Percentage for the previous month. The report will include the time and duration of any Downtime and Excluded Downtime. Customers on [ENTERPRISE / NOMINATED] plans will receive this report automatically each month.

## 6. Exclusions

6.1 The following are **Excluded Downtime** and do not count towards Downtime:

- (a) Scheduled Maintenance conducted in accordance with clause 4.2;
- (b) unavailability caused by the Customer, its users, contractors or systems, including:
  - misuse of the Service;
  - use contrary to the Agreement or our documentation;
  - incorrect configuration by the Customer; and
  - actions taken on the Customer's instructions;
- (c) failures of the Customer's or its users' internet access, local networks, site connectivity, devices, browsers or firewalls, including connectivity limitations at remote, mine or construction sites;
- (d) failures of third-party services that the Customer chooses to integrate with or rely on, other than our production hosting provider;
- (e) suspension of the Service in accordance with the Agreement, including for non-payment or a security risk;
- (f) denial-of-service attacks, malicious attacks or other security events, where we have implemented reasonable industry-standard protections;
- (g) a regional outage of AWS services affecting the [AWS REGION] region as a whole, as published on the AWS Health Dashboard, that is outside our reasonable control and cannot reasonably be mitigated by our architecture. **This exclusion is subject to any variation in Schedule 1**;
- (h) events beyond our reasonable control, including:
  - natural disasters, fire, flood, cyclone and pandemic;
  - acts of government;
  - industrial action not involving our own staff; and
  - widespread failure of public internet or telecommunications infrastructure;
- (i) features identified as beta, preview or early access; and
- (j) periods where the Customer has asked us to take the Service offline, or has agreed to downtime.

6.2 We will take reasonable steps to mitigate the effect of any event in clause 6.1. Where the event is within our control, we will restore the Service as soon as reasonably practicable.

## 7. Service Credits

7.1 **Entitlement.** If the Monthly Uptime Percentage for a calendar month falls below the 99.9% target, the Customer is entitled to a Service Credit calculated as a percentage of the Monthly Fees for that month:

| Monthly Uptime Percentage | Service Credit (% of Monthly Fees) |
|---|---|
| Less than 99.9% but at least 99.5% | [5]% |
| Less than 99.5% but at least 99.0% | [10]% |
| Less than 99.0% but at least 95.0% | [25]% |
| Less than 95.0% | [50]% |

7.2 **Annual or upfront billing.** Where the Customer pays annually or in advance, Monthly Fees are calculated as the annual subscription fee divided by 12.

7.3 **Claim process.** To receive a Service Credit, the Customer must submit a claim to [SUPPORT EMAIL] within **30 days** after the end of the month in which the Downtime occurred. The claim must include:

- (a) the Customer's name and account identifier;
- (b) the dates and approximate times of the Downtime; and
- (c) any supporting information, such as error messages, screenshots or support ticket references.

7.4 **Assessment.** We will assess the claim and respond within **15 Business Days** of receiving it. If we decline a claim, we will give reasons and the relevant monitoring data. Disputes about Service Credits will be resolved under the dispute resolution process in the Agreement.

7.5 **Application.** Approved Service Credits will be applied against the Customer's next invoice. Service Credits:

- (a) are not refundable or payable in cash, except where the Agreement ends and no further invoices will be issued. In that case, we will refund any unapplied credit within 30 days;
- (b) cannot be transferred to another account or entity; and
- (c) are not available while the Customer has undisputed overdue amounts owing to us.

7.6 **Cap.** Total Service Credits in any calendar month will not exceed **[50]%** of the Monthly Fees for that month.

7.7 **Remedy.** Service Credits are a price adjustment that reflects the reduced level of service. They are not a penalty.

- (a) To the extent permitted by law, and subject to clause 7.8 and clause 12, Service Credits are the Customer's sole and exclusive financial remedy for any failure to meet the availability commitment in clause 4.1.
- (b) Clause 7.7(a) does not limit any right the Customer has under the Agreement for breach of other obligations, including obligations relating to data security and confidentiality.

7.8 **Australian Consumer Law.** Nothing in this SLA excludes, restricts or modifies any right or remedy, or any guarantee, warranty or other term or condition, implied or imposed by the *Competition and Consumer Act 2010* (Cth), including the Australian Consumer Law, or any other legislation that cannot lawfully be excluded or limited. Where our liability for breach of a non-excludable guarantee can lawfully be limited, it is limited as set out in the Agreement.

## 8. Severity Levels

8.1 **Classification.** Every Incident reported to us is assigned a Severity Level based on its business impact. The Customer proposes the initial Severity Level when reporting. We will confirm or reasonably adjust it, and we will explain any change to the Customer. Either party may request reclassification if the impact changes.

8.2 **Severity definitions.**

| Severity | Name | Definition | Examples |
|---|---|---|---|
| **Sev-1** | Critical | The Production Environment is Unavailable or materially unusable for all or most users. Or there is a confirmed security incident or data loss/corruption affecting Customer data. No Workaround exists. | Users cannot log in; the application is down; inspection records cannot be accessed or saved; confirmed unauthorised access to Customer data; widespread data corruption. |
| **Sev-2** | High | A core function is seriously impaired, or a significant number of users are affected, causing material disruption to the Customer's operations. No reasonable Workaround exists. | ITP/MDR record generation or export fails; document attachments cannot be uploaded or retrieved; severe performance degradation; a key workflow (e.g. inspection sign-off) is blocked for a site or team. |
| **Sev-3** | Medium | A non-critical function is impaired or behaves incorrectly, or a core function is impaired but a reasonable Workaround exists. Limited operational impact. | A report filter returns incorrect results; an individual user cannot access a specific record; intermittent errors that can be bypassed by retrying; formatting errors in exports. |
| **Sev-4** | Low | Minimal or no operational impact. General questions, cosmetic defects, documentation issues and feature or enhancement requests. | Spelling or layout errors; how-to questions; requests for new fields or report types; minor user-interface issues. |

8.3 **Reporting Sev-1 and Sev-2 Incidents.** These must be reported by [PHONE / PRIORITY CHANNEL] or through the support portal with the Severity Level selected. They will be followed by a support ticket if not already raised. This ensures the urgent response process is triggered.

## 9. Support Services

9.1 **Support hours.**

| Coverage | Hours |
|---|---|
| Sev-1 Incidents | 24 hours a day, 7 days a week, including public holidays |
| Sev-2, Sev-3 and Sev-4 | Business Hours |

Extended support hours (for example, support aligned to site roster or shift patterns) may be agreed in Schedule 1 or the Order Form.

9.2 **Support channels.**

| Channel | Details | Use for |
|---|---|---|
| Support portal | [SUPPORT PORTAL URL] | All severity levels |
| Email | [SUPPORT EMAIL] | All severity levels |
| Priority phone | [SUPPORT PHONE NUMBER] | Sev-1 and Sev-2 only |
| Status page | [STATUS PAGE URL] | Service status, maintenance notices and Incident updates |
| Help centre | [HELP CENTRE / KNOWLEDGE BASE URL] | Self-service guides and FAQs |

9.3 **Language.** Support is provided in English.

## 10. Response and Resolution Targets

10.1 We will use reasonable efforts to meet the following targets. Times are measured from the time a complete Incident report is received through a Support Channel, or from the time our monitoring detects the Incident, whichever is earlier.

| Severity | Initial Response | Status Update Frequency | Target Workaround | Target Resolution |
|---|---|---|---|---|
| **Sev-1** Critical | 1 hour (24/7) | Every 2 hours, or as otherwise agreed | 4 hours | 24 hours |
| **Sev-2** High | 4 Business Hours | Every Business Day | 2 Business Days | 5 Business Days |
| **Sev-3** Medium | 1 Business Day | Weekly, or on material change | 10 Business Days | Next scheduled release, or 30 Business Days |
| **Sev-4** Low | 2 Business Days | On request | Not applicable | Considered for the product roadmap at our discretion |

10.2 **Nature of targets.** Response times are commitments we aim to meet in all cases. Workaround and resolution times are targets, not guarantees, because resolution may depend on:

- (a) the nature of the Incident;
- (b) information provided by the Customer; and
- (c) third-party providers.

We will work continuously on Sev-1 Incidents until they are resolved or a Workaround is in place. We will apply appropriate resources to all other Incidents in priority order.

10.3 **Downgrading severity.** Where a Workaround is implemented, the Incident may be reclassified to a lower Severity Level, and the targets for that level then apply.

10.4 **Pausing the clock.** Response and resolution times are paused while we are waiting on the Customer for:

- (a) information;
- (b) access;
- (c) testing; or
- (d) confirmation.

They are also paused while a proposed fix is awaiting the Customer's approval.

10.5 **Closure.** We will close an Incident when:

- (a) Resolution is achieved and the Customer confirms it; or
- (b) the Customer does not respond within **[5] Business Days** after we notify the proposed Resolution.

A closed Incident may be reopened within **[10] Business Days** if the same issue recurs.

10.6 **Response time remedies.** Unless otherwise specified in Schedule 1, failure to meet a response or resolution target does not, by itself, give rise to a Service Credit. Repeated failures will be addressed through the escalation process in clause 11 and the service review in clause 14.

## 11. Escalation

11.1 If the Customer is not satisfied with the progress of an Incident, it may escalate as follows:

| Level | Contact | When |
|---|---|---|
| 1 | Support team – [SUPPORT EMAIL / PHONE] | Initial report |
| 2 | [SUPPORT LEAD / CUSTOMER SUCCESS MANAGER NAME AND CONTACT] | Response or update target missed, or Customer not satisfied with progress |
| 3 | [DIRECTOR / CHIEF EXECUTIVE OFFICER NAME AND CONTACT] | Sev-1 not resolved within target, or Level 2 escalation not satisfactorily addressed |

11.2 We may escalate internally at any time. For Sev-1 Incidents, we will automatically notify Level 2 at the time of the initial Response.

## 12. Security Incidents and Data Breaches

12.1 Confirmed security incidents affecting Customer data are treated as Sev-1 Incidents.

12.2 If we become aware of an actual or suspected unauthorised access to, disclosure of, or loss of personal information or other Customer data held in the Service, we will:

- (a) notify the Customer without undue delay, and in any event within **[48] hours** of becoming aware, of the nature of the incident and the data affected, as far as is then known;
- (b) take reasonable steps to contain and remediate the incident;
- (c) cooperate with the Customer in its assessment of whether the incident is an eligible data breach under the Notifiable Data Breaches scheme in Part IIIC of the *Privacy Act 1988* (Cth); and
- (d) support any notifications to the Office of the Australian Information Commissioner (OAIC) or affected individuals, as required by law or agreed in the Agreement.

12.3 Security obligations, data handling and data processing terms are set out in the Agreement and in our [PRIVACY POLICY / DATA PROCESSING AGREEMENT / INFORMATION SECURITY POLICY]. Nothing in this SLA limits those obligations.

## 13. Backup, Recovery and Communications

13.1 **Backups.** We maintain automated backups of Production Environment data, stored on AWS infrastructure in [AWS REGION / AUSTRALIA], with the following targets:

| Measure | Target |
|---|---|
| Backup frequency | [Continuous point-in-time recovery for databases; daily snapshots for document storage] |
| Backup retention | [35] days |
| Recovery Point Objective (RPO) | [1 hour] |
| Recovery Time Objective (RTO) | [8 hours] |

These targets apply to recovery from a major failure of the Production Environment. They are not a commitment to restore individual records deleted by users. We may help with such restores on a reasonable-efforts basis, and they may be chargeable.

13.2 **Incident communications.** For Sev-1 and Sev-2 Incidents affecting multiple customers, we will post updates on the status page in addition to direct communications.

13.3 **Post-incident review.** For every Sev-1 Incident, we will provide the Customer with a written post-incident report within **[5] Business Days** of Resolution. The report will set out:

- (a) a summary and timeline of the Incident;
- (b) the root cause, as far as it can be determined;
- (c) the impact on the Customer;
- (d) the actions taken to resolve it; and
- (e) the preventive measures planned or implemented.

## 14. Service Reviews and Chronic Failure

14.1 **Service reviews.** On request, and no more than [quarterly], we will meet with the Customer to review:

- (a) service performance;
- (b) open Incidents;
- (c) upcoming changes; and
- (d) any concerns.

The frequency for specific customers may be set in Schedule 1.

14.2 **Chronic failure.** If the Monthly Uptime Percentage falls below **[99.0]%** in any **[three] consecutive** calendar months, or in any **[four]** months in a rolling 12-month period, the Customer may terminate the Agreement. To do so, the Customer must give written notice within 30 days after the end of the last qualifying month. On such termination:

- (a) we will refund any prepaid fees for the period after the termination date; and
- (b) we will provide the Customer with an export of its data in accordance with the Agreement.

## 15. Customer Responsibilities

15.1 To help us meet these service levels, the Customer will:

- (a) report Incidents promptly through the Support Channels, providing reasonable detail. This includes the affected users, steps to reproduce, screenshots and error messages;
- (b) nominate and keep current at least [two] authorised support contacts. Their details are recorded in Schedule 1 or the Order Form;
- (c) make knowledgeable personnel reasonably available to help with diagnosis and testing, particularly for Sev-1 and Sev-2 Incidents;
- (d) ensure its users access the Service using supported browsers and devices as listed in our documentation at [HELP CENTRE URL];
- (e) maintain its own network connectivity and site IT environment; and
- (f) use the Service in accordance with the Agreement and our documentation.

15.2 Where an Incident is caused by the Customer's failure to meet these responsibilities, the related unavailability is Excluded Downtime. The response and resolution targets in clause 10 will not apply to the extent of that failure.

## 16. Changes to this SLA

16.1 We may update this standard SLA from time to time to reflect changes to the Service, our infrastructure or legal requirements. We will give at least **[30] days'** written notice of any change.

16.2 No change will materially reduce the service levels or Service Credits applying to a Customer during its current subscription term without that Customer's written agreement.

16.3 Customer-specific terms recorded in Schedule 1 or an Order Form may be varied only by written agreement signed by both parties.

## 17. Order of Precedence

17.1 If there is any inconsistency, the following order of precedence applies, to the extent of the inconsistency:

- (a) the Order Form;
- (b) Schedule 1 (Customer-Specific Variations) of this SLA;
- (c) the body of this SLA; and
- (d) the Agreement, except where the Agreement expressly states that it prevails, including on limitation of liability.

## 18. Governing Law

18.1 This SLA is governed by the laws of Western Australia, Australia. Each party submits to the non-exclusive jurisdiction of the courts of Western Australia and the courts that may hear appeals from those courts, unless the Agreement provides otherwise.

## Schedule 1 – Customer-Specific Variations

This Schedule records any variations to the standard service levels agreed with a specific Customer. Where a field is marked "Standard", the body of this SLA applies.

| Item | Standard | Customer Variation |
|---|---|---|
| Customer legal name and ABN | – | [CUSTOMER LEGAL NAME, ABN] |
| Order Form / contract reference | – | [REFERENCE] |
| Uptime target (clause 4.1) | 99.9% | [Standard / VARIATION] |
| Business Hours (clause 2.1) | 8:30 am – 5:00 pm AWST, Business Days | [Standard / e.g. aligned to site roster] |
| Maintenance window (clause 4.2) | [SAT 10:00 pm – SUN 4:00 am AWST] | [Standard / VARIATION, e.g. aligned to site shutdowns] |
| Maintenance notice period | [5] Business Days | [Standard / VARIATION] |
| Response and resolution targets (clause 10) | As per clause 10.1 | [Standard / VARIATION] |
| Response time Service Credits (clause 10.6) | Not applicable | [Not applicable / DETAILS] |
| Service Credit table (clause 7.1) | As per clause 7.1 | [Standard / VARIATION] |
| Service Credit cap (clause 7.6) | [50]% | [Standard / VARIATION] |
| AWS regional outage exclusion (clause 6.1(g)) | Applies | [Applies / Does not apply / Modified] |
| Data breach notification period (clause 12.2) | [48] hours | [Standard / VARIATION] |
| RPO / RTO (clause 13.1) | [1 hour] / [8 hours] | [Standard / VARIATION] |
| Service review frequency (clause 14.1) | On request, up to [quarterly] | [Standard / e.g. monthly] |
| Chronic failure threshold (clause 14.2) | Below [99.0]% for [3] consecutive months | [Standard / VARIATION] |
| Customer authorised support contacts | – | [NAME, ROLE, EMAIL, PHONE] (×[2]) |
| Customer escalation contact | – | [NAME, ROLE, EMAIL, PHONE] |
| Other agreed variations | – | [DETAILS] |

**Signed for and on behalf of [COMPANY LEGAL NAME]**

Name: [NAME] Title: [TITLE] Signature: ____________ Date: [DATE]

**Signed for and on behalf of [CUSTOMER LEGAL NAME]**

Name: [NAME] Title: [TITLE] Signature: ____________ Date: [DATE]
