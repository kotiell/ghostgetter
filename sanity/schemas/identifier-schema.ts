import { defineField, defineType } from 'sanity';
const identifier = defineType({
	name: 'identifier',
	title: 'Identifiers',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'array',
			of: [{ type: 'block' }],
		}),
	],
});

export default identifier;
