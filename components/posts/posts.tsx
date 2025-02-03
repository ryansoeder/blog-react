import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import styles from './styles.module.css';

import Post from '@/components/post/post';
import _posts from '@/public/posts';

export default function posts() {
	return (
		<>
			<div className={styles.searchContainer}>
				<Input className={styles.searchInput} type='search' placeholder='search...' />
				<Button>submit</Button>
			</div>
			<div className={styles.postsContainer}>
				{_posts.map((post, index) => {
					return (
						<Post
							key={index}
							postTitle={post.title}
							postCopy={post.copy}
							postCategories={post.categories}
						/>
					);
				})}
			</div>
		</>
	);
}
