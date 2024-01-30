export default function SlideProg() {
  return (
    <div className="carousel-content bg-black h-screen flex items-center justify-center containers">
      <div className=" container-info flex items-start justify-center">
        <div className="flex items-center justify-around flex-col">
          <p className="text-white text-4xl pt-16 underline underline-offset-8">
            Menu
          </p>
          <ul className="text-2xl pt-16 text-white space-y-12">
            <li>Horaire</li>
            <li>TRAD</li>
            <li>TRAD</li>
            <li>TRAD</li>
            <li>TRAD</li>
          </ul>
        </div>
      </div>
      <div className="bg-white  white-bar"></div>
      <div className=" container-info  flex items-start justify-center">
        <p className="text-white text-4xl pt-16 underline underline-offset-8">
          Programme
        </p>
      </div>
    </div>
  );
}
