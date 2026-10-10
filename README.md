# Project AIP Marketing Site

Astro static marketing site for Project AIP, an industrial asset inspection and QA/QC workflow platform.

## Stack
- Astro 4 static output and Content Collections
- Zod content validation and Tailwind CSS
- Decap CMS (authentication setup required)
- Docker + NGINX for Coolify deployment

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
- Connect a real contact/CRM endpoint before advertising lead capture.
- Run dependency, accessibility and production build checks.