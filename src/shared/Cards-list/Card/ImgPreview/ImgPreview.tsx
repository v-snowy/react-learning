import React from 'react';
import styles from './imgpreview.css';

export function ImgPreview() {
  return (
    <div className={ styles.preview }>
      <img
        className={ styles.previewImg }
        src="https://cdn.dribbble.com/users/2198432/screenshots/16759013/media/9dd90492a13c60c0bd56e2a161dff4f1.png?compress=1&resize=800x600"
      />
    </div>
  );
}
