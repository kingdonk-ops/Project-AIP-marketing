import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Local equivalent of the nginx /status-api/ proxy for `astro dev` (astro preview ignores it).
// Set STATUS_ORIGIN to the Uptime Kuma URL.
const statusProxy = process.env.STATUS_ORIGIN
  ? {
      '/status-api': {
        target: process.env.STATUS_ORIGIN,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/status-api/, '/api/status-page')
      }
    }
  : undefined;

export default defineConfig({
  output: 'static',
  // Old URLs kept working after the industry pages were reorganised.
  redirects: { '/industries/coating-blasting': '/industries/protective-coatings-ndt' },
  integrations: [react()],
  vite: { server: { proxy: statusProxy } }
});
