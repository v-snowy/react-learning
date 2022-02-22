import React from 'react';
import { useUserData } from '../../../hooks/useUserData';
import styles from './searchBlock.css';
import { UserBlock } from './UserBlock';

export function SearchBlock() {
  const { data: { name, iconImg }, loading } = useUserData();

  return (
    <div className={ styles.searchBlock }>
      <UserBlock username={ name } avatarSrc={ iconImg } loading={ loading } />
    </div>
  );
}