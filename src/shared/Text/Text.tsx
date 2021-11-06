import React from 'react';
import { EColors } from '.';
import styles from './text.css';

interface ITextProps {
  size: number;
  color: EColors;
  children: string;
}

export function Text({ size, color, children }: ITextProps) {
  return (
    <span
      className={
        `
          ${ styles[color] }
          ${ styles[`m${ size }`] }
          ${ styles[`t${ size }`] }
          ${ styles[`d${ size }`] }
        `
      }
    >
      { children }
    </span>
  );
}
