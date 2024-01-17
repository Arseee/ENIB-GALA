// Carousel.js
import React from "react";
import { CCarousel, CCarouselItem } from "@coreui/react";
import "./Carousel.css";
import Button from "./Boutton";
const Carousel = () => {
  return (
    <CCarousel
      controls
      indicators
      transition="crossfade"
      className="h-screen"
      interval={false}
    >
      <CCarouselItem className="first-slide">
        <div className="image-background"></div>
        <div className=" h-screen flex items-center flex-col text-white z-10 relative testColors ">
          <div className="h-40 my-12 flex items-center justify-center">
            <p className="text-8xl font-chinoise  ">GALA de l'ENIB</p>
          </div>
          <div className="h-40 -my-24 flex items-center justify-center">
            <p className="text-7xl font-chinoise  ">58 ème édition</p>
          </div>
          <div className="h-40 flex items-center justify-center ">
            <div className=" logoImg mt-80"></div>
          </div>
          <div>
            <Button />
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
