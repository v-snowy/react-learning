import React from 'react';
import styles from './imgpreview.css';

interface IImgPreviewProps {
  src: string;
  alt?: string;
}

export function ImgPreview({ src, alt }: IImgPreviewProps) {
  return (
    <div className={ styles.preview }>
      <img
        className={ styles.previewImg }
        src={ src }
        alt={ alt }
      />
    </div>
  );
}
