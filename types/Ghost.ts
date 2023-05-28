import { PortableTextBlock } from 'sanity';

export type Ghost = {
	_id: string;
	name: string;
	description: PortableTextBlock[];
};
