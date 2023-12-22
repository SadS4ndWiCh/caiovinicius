import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string().max(64),
        description: z.string().max(255),
        sourceCode: z.string().url(),
    })
});

const experiencesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        company: z.string(),
        role: z.string(),
        description: z.string(),
        startsAt: z.string(),
        endsAt: z.string().optional()
    })
})

export const collections = {
    projects: projectsCollection,
    experiences: experiencesCollection
}