import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import styles from './styles.module.css';

export default function Post({
	postTitle,
	postCopy,
	postCategories,
}: {
	postTitle: string;
	postCopy: string;
	postCategories: string[];
}) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{postTitle}</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription>{postCopy}</CardDescription>
			</CardContent>
			<CardFooter>
				{postCategories.map((category: string, index: number) => {
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
