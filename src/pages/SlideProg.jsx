import "../components/Button.css";

export default function SlideProg() {
  return (
    <div className="carousel-content bg-black h-screen flex items-center justify-center containers font">
      <div className=" container-info  h-screen">
        <div className="flex justify-center flex-col">
          <div className="flex items-center justify-center">
            <p className="text-blue-100 text-3xl pt-8 underline underline-offset-8 font-bold ">
              Programme
            </p>
          </div>
          <div className="flex items-center justify-center text-center ">
            <ul className="pt-16 text-blue-200  text-xl ">
              <li>Remise des diplômes</li>
              <li className="py-4 font-bold">15h - 17h30</li>
              <li className="border-t-2 border-blue-100   w-60 mx-auto bottom-0 left-0 right-0 pt-8"></li>
              <li>Cocktail</li>
              <li className="py-4 font-bold">17h30 - 18h45</li>
              <li className="border-t-2 border-blue-100  w-60 mx-auto bottom-0 left-0 right-0 pt-8"></li>
              <li>Repas</li>
              <li className="py-4 font-bold">19h - 22h</li>
              <li className="border-t-2 border-blue-100  w-60 mx-auto bottom-0 left-0 right-0 pt-8"></li>
              <li>Soirée</li>
              <li className="py-4 font-bold">22h - 1H</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-100  white-bar"></div>
      <div className=" container-info  h-screen">
        <div className="flex justify-center flex-col">
          <div className="flex items-center justify-center">
            <p className="text-blue-100 text-3xl pt-10 underline underline-offset-8 font-bold ">
              Menu
            </p>
          </div>
          <div className="flex items-center justify-center text-center ">
            <ul className="pt-16 text-blue-200  text-xl ">
              <li>Entrée</li>
              <li className="py-8 font-bold">15h - 17h30</li>
              <li className="border-t-2 border-blue-100 w-60 mx-auto bottom-0 left-0 right-0 pt-8"></li>
              <li>Plat</li>
              <li className="py-8 font-bold">17h30 - 18h45</li>
              <li className="border-t-2 border-blue-100  w-60 mx-auto bottom-0 left-0 right-0 pt-8"></li>
              <li>Dessert</li>
              <li className="py-8 font-bold">19h - 22h</li>
              <div className="btn-grad">RESERVER</div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
