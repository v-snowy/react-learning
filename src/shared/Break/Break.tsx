import React from 'react';
import styles from './break.css';
import classNames from 'classnames';

interface  IBreakProps {
  size: TBreakSize;
  mobileSize?: TBreakSize;
  tabletSize?: TBreakSize;
  desktopSize?: TBreakSize;
  inline?: boolean;
  top?: boolean;
}

type TBreakSize = 4 | 8 | 12 | 16 | 20;

export function Break(props: IBreakProps) {
  const { size, mobileSize, tabletSize, desktopSize, inline = false, top = false }: IBreakProps = props;
  const classes = classNames(
    styles[`s${ size }`],
    { [styles.top]: top },
    { [styles.inline]: inline },
    { [styles[`mobile_s${ mobileSize }`]]: mobileSize },
    { [styles[`tablet_s${ tabletSize }`]]: tabletSize },
    { [styles[`desktop_s${ desktopSize }`]]: desktopSize }
  );

  return (
    <div className={ classes }/>
  );
}
