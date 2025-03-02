'use client';

// React
import { use } from 'react';
import { useState } from 'react';

// Components
import SearchContainer from '@/components/searchContainer';
import Post from '@/components/post';

// Styles
import styles from './styles.module.css';

// Types
import type { Post as PostType } from '@/types/types';

export default function posts({ posts }: { posts: Promise<PostType[]> }) {
	const [searchValue, setSearchValue] = useState('');
	const onSearch = (value: string) => {
		setSearchValue(value);
	};
	const allPosts = use(posts);
	console.log(allPosts);
	return (
		<>
			<SearchContainer onSearch={onSearch} />
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
