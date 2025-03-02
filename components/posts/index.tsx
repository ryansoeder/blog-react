'use client';

// React
import { use } from 'react';
import { useState } from 'react';

// Components
import SearchContainer from '@/components/searchContainer';
import Post from '@/components/postCard';

// Styles
import styles from './styles.module.css';

// Types
import type { Post as PostType } from '@/types';

export default function posts({ posts }: { posts: Promise<PostType[]> }) {
	// State
	const [searchValue, setSearchValue] = useState('');

	// Functions
	const onSearch = (value: string) => {
		setSearchValue(value);
	};

	// Posts search/filter
	const allPosts = use(posts);
	const filteredPosts = allPosts.filter((post) => {
		return (
			post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
			post.content.toLowerCase().includes(searchValue.toLowerCase())
		);
	});
	const displayPosts = searchValue ? filteredPosts : allPosts;

	return (
		<>
			<SearchContainer onSearch={onSearch} />
			<div className={styles.postsContainer}>
				{displayPosts.map((post) => {
					return (
						<Post
							key={(post as PostType).id}
							id={(post as PostType).id}
							title={(post as PostType).title}
							post_date={(post as PostType).post_date}
							content={(post as PostType).content}
							tags={(post as PostType).tags}
						/>
					);
				})}
			</div>
		</>
	);
}
