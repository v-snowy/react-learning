import React from 'react';
import styles from './userblock.css';
import { Break } from '../../../Break';
import { EColor, Text } from '../../../Text';
import { IconAnon } from '../../../Icons';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a
      className={ styles.userBox }
      href="https://www.reddit.com/api/v1/authorize?client_id=Lf06xpjKu8_ZOxVkpVCPXg&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
    >
      <div className={ styles.avatarBox }>
        {
          avatarSrc
            ? <img className={ styles.avatarImage } src={ avatarSrc } alt="user avatar" />
            : <IconAnon />
        }
      </div>

      <div className={ styles.username }>
        <Break size={ 12 }/>
        <Text size={ 20 } color={ username ? EColor.black : EColor.grey99 }>{ username || 'Anonymous' }</Text>
      </div>
    </a>
  );
}
