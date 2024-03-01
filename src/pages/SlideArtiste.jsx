import React from "react";

export default function SlideArtiste() {
  return (
    <div className="carousel-content bg-black  w-full h-screen flex  items-start justify-center">
      <div className="mt-20 flex flex-col items-center">
        <p className="text-4xl text-blue-100 font-bold underline underline-offset-8">
          {" "}
          Artistes
        </p>
        <div className="flex flex-col items-center text-white text-4xl space-y-20 mt-20">
          <p>La Théorie des Cordes</p>
          <p>Brak Guest Trospa</p>
          <p>Dj Play M</p>
          <p>Kram</p>
        </div>
      </div>
    </div>
  );
}
