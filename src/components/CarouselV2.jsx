// Carousel.js
import { CCarousel, CCarouselItem } from "@coreui/react";
import React from "react";
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
          <div>{/* <Button /> */}</div>
        </div>
      </CCarouselItem>

      <CCarouselItem>
        <div className="carousel-content bg-black h-screen flex items-center justify-center containers">
          <div className=" container-info flex items-center justify-around flex-col">
            <div className="flex items-center justify-around flex-col">
              <p className="text-white text-2xl">Menu</p>
              <p className="text-white text-2xl">Horaire</p>
              <p className="text-white text-2xl">TRAD</p>
            </div>
            <div>
              <p className="text-white text-2xl">Menu</p>
              <p className="text-white text-2xl">Horaire</p>
              <p className="text-white text-2xl">TRAD</p>
            </div>
          </div>
          <div className="bg-white  white-bar"></div>
          <div className=" container-info  flex items-center justify-center">
            <p className="text-white text-2xl">Programme </p>
          </div>
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
