import React from "react";
import Logo from "../assets/anienib.png";
import "./Slide.css";
export default function SlidePartenaire() {
  return (
    <div className="carousel-content bg-black  w-full h-screen flex  items-start justify-center">
      <div className="mt-20 flex flex-col items-center">
        <p className="text-4xl text-blue-100 font-bold underline underline-offset-8">
          {" "}
          Partenaire
        </p>
        <div className="logo-container mt-10">
          <img className="logo-image" src={Logo} alt="Votre Logo" />
        </div>
        <p className="font-bold text-xl text-blue-100 -mt-10">
          Association Nationale des Ingenieurs ENI de Brest
        </p>
        <p className="mx-72 text-blue-100 mt-20 text-justify text-xl leading-relaxed">
          La Nuit de l’ENIB est un moment marquant pour les diplômés et leurs
          proches ! Près de 5200 ingénieurs ENIB ont eu à clore le chapitre «
          étudiant » afin de commencer celui d'ingénieur , C'est un moment qui
          se veut et se doit d'être inoubliable. Il est donc évident pour nous,
          Association Nationale des Ingénieurs ENIB (ANIENIB), de nous joindre à
          cet évènement pour créer et entretenir les liens entre énibiens ! Nous
          souhaitons que le gala des promotions à venir, soit une réussite, et
          comme vous ne pouvez l'ignorer, toute manifestation d'importance,
          requiert des ressources financières non négligeables. C'est pourquoi
          les membres du bureau de l'ANIENIB s'adresse à vous, pour vous
          demander de bien vouloir faire un geste en leur faveur. Nos jeunes
          diplômés ne l'oublieront pas durant les très nombreuses années qui
          leur restent à travailler.
        </p>
      </div>
    </div>
  );
}
