import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Pour publier un article : ajouter un fichier .md dans src/content/blog/ (le nom du fichier = l'URL).
export const CATEGORIES = {
  omra: 'Omra',
  'omra-badal': 'Omra Badal',
  medine: 'Médine',
  mecque: 'La Mecque',
} as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(70, 'H1 : 70 caractères max'),
      seoTitle: z.string().max(60).optional(),
      description: z.string().min(80).max(165),
      category: z.enum(['omra', 'omra-badal', 'medine', 'mecque']),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      cover: image(),
      coverAlt: z.string(),
      excerpt: z.string().max(220),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      readingTime: z.number().optional(),
      cta: z.enum(['omra', 'omra-badal', 'visite-mecque', 'visite-medine']).default('omra'),
      faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      related: z.array(z.string()).default([]),
      reviewed: z.boolean().default(false), // true une fois relu par un savant / référent religieux
    }),
});

export const collections = { blog };
