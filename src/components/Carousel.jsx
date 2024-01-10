import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-black text-white">
      <Slider {...settings} className="h-full w-full flex items-center">
        <div className="h-full w-full">
          <p>Page 1</p>
        </div>
        <div className="h-full w-full">
          <p>Page 2</p>
        </div>
        <div className="h-full w-full">
          <p>Page 3</p>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleCarousel;
