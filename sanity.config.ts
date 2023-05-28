import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const config = defineConfig({
	projectId,
	dataset,
	title: 'Ghost Getter',
	apiVersion: '2026-05-26',
	basePath: '/studio',
	plugins: [deskTool()],
	schema:{types: schemas}
});

export default config;
