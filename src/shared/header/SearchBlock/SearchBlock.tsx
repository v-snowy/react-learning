import React, { useContext } from 'react';
import styles from './searchBlock.css';
import { UserBlock } from './UserBlock';
import { userContext } from '../../context/userContext';

export function SearchBlock() {
  const { name, iconImg } = useContext(userContext);

  return (
    <div className={ styles.searchBlock }>
      <UserBlock username={ name } avatarSrc={ iconImg } />
    </div>
  );
}