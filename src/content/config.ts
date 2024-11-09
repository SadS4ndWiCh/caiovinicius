import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    type: "data",
    schema: z.object({
        slug: z.string(),
        name: z.string(),
        description: z.string(),
        sourceCode: z.string().url(),
    }),
});

export const collections = {
    projects: projectsCollection,
};