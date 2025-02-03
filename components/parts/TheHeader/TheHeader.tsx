import Link from 'next/link';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

import styles from './styles.module.css';

export default function TheHeader() {
	return (
		<header className={styles.header}>
			<div className={styles.navContainer}>
				<h1>Blog</h1>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<Link href='/docs' legacyBehavior passHref>
								<NavigationMenuLink className='tim'></NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</header>
	);
}
