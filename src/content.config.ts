import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const modulesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/modules' }),
  schema: z.object({
    title: z.string(), tagline: z.string(), category: z.string(),
    specs: z.array(z.string()), safetyCompliance: z.string().optional(), order: z.number().default(0),
    // core = phase 0–1, next = phase 2, roadmap = phase 3+ (from docs/blueprint in Project-AIP)
    status: z.enum(['core', 'next', 'roadmap']).default('core'),
    featured: z.boolean().default(false),
    // How the module helps specific industries; `industry` uses the names in src/lib/modules.ts.
    industryUse: z.array(z.object({ industry: z.string(), text: z.string() })).default([])
  })
});
const metric = z.object({ value: z.string(), label: z.string() });
const moduleStatus = z.enum(['core', 'next', 'roadmap']);

const industriesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/industries' }),
  schema: z.object({
    title: z.string(), standardCode: z.string(), keyRisks: z.array(z.string()),
    inspectionTypes: z.array(z.string()), itpSampleTitle: z.string(),
    // Short buyer-facing summary shown on cards and in the page hero.
    tagline: z.string().optional(),
    order: z.number().default(0),
    heroMetrics: z.array(metric).default([]),
    // Workflow callouts: what the platform does on a typical job in this industry.
    workflows: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
    // Module slugs from src/content/modules.
    relatedModules: z.array(z.string()).default([]),
    // Slug from src/content/sample-reports.
    sampleReport: z.string().optional()
  })
});
const featuresCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/features' }),
  schema: z.object({
    title: z.string(), badge: z.string(), headline: z.string(), summary: z.string(),
    // Standards the workflow is built around, e.g. "ISO 9001 / AS/NZS 2312.1".
    targetStandard: z.string().optional(),
    // Optional product brand lock-up shown in the feature hero, e.g. the SiteSync tablet-app logo.
    brandLogo: z.string().optional(),
    brandLogoAlt: z.string().optional(),
    order: z.number().default(0),
    heroMetrics: z.array(metric).default([]),
    // Each pillar carries its own delivery status so roadmap items are never presented as shipped.
    pillars: z.array(z.object({
      title: z.string(), text: z.string(), points: z.array(z.string()).default([]),
      status: moduleStatus.default('core')
    })),
    relatedModules: z.array(z.string()).default([]),
    sampleReport: z.string().optional(),
    sampleDownloadUrl: z.string().optional()
  })
});
const sampleReportsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sample-reports' }),
  schema: z.object({
    title: z.string(), summary: z.string(),
    // Selects the specimen layout in src/components/specimens.
    kind: z.enum(['coating-daily', 'ncr', 'itp-log']),
    audience: z.string(),
    includes: z.array(z.string()),
    order: z.number().default(0),
    // Optional uploaded PDF (Decap media). Without it the specimen page offers print-to-PDF.
    downloadUrl: z.string().optional()
  })
});
const testimonialsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(), name: z.string(), role: z.string(), company: z.string(),
    industry: z.string().optional(),
    // Only approved quotes are published; keep false until the customer signs off.
    approved: z.boolean().default(false),
    order: z.number().default(0)
  })
});
const legalCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({ title: z.string(), lastUpdated: z.string(), jurisdiction: z.string(), version: z.string() })
});
const whitepaperCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/whitepapers' }),
  schema: z.object({
    title: z.string(), abstract: z.string(), pagesCount: z.number(),
    releaseDate: z.string(), leadGateRequired: z.boolean().default(true)
  })
});
export const collections = {
  modules: modulesCollection, industries: industriesCollection,
  features: featuresCollection, 'sample-reports': sampleReportsCollection,
  testimonials: testimonialsCollection,
  legal: legalCollection, whitepapers: whitepaperCollection
};