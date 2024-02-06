export default function SlideProg() {
  return (
    <div className="carousel-content bg-black h-screen flex items-center justify-center containers font">
      <div className=" container-info  h-screen">
        <div className="flex justify-around flex-col">
          <div className="flex items-center justify-center">
            <p className="text-white text-4xl pt-16 underline underline-offset-8 font-bold ">
              Programme
            </p>
          </div>
          <div className="items-start justify-start">
            <ul className="pt-20 text-white space-y-20 pl-12 xl:text-2xl lg:text-xl sm:text-md ">
              <li className="">
                Remise des diplômes :
                <span className="font-bold pl-4 "> 15h - 17h30</span>
              </li>
              <li>
                {" "}
                Cocktail : <span className="font-bold pl-4">17h30 - 18h45</span>
              </li>
              <li>
                {" "}
                Repas : <span className="font-bold pl-4"> 19h - 22h</span>
              </li>
              <li>
                {" "}
                Soirée : <span className="font-bold pl-4">22h - 1H</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white  white-bar"></div>
      <div className=" container-info  h-screen">
        <div className="flex justify-around flex-col">
          <div className="flex items-center justify-center">
            <p className="text-white text-4xl pt-16 underline underline-offset-8 font-bold ">
              Menu
            </p>
          </div>
          <div className="items-start justify-start">
            <ul className="pt-20 text-white space-y-20 pl-12 xl:text-2xl lg:text-xl sm:text-md ">
              <li className="">
                Entrée :<span className="font-bold pl-4 "> 15h - 17h30</span>
              </li>
              <li>
                {" "}
                Plat : <span className="font-bold pl-4">17h30 - 18h45</span>
              </li>
              <li>
                {" "}
                Dessert : <span className="font-bold pl-4"> 19h - 22h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
