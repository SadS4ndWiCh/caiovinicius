import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
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
    toys: projectsCollection,
    experiences: experiencesCollection
}