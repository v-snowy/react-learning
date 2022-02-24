import React from 'react';
import styles from './card.css';
import { CardInfo } from './CardInfo';
import { Controls } from './Controls';
import { ImgPreview } from './ImgPreview';
import { Menu } from './Menu';

export interface ICardProps {
  title: string;
  author: string;
  thumbnail: string;
  commentsCount: number;
  karmaValue: number;
}

const defaultImg: string = 'https://cdn.dribbble.com/users/2198432/screenshots/16759013/media/9dd90492a13c60c0bd56e2a161dff4f1.png?compress=1&resize=800x600';
const defaultAvatar: string = 'https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707';

export function Card({ title, author, thumbnail, commentsCount, karmaValue }: ICardProps) {
  return (
    <li className={ styles.card }>
      <CardInfo
        userName={ author }
        avatarImgSrc={ defaultAvatar }
        avatarImgAlt={ defaultAvatar }
        postPublishedDate={ '22/11/2020' }
        postDescription={ title }
      ></CardInfo>

      <ImgPreview
        src={ (thumbnail === 'default' || thumbnail === 'self') ? defaultImg : thumbnail }
        alt={ thumbnail }
      ></ImgPreview>

      <Menu></Menu>

      <Controls karmaValue={ karmaValue } commentsCount={ commentsCount }></Controls>
    </li>
  );
}
