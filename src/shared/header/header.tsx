import React from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock/SearchBlock';
import { SortBlock } from './SortBlock/SortBlock';
import { ThreadTitle } from './ThreadTitle/ThreadTitle';

export function Header() {
  return (
    <header className={ styles.header }>
      <SearchBlock></SearchBlock>
      <ThreadTitle></ThreadTitle>
      <SortBlock></SortBlock>
    </header>
  );
}