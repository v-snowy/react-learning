import React from 'react';
import styles from './title.css';

interface ITitleProps {
  description: string;
}

export function Title({ description }: ITitleProps) {
  return (
    <h2 className={ styles.title }>
      <a className={ styles.postLink } href="#post-url">
        <div className={ styles.textContent }>
          { description }
        </div>
      </a>
    </h2>
  );
}
