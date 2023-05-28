import { Ghost } from '@/types/Ghost';
import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';

export async function getGhosts(): Promise<Ghost[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "ghost"] | order(name asc){
      _id,
      name,
      description
    }`
	);
}
