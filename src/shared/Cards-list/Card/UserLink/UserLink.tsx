import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <div className={ styles.userLink }>
      <img
        className={ styles.avatar }
        src="https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707"
        alt="avatar"
      />
      <a className={ styles.username } href="#user-url">Dmitriy Grishin</a>
    </div>
  );
}
