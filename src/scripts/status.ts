import { STATUS_API_BASE, STATUS_PAGE_SLUG, services } from '../data/status';

// Uptime Kuma heartbeat status codes.
const DOWN = 0;
const UP = 1;
const PENDING = 2;
const MAINTENANCE = 3;

export type ServiceState = 'up' | 'degraded' | 'down' | 'maintenance' | 'planned';
export type Overall = 'operational' | 'degraded' | 'outage' | 'maintenance' | 'unknown';

export interface Beat { status: number; time: string; msg?: string; ping?: number | null }
export interface ServiceStatus {
  label: string;
  description: string;
  state: ServiceState;
  uptime24: number | null;
  beats: Beat[];
}
export interface StatusResult { overall: Overall; services: ServiceStatus[]; checkedAt: Date }

interface KumaMonitor { id: number; name: string }
interface KumaPage { publicGroupList?: { monitorList?: KumaMonitor[] }[] }
interface KumaHeartbeats { heartbeatList?: Record<string, Beat[]>; uptimeList?: Record<string, number> }

function stateFromBeats(beats: Beat[]): ServiceState {
  const last = beats[beats.length - 1];
  if (!last) return 'planned';
  if (last.status === MAINTENANCE) return 'maintenance';
  if (last.status === DOWN) return 'down';
  if (last.status === PENDING) return 'degraded';
  // Up now, but recent failures count as degraded.
  return beats.slice(-5).some((b) => b.status === DOWN) ? 'degraded' : 'up';
}

let cached: Promise<StatusResult> | null = null;

export function fetchStatus(): Promise<StatusResult> {
  cached ??= load();
  return cached;
}

async function load(): Promise<StatusResult> {
  const base = `${STATUS_API_BASE}`;
  const [page, beats] = await Promise.all([
    fetch(`${base}/${STATUS_PAGE_SLUG}`).then((r) => (r.ok ? (r.json() as Promise<KumaPage>) : Promise.reject(r.status))),
    fetch(`${base}/heartbeat/${STATUS_PAGE_SLUG}`).then((r) => (r.ok ? (r.json() as Promise<KumaHeartbeats>) : Promise.reject(r.status)))
  ]);

  const monitors = (page.publicGroupList ?? []).flatMap((g) => g.monitorList ?? []);
  const byName = new Map(monitors.map((m) => [m.name.trim().toLowerCase(), m]));

  const result: ServiceStatus[] = services.map((s) => {
    const m = byName.get(s.monitor.toLowerCase());
    if (!m) return { label: s.label, description: s.description, state: 'planned', uptime24: null, beats: [] };
    const list = beats.heartbeatList?.[m.id] ?? [];
    const uptime = beats.uptimeList?.[`${m.id}_24`];
    return {
      label: s.label,
      description: s.description,
      state: stateFromBeats(list),
      uptime24: typeof uptime === 'number' ? uptime : null,
      beats: list
    };
  });

  const live = result.filter((s) => s.state !== 'planned');
  let overall: Overall = 'operational';
  if (live.length === 0) overall = 'unknown';
  else if (live.some((s) => s.state === 'down')) overall = 'outage';
  else if (live.some((s) => s.state === 'degraded')) overall = 'degraded';
  else if (live.some((s) => s.state === 'maintenance')) overall = 'maintenance';

  return { overall, services: result, checkedAt: new Date() };
}

export const overallText: Record<Overall, string> = {
  operational: 'All systems operational',
  degraded: 'Some systems degraded',
  outage: 'Service disruption',
  maintenance: 'Scheduled maintenance',
  unknown: 'Status unavailable'
};

// Tailwind classes for the status dot.
export const overallDot: Record<Overall, string> = {
  operational: 'bg-brand-500',
  degraded: 'bg-amber-500',
  outage: 'bg-red-500',
  maintenance: 'bg-blue-500',
  unknown: 'bg-gray-400'
};

export { UP, DOWN, PENDING, MAINTENANCE };
