/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Gallery } from './components/Gallery/Gallery';
import type { Image } from './types/image';
import { Carousel } from './components/Carousel/Carousel';

const apiUrl = 'http://localhost:3000/images';

enum Layout {
  Carousel = 'carousel',
  Gallery = 'gallery',
}

const Components = {
  [Layout.Carousel]: Carousel,
  [Layout.Gallery]: Gallery,
};

const App = () => {
  const [layout, setLayout] = useState(Layout.Gallery);
  const [images, setImages] = useState<Array<Image>>([]);
  const LayoutComponent = Components[layout];

  const fetchImages = async () => {
    const result = await axios(apiUrl);

    setImages(result.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <main>
      <header>
        <button 
          className="update-layout" 
          onClick={(): void => setLayout(layout === Layout.Carousel ? Layout.Gallery : Layout.Carousel)}
        >
          Update Layout
        </button>
      </header>
      <div className="layout">
        {images.length ? (
          <LayoutComponent images={images} />
        ) : (
          <p>No any images</p>
        )}
      </div>
    </main>
  );
}

export default App;
