import React from 'react';
import styles from './header.css';
import { SearchBlock } from './search-block/search-block';
import { SortBlock } from './sort-block/sort-block';
import { ThreadTitle } from './thread-title/thread-title';

export function Header() {
  return (
    <header className={ styles.header }>
      <SearchBlock></SearchBlock>
      <ThreadTitle></ThreadTitle>
      <SortBlock></SortBlock>
    </header>
  );
}