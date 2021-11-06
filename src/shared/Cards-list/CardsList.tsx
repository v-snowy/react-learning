import React from 'react';
import { Card, ICardProps } from './Card';
import styles from './cardsList.css';

export interface ICardsListProps {
  list: ICardProps[];
}

export function CardsList({ list }: ICardsListProps) {
  return (
    <ul className={ styles.cardsList }>
      {
        list.map(({ card }: ICardProps) => (
          <Card
            key={ card.id }
            card={ card }
          ></Card>
        ))
      }
    </ul>
  );
}
