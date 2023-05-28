const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const config = {
	projectId,
	dataset,
	apiVersion: '2023-05-26',
};

export default config;
