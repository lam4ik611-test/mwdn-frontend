import React, { useState } from 'react';
import { Image } from '../../types/image';
import { PictureWrapper } from '../Common/PictureWrapper';
import './Carousel.scss'

interface Props {
  images: Array<Image>;
}

interface CarouselButtonProps {
  type: string;
  index: number;
  isDisabled: boolean;
}

export const Carousel: React.FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const CarouselButton: React.FC<CarouselButtonProps> = ({
    type,
    index,
    isDisabled,
  }) => (
    <button 
      className={`carousel__arrow carousel__arrow--${type} ${isDisabled ? 'carousel__arrow--disabled' : ''}`} 
      onClick={(): void => {
        if (isDisabled) return;

        setCurrentIndex(index);
      }}
    ></button>
  ); 

  return (
    <div className="carousel">
      <div className="carousel__container">
        <div className="carousel__main">
          <PictureWrapper 
            className="carousel"
            src={images[currentIndex].url}
            alt={images[currentIndex].title}
          />
          <CarouselButton
            type="left"
            index={currentIndex - 1}
            isDisabled={currentIndex === 0}
          />
          <CarouselButton
            type="right"
            index={currentIndex + 1}
            isDisabled={currentIndex === images.length - 1}
          />
        </div>
        <div className="carousel__pagination">
          {images.map((_, index) => (
            <span 
              className={`carousel__pagination-item ${currentIndex === index ? 'carousel__pagination-item--active' : ''}`} 
              onClick={(): void => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>    
    </div>
  );
};
