import Posts from '@/components/posts';
import { Suspense } from 'react';

export default function Home() {
	const posts = fetch('http://localhost:8080/posts').then((res) => res.json());
	console.log(posts);
	return (
		<main className=''>
			<Suspense fallback={<div>Loading...</div>}>
				<Posts posts={posts} />
			</Suspense>
		</main>
	);
}
