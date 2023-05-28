import { getGhosts } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

export default async function Home() {
	const ghosts = await getGhosts();
	return (
		<div className="container mx-auto py-16">
      <h1 className="text-5xl font-bold mb-8">Ghost Getter</h1>
			<div className="grid grid-cols-3 gap-8">
        {ghosts.map((ghost) => (
          <div key={ghost._id} className="bg-slate-900 p-4 shadow rounded-md">
            <h3 className="text-2xl font-bold">{ghost.name}</h3>
                  <p>
                    <PortableText value={ghost.description} />
                  </p>
          </div>
        ))}
      </div>
		</div>
	);
}
