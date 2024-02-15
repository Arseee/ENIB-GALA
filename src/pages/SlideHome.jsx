export default function SlideHome() {
  return (
    <div>
      <div className="image-background"></div>
      <div className=" h-screen flex items-center flex-col text-blue-200 z-10 relative testColors ">
        <div className="h-40 my-12 flex items-center justify-center">
          <p className="text-8xl font-chinoise  ">GALA de l'ENIB</p>
        </div>
        <div className="h-40 -my-24 flex items-center justify-center">
          <p className="text-7xl font-chinoise  ">58 ème édition</p>
        </div>
        <div className="h-40 flex items-center justify-center ">
          <div className=" logoImg mt-80"></div>
        </div>
      </div>
    </div>
  );
}
