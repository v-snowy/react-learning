import React from 'react';

function pickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) => {
    <F extends (t: T[K]) => void>(fn: F) => {
      <E extends React.SyntheticEvent<T>>(e: E) => {
        fn(e.currentTarget[key]);
      };
    };
  };
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');

export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');
