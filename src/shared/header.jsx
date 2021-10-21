import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Example } from './example';
import styles from './header.css';

function HeaderComponent() {
  return (
    <header>
      <h1 className={ styles.header }>Reddit for our own</h1>
      <Example/>
    </header>
  );
}

export const Header = hot(HeaderComponent);