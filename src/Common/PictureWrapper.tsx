import React from 'react';

interface Props {
  className: string;
  src: string;
  alt: string;
}

export const PictureWrapper: React.FC<Props> = ({
  className,
  src, 
  alt,
}) => (
  <picture className={className && `${className}__picture`}>
    <img 
      className={className && `${className}__img`}
      src={src} 
      alt={alt} 
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src='empty.jpg'
      }} 
    />
  </picture>
);
