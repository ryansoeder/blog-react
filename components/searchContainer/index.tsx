// React
import { useState } from 'react';
import { useRef } from 'react';

// Components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Styles
import styles from './styles.module.css';

export default function SearchContainer({ onSearch }: { onSearch: (value: string) => void }) {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<>
			<div className={styles.searchContainer}>
				<Input
					ref={inputRef}
					onKeyDown={(e) => {
						onSearch(inputRef.current?.value || '');
					}}
					className={styles.searchInput}
					type='search'
					placeholder='search...'
				/>
				<Button onClick={() => onSearch(inputRef.current?.value || '')}>search</Button>
			</div>
		</>
	);
}
