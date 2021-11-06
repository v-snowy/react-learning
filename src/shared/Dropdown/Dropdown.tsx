import React, { useState } from 'react';
import { noop } from '../../utils/js/noop';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown({ button, children, isOpen, onClose = noop, onOpen = noop }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  };

  return (
    <div className={ styles.container }>
      <div onClick={ handleOpen }>
        { button }
      </div>
      {
        isDropdownOpen && (
          <div className={ styles.listContainer }>
            <div className={ styles.list } onClick={ () => setIsDropdownOpen(false) }>
              { children }
            </div>
          </div>
        )
      }
    </div>
  );
}
