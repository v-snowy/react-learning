import React from 'react';
import { EColor } from '.';
import styles from './text.css';
import classNames from 'classnames';

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
}

type  TSizes = 10 | 12 | 14 | 16 | 20 | 28;

export function Text(props: ITextProps) {
  const { As = 'span', color = EColor.black, children, size, mobileSize, tabletSize, desktopSize }: ITextProps = props;
  const classes = classNames(
    styles[`s${ size }`],
    styles[color],
    { [styles[`m${ mobileSize }`]]: mobileSize },
    { [styles[`t${ tabletSize }`]]: tabletSize },
    { [styles[`d${ desktopSize }`]]: desktopSize }
  );

  return (
    <As
      className={ classes }
    >
      { children }
    </As>
  );
}
