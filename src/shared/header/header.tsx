import React from 'react';
import styles from './header.css';
import { SearchBlock } from './Search-block/Search-block';
import { SortBlock } from './Sort-block/Sort-block';
import { ThreadTitle } from './Thread-title/Thread-title';

export function Header() {
  return (
    <header className={ styles.header }>
      <SearchBlock></SearchBlock>
      <ThreadTitle></ThreadTitle>
      <SortBlock></SortBlock>
    </header>
  );
}