import React from 'react';
import { Card } from './Card';
import styles from './cards-list.css';

export function CardsList() {
  return (
    <ul className={ styles.cardsist }>
      <Card></Card>
    </ul>
  );
}
