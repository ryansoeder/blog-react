// React
import { Suspense } from 'react';

// Components
import Posts from '@/components/posts';

// Types
import type { Posts as PostsType } from '@/types';

export default function Home() {
	const posts: Promise<PostsType> = fetch('http://localhost:8080/posts').then((res) => res.json());
	console.log(posts);
	return (
		<main className=''>
			<Suspense fallback={<div>Loading...</div>}>
				<Posts posts={posts} />
			</Suspense>
		</main>
	);
}
