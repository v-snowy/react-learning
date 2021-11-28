import React from 'react';
import styles from './searchBlock.css';
import { UserBlock } from './UserBlock';
import { useUserData } from '../../../hooks/useUserData';

interface ISearchBlockProps {
  token: string;
}

export function SearchBlock({ token }: ISearchBlockProps) {
  const [data] = useUserData(token);

  return (
    <div className={ styles.searchBlock }>
      <UserBlock username={ data.name } avatarSrc={ data.iconImg } />
    </div>
  );
}