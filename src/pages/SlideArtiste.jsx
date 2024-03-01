import React from "react";
import ArtisteCard from "../components/ArtisteCard";

export default function SlideArtiste() {
  return (
    <div className="carousel-content bg-black  w-full h-screen flex  items-start justify-center">
      <div className="mt-20 flex flex-col items-center">
        <p className="text-4xl text-blue-100 font-bold underline underline-offset-8">
          {" "}
          Artistes
        </p>
        <div className="flex flex-col items-center text-blue-100 text-4xl space-y-20 mt-20">
          <ArtisteCard nom={"La Théorie des Cordes"} />
          <ArtisteCard nom={"Brak Guest Trospa"} />
          <ArtisteCard nom={"Dj Play M"} />
          <ArtisteCard nom={"Kram"} />
        </div>
      </div>
    </div>
  );
}
