import { createClient, type ClientConfig } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

const config: ClientConfig = {
	projectId,
	dataset,
	useCdn: true,
	apiVersion: '2023-5-26',
};

const client = createClient(config);

const data = await client.fetch<number>(`count(*)`);
// data is typed as `number`
console.log(`Number of documents: ${data}`);
