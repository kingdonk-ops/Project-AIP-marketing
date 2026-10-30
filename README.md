# Project AIP Marketing Site

Astro static marketing site for Project AIP, an industrial asset inspection and QA/QC workflow platform.

## Stack
- Astro 7 static output and Content Collections
- Zod content validation and Tailwind CSS
- Decap CMS (authentication setup required)
- Docker + NGINX for Coolify deployment

## Site map
- `/` home: problem vs solution, feature matrix, industries, sample reports, security
- `/features/` ITP management, field reporting, hardware & gauge sync, task management (`src/content/features`)
- `/industries/` oil & gas, mining, protective coatings & NDT, structural welding (`src/content/industries`)
- `/sample-reports/` specimen reports with modal previews and print-to-PDF pages (`src/content/sample-reports`, layouts in `src/components/specimens`)
- `/security-and-data/`, `/pricing/`, `/contact/`, `/modules/`, `/status/`

Feature pillars and modules carry a `core` / `next` / `roadmap` status. Keep it accurate so planned capabilities are never presented as shipped.
Testimonials (`src/content/testimonials`) appear on the home page only when `approved: true`.

## Local development
```sh
npm install
npm run dev
```
Build with `npm run build`; preview with `npm run preview`.

## Coolify
Connect this repository as a Dockerfile or Docker Compose resource. The container serves Astro's `dist/` output through NGINX on port 80. Configure domain and TLS in Coolify.

## Pre-launch checks
- Configure and test Decap CMS OAuth authentication. The admin UI is present, but login is not production-ready until an OAuth provider/proxy and callback URLs are configured.
- Have legal content reviewed by qualified Australian counsel.
- Verify security, hosting, residency, uptime, offline-window and compliance claims against the deployed product.
- Set `PUBLIC_CONTACT_ENDPOINT` (Docker build arg) to a form or CRM handler that accepts a standard POST. Until then `/contact/` shows a "coming soon" notice instead of the form.
- Replace or supplement the specimen reports with real, anonymised PDFs (upload through the CMS).
- Run dependency, accessibility and production build checks.