import React from 'react';
import { Link } from 'react-router-dom';
import styles from './title.css';

interface ITitleProps {
  description: string;
}

export function Title({ description }: ITitleProps) {
  return (
    <h2 className={ styles.title }>
      <Link
        className={ styles.postLink }
        to="/posts/1"
      >
        <div className={ styles.textContent }>
          { description }
        </div>
      </Link>
    </h2>
  );
}
