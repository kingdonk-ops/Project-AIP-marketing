// Services shown on /status and in the site-wide status indicator.
// `monitor` must match the monitor's name in Uptime Kuma exactly. Services whose
// monitor isn't on the public status page yet are shown as "Coming soon".
export const STATUS_PAGE_SLUG = 'project-aip';

// Same-origin path that nginx proxies to Uptime Kuma's /api/status-page/ (see Dockerfile).
export const STATUS_API_BASE = '/status-api';

export const services = [
  { monitor: 'Marketing site', label: 'Website', description: 'project-aip.io' },
  { monitor: 'Project AIP app', label: 'Project AIP app', description: 'Web application for inspections and QA/QC' },
  { monitor: 'API', label: 'API', description: 'Platform and integration API' },
  { monitor: 'Sign-in', label: 'Sign-in', description: 'Authentication and single sign-on' },
  { monitor: 'Field sync', label: 'Field sync', description: 'Offline field app synchronisation' },
  { monitor: 'Support', label: 'Support', description: 'Help desk and ticketing' },
  { monitor: 'Documentation', label: 'Documentation', description: 'Knowledge base and guides' }
];
