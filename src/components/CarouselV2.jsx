// Carousel.js
import React from 'react';
import { CCarousel, CCarouselItem } from '@coreui/react';
import './Carousel.css'

const Carousel = () => {
  return (
    <CCarousel controls indicators transition="crossfade" className="h-screen" interval="false">
      <CCarouselItem>
        {/* Contenu de la première diapositive */}
        <div className="carousel-content bg-blue-500 h-screen flex items-center justify-center">
          <h3 className="text-white">Slide 1</h3>
          {/* Ajoute du texte et des objets ici */}
        </div>
      </CCarouselItem>
      <CCarouselItem>
        {/* Contenu de la deuxième diapositive */}
        <div className="carousel-content bg-purple-500 h-screen flex items-center justify-center">
          <h3 className="text-white">Slide 2</h3>
          {/* Ajoute du texte et des objets ici */}
        </div>
      </CCarouselItem>
    </CCarousel>
  );
};

export default Carousel;
