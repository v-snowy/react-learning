import React from 'react';
import { BlockIcon, WarningIcon } from '../../../../Icons';
import { EColor, Text } from '../../../../Text';
import styles from './menuItemsList.css';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={ styles.menuItemsList }>
      <li className={ styles.menuItem }>
        <BlockIcon></BlockIcon>
        <Text size={ 12 } color={ EColor.grey99 }>Hide</Text>
      </li>

      <div className={ styles.divider }></div>

      <li className={ styles.menuItem }>
        <WarningIcon></WarningIcon>
        <Text size={ 12 } color={ EColor.grey99 }>Report</Text>
      </li>
    </ul>
  );
}
