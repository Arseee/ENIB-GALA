// Carousel.js
import { CCarousel, CCarouselItem } from "@coreui/react";
import React from "react";
import SlideHome from "../pages/SlideHome";
import SlideProg from "../pages/SlideProg";
import Button from "./Boutton";
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
        <SlideHome />
      </CCarouselItem>
      <CCarouselItem>
        <SlideProg />
      </CCarouselItem>
      <CCarouselItem>
        <div className="carousel-content bg-blue-500 h-screen flex items-center justify-center">
          <h3 className="text-white">Slide 3</h3>
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div className="carousel-content bg-blue-300 h-screen ">
          <h3 className="text-white">Slide 4</h3>
          <Button />
        </div>
      </CCarouselItem>
    </CCarousel>
  );
};

export default Carousel;
