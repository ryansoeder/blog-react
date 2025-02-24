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

export default function Post({ title, date, copy, tags }: Post) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<span>{date}</span>
				<CardDescription>{copy}</CardDescription>
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
