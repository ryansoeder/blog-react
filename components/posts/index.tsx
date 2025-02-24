'use client';

import { use } from 'react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import styles from './styles.module.css';

import type { Post as PostType } from '@/types/types';

import Post from '@/components/post';

export default function posts({ posts }: { posts: Promise<PostType[]> }) {
	const allPosts = use(posts);
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
							date={(post as PostType).date}
							copy={(post as PostType).copy}
							tags={(post as PostType).tags}
						/>
					);
				})}
			</div>
		</>
	);
}
