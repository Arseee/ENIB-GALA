import "../components/Button.css";

export default function SlideProg() {
  return (
    <div className="carousel-content bg-black h-screen flex items-center justify-center containers font">
      <div className=" container-info  h-screen">
        <div className="flex justify-center flex-col">
          <div className="flex items-center justify-center">
            <p className="text-blue-100 text-3xl pt-4 underline underline-offset-8 font-bold ">
              Programme
            </p>
          </div>
          <p className="text-blue-100 text-2xl font-bold absolute top-0 ml-52 mt-20 ">
            13 avril 2024
          </p>
          <div className="flex items-center justify-center text-center mt-3">
            <ul className="pt-16 text-blue-200  text-xl  ">
              <li>Début de la remise des diplômes</li>
              <li className="py-4 font-bold">15h30 - 17h30</li>
              <li className="border-t-2 border-blue-100   w-60 mx-auto bottom-0 left-0 right-0 pt-8"></li>
              <li>Cocktail offert par l'administration</li>
              <li className="py-4 font-bold">17h30 - 18h45</li>
              <li className="border-t-2 border-blue-100  w-60 mx-auto bottom-0 left-0 right-0 pt-8"></li>
              <li>Accueil pour le repas</li>
              <li className="py-4 font-bold">18h45 - 21h</li>
              <li className="border-t-2 border-blue-100  w-60 mx-auto bottom-0 left-0 right-0 pt-8"></li>
              <li>Début de soirée</li>
              <li className="py-4 font-bold">21h - 1H</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-100  white-bar"></div>
      <div className=" container-info  h-screen">
        <div className="flex justify-center flex-col">
          <div className="flex items-center justify-center">
            <p className="text-blue-100 text-3xl pt-4 underline underline-offset-8 font-bold ">
              Menu
            </p>
          </div>
          <div className="flex items-center justify-center text-center ">
            <ul className="pt-4 text-blue-200  text-lg mx-10 ">
              <li className="font-bold">Entrée (au choix)</li>
              <li className="pt-4  text-sm ">
                Chair de Crabe Façon Nem, Crème de Carotte de Sable au Paprika
                Fumé, Jus de Carcasse au Kari Goss
              </li>
              <li className="pt-4 pb-8  text-sm">
                Entrée végétarienne : Tartine d’Avocat, Tomate Cœur de Bœuf,
                Mozzarella Di Buffala, Pesto d’Herbes
              </li>
              <li className="border-t-2 border-blue-100 w-60 mx-auto bottom-0 left-0 right-0 pt-3"></li>
              <li className="font-bold">Plat (au choix)</li>
              <li className="pt-3  text-sm">
                Poisson du Marché, Risotto Parmesan, Crème de Carotte Jaune
              </li>
              <li className="pt-3  text-sm">
                Suprême de Volaille de Kercoat, Farce Fine aux Eclats de
                Pistaches, Carottes Rôties Ou Canette Jaune Grillée, Condiment
                d’Airelles, Jus de Porto
              </li>
              <li className="pt-3 pb-8  text-sm">
                Plat végétarien : Risotto Safran, Courgettes Confites et Feta
              </li>
              <li className="border-t-2 border-blue-100  w-60 mx-auto bottom-0 left-0 right-0 pt-3"></li>
              <li className="font-bold">Entrée (au choix)</li>
              <li className="pt-3  text-sm">
                Tartelette Bananes Caramélisées, Citron Vert, Meringue Soufflée
              </li>
              <li className="pt-3  text-sm">
                Saint Honoré Praliné, Sauce Cacao Amère
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

//  BOUTON RESERVER
