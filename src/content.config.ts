import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    status: z.string(),
    order: z.number(),
    summary: z.string(),
    role: z.string(),
    accent: z.enum(['violet', 'coral', 'blue']),
    media: z.object({
      type: z.enum(['video', 'image', 'placeholder']),
      src: z.string().optional(),
      poster: z.string().optional(),
      alt: z.string(),
    }),
    links: z.array(z.object({ label: z.string(), href: z.string().url() })),
  }),
});

export const collections = { projects };
