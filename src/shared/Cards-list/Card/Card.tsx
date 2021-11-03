import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { ImgPreview } from './ImgPreview';
import { Menu } from './Menu';
import { UserLink } from './UserLink';

export function Card() {
  return (
    <li className={ styles.card }>
      <div className={ styles.textContent }>
        <div className={ styles.metaData }>
          <UserLink></UserLink>

          <span className={ styles.createdAt }>
            <span className={ styles.publishedLabel }>published </span>
            4 hours ago
          </span>
        </div>
        <h2 className={ styles.title }>
          <a className={ styles.postLink } href="#post-url">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ipsum delectus accusantium! Recusandae, voluptas qui?
          </a>
        </h2>
      </div>

      <ImgPreview></ImgPreview>

      <Menu></Menu>

      <Controls></Controls>
    </li>
  );
}
