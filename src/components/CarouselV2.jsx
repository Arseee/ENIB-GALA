import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    dotsClass: "slick-dots slick-thumb",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="block w-full h-screen bg-blue-500 flex items-center justify-center relative">
        {/* Contenu JSX pour la première diapositive */}
        <h5 className="text-white text-2xl font-bold">Première diapositive</h5>
        <p className="text-white">Contenu de la première diapositive.</p>
      </div>
      <div className="block w-full h-screen bg-purple-500 flex items-center justify-center relative">
        {/* Contenu JSX pour la deuxième diapositive */}
        <h5 className="text-white text-2xl font-bold">Deuxième diapositive</h5>
        <p className="text-white">Contenu de la deuxième diapositive.</p>
      </div>
      <div className="block w-full h-screen bg-pink-500 flex items-center justify-center relative">
        {/* Contenu JSX pour la troisième diapositive */}
        <h5 className="text-white text-2xl font-bold">Troisième diapositive</h5>
        <p className="text-white">Contenu de la troisième diapositive.</p>
      </div>
    </Slider>
  );
};

export default MyCarousel;
