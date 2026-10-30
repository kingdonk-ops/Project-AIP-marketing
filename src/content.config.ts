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
const industriesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/industries' }),
  schema: z.object({
    title: z.string(), standardCode: z.string(), keyRisks: z.array(z.string()),
    inspectionTypes: z.array(z.string()), itpSampleTitle: z.string()
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
  legal: legalCollection, whitepapers: whitepaperCollection
};