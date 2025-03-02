// Components
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Styles
import styles from './styles.module.css';

// Types
import type { Post } from '@/types/types';

export default function Post({ title, post_date, content, tags }: Post) {
	// Friendly date
	const displayDate = new Date(post_date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<span>{displayDate}</span>
				<CardDescription>{content.substring(0, 300)}...</CardDescription>
			</CardContent>
			<CardFooter>
				{tags.map((category: string, index: number) => {
					return (
						<Badge className={styles.badge} key={index} variant='outline'>
							{category}
						</Badge>
					);
				})}
			</CardFooter>
		</Card>
	);
}
