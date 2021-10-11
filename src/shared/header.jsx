import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Example } from './example';

function HeaderComponent() {
  return (
    <header>
      <h1>Reddit for our own</h1>
      <Example/>
    </header>
  );
}

export const Header = hot(HeaderComponent);