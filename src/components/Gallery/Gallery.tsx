import React from 'react';
import type { Image } from '../../types/image';
import { PictureWrapper } from '../Common/PictureWrapper';
import './Gallery.scss'

interface Props {
  images: Array<Image>;
}

export const Gallery: React.FC<Props> = ({ images }) => (
  <ul className="gallery">
    {images.map(({ id, title, url  }) => (
      <li className="gallery__item" key={id}>
        <div className="gallery__card">
          <PictureWrapper
            className="gallery"
            src={url}
            alt={title}
          />
          <span className="gallery__title">{title}</span>
        </div>
      </li>
    ))}
  </ul>
);
