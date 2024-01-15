// Carousel.js
import React from "react";
import { CCarousel, CCarouselItem } from "@coreui/react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <CCarousel
      controls
      indicators
      transition="crossfade"
      className="h-screen"
      interval={false}
    >
      <CCarouselItem>
        {/* Contenu de la première diapositive */}
    
        <div className="carousel-content bg-black h-screen flex items-center flex-col text-white ">
          <div className="h-40 my-12 flex items-center justify-center  ">
            <p className="text-8xl ">GALA de l'ENIB</p>
          </div>
          <div className="h-40 -my-24 flex items-center justify-center  ">
            <p className="text-7xl ">58 Edition</p>
          </div>
          <div className="h-40 flex  items-center justify-center  ">
            {/* <div className="logo"></div> */}
          </div>
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div className="carousel-content bg-black h-screen flex items-center justify-center ">
          <h3 className="text-white">Slide 2</h3>
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div className="carousel-content bg-blue-500 h-screen flex items-center justify-center">
          <h3 className="text-white">Slide 3</h3>
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div className="carousel-content bg-blue-300 h-screen flex items-center justify-center">
          <h3 className="text-white">Slide 4</h3>
        </div>
      </CCarouselItem>
    </CCarousel>
  );
};

export default Carousel;
