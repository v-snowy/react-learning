import React, { useState } from 'react';
import { Post } from '../../../Post';
import styles from './title.css';

interface ITitleProps {
  description: string;
}

export function Title({ description }: ITitleProps) {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <h2 className={ styles.title }>
      <a
        className={ styles.postLink }
        href="#post-url"
        onClick={ () => setIsModalActive(true) }
      >
        <div className={ styles.textContent }>
          { description }
        </div>
      </a>

      { isModalActive && (
        <Post />
      ) }
    </h2>
  );
}
