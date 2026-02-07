import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
        readingTime: z.number().optional(),
    }),
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        client: z.string().optional(),
        date: z.coerce.date(),
        stack: z.array(z.string()).default([]),
        heroImage: z.string().optional(),
        featured: z.boolean().default(false),
        externalUrl: z.string().url().optional(),
        github: z.string().url().optional(),
    }),
});

export const collections = { articles, projects };
