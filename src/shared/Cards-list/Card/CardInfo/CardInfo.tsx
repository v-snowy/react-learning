import React from 'react';
import { Title } from '../Title';
import { UserLink } from '../UserLink';
import styles from './cardinfo.css';

interface ICardInfoProps {
  userName: string;
  avatarImgSrc: string;
  avatarImgAlt?: string;
  postPublishedDate: string;
  postDescription: string;
}

export function CardInfo(
  {userName, avatarImgSrc, avatarImgAlt, postPublishedDate: publishedDate, postDescription }: ICardInfoProps
) {
  return (
    <div className={ styles.textContent }>
      <div className={ styles.metaData }>
        <UserLink
          userName={ userName }
          avatarImgSrc={ avatarImgSrc }
          avatarImgAlt={ avatarImgAlt }
        ></UserLink>

        <span className={ styles.createdAt }>
          <span className={ styles.publishedLabel }>published </span>
          { publishedDate }
        </span>
      </div>
      <Title description={ postDescription }></Title>
    </div>
  );
}
