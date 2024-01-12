import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FullPageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-screen w-full ">
      {/* h-screen : prend toute la hauteur de la page */}
      {/* w-full : prend toute la largeur de la page */}
      {/* overflow-hidden : évite le défilement horizontal sur la page */}

      <Slider {...settings} className="h-full w-full">
        <div className="h-full w-full bg-blue-500 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Slide 1 - Accueil</h1>
        </div>
        <div className="h-full w-full bg-purple-500 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Slide 2 - Services</h1>
        </div>
        <div className="h-full w-full bg-pink-500 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Slide 3 - À Propos</h1>
        </div>
        {/* Ajoute d'autres slides selon tes besoins */}
      </Slider>
    </div>
  );
};

export default FullPageCarousel;
