// Carousel.js
import React from "react";
import { CCarousel, CCarouselItem, CCarouselCaption } from "@coreui/react";
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
        {/* Ajoute une div avec l'image en arrière-plan */}
        <div className="image-background"></div>
        {/* Contenu texte au-dessus de l'image */}
        <div className=" h-screen flex items-center flex-col text-white z-10 relative testColors ">
          <div className="h-40 my-12 flex items-center justify-center">
            <p className="text-8xl ">GALA de l'ENIB</p>
          </div>
          <div className="h-40 -my-24 flex items-center justify-center">
            <p className="text-7xl ">58 ème édition</p>
          </div>
          <div className="h-40 flex  items-center justify-center">{/* Ajoute ici le contenu du logo si nécessaire */}</div>
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
