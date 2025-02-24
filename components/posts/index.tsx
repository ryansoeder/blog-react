'use client';

// React
import { use } from 'react';

// Components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Post from '@/components/post';

// Styles
import styles from './styles.module.css';

// Types
import type { Post as PostType } from '@/types/types';

export default function posts({ posts }: { posts: Promise<PostType[]> }) {
	const allPosts = use(posts);
	console.log(allPosts);
	return (
		<>
			<div className={styles.searchContainer}>
				<Input className={styles.searchInput} type='search' placeholder='search...' />
				<Button>submit</Button>
			</div>
			<div className={styles.postsContainer}>
				{allPosts.map((post, index) => {
					return (
						<Post
							key={(post as PostType).id}
							id={(post as PostType).id}
							title={(post as PostType).title}
							post_date={(post as PostType).post_date}
							copy={(post as PostType).copy}
							tags={(post as PostType).tags}
						/>
					);
				})}
			</div>
		</>
	);
}
