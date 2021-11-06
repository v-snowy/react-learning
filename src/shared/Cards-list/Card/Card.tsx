import React from 'react';
import styles from './card.css';
import { CardInfo } from './CardInfo';
import { Controls } from './Controls';
import { ImgPreview } from './ImgPreview';
import { Menu } from './Menu';

export interface ICardProps {
  card: {
    id: string,
    user: {
      name: string;
      avatarImgSrc: string;
      avatarImgAlt?: string;
    },
    publishedDate: string;
    postDescription: string;
    image: {
      src: string;
      alt?: string;
    },
    karmaValue: number;
    commentsCount: number;
  }
}

export function Card({ card: { image, karmaValue, user, publishedDate, postDescription, commentsCount } }: ICardProps) {
  return (
    <li className={ styles.card }>
      <CardInfo
        userName={ user.name }
        avatarImgSrc={ user.avatarImgSrc }
        avatarImgAlt={ user.avatarImgAlt }
        postPublishedDate={ publishedDate }
        postDescription={ postDescription }
      ></CardInfo>

      <ImgPreview src={ image.src } alt={ image.alt }></ImgPreview>

      <Menu></Menu>

      <Controls karmaValue={ karmaValue } commentsCount={ commentsCount }></Controls>
    </li>
  );
}
