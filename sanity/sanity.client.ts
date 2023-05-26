import {createClient, type ClientConfig} from '@sanity/client';

const config: ClientConfig={
  projectId: 'your-project-id',
  dataset: 'your-dataset-name',
  useCdn: true,
  apiVersion: '2023-5-26'
}

const client = createClient(config);

const data = await client.fetch<number>(`count(*)`);
// data is typed as `number`
console.log(`Number of documents: ${data}`)