import React from 'react';
import styles from './userlink.css';

interface IUserLinkProps {
  userName: string;
  avatarImgSrc: string;
  avatarImgAlt?: string
}

export function UserLink({ userName, avatarImgSrc, avatarImgAlt }: IUserLinkProps) {
  return (
    <div className={ styles.userLink }>
      <img
        className={ styles.avatar }
        src={ avatarImgSrc }
        alt={ avatarImgAlt }
      />
      <a className={ styles.username } href="#user-url">{ userName }</a>
    </div>
  );
}
