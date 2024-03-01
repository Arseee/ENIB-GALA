// Carousel.js
import { CCarousel, CCarouselItem } from "@coreui/react";
import React from "react";
import SlideArtiste from "../pages/SlideArtiste";
import SlideCreator from "../pages/SlideCreator";
import SlideHome from "../pages/SlideHome";
import SlidePartenaire from "../pages/SlidePartenaire";
import SlideProg from "../pages/SlideProg";
import { SlideStaff } from "../pages/SlideStaff";
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
        <div className="carousel-content bg-black  h-screen flex items-center justify-center">
          <SlideStaff />
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <SlidePartenaire />
      </CCarouselItem>
      <CCarouselItem>
        <SlideArtiste />
      </CCarouselItem>
      <CCarouselItem>
        <SlideCreator />
      </CCarouselItem>
    </CCarousel>
  );
};

export default Carousel;
