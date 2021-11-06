import React from 'react';

interface IItem {
  id: string;
  text: string;
  className?: string;
  onClick?: (id: string) => void;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', text, className, onClick = () => {}, id, href }: IItem) => (
        <As
          className={ className }
          onClick={ () => onClick(id) }
          key={ id }
          href={ href }
        >
          { text }
        </As>
      ))}
    </>
  );
}
