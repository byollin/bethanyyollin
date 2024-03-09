import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: z.object({
		inProgress: z.boolean(),
		title: z.string(),
		description: z.string(),
		img: z.string().optional(),
		img_alt: z.string().optional(),
		width: z.number().optional(),
		height: z.number().optional(),
		github: z.string().optional(),
		app: z.string().optional(),
	}),
});

export const collections = {
	projects: projectsCollection,
};
