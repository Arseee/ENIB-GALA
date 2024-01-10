import './App.css';
import SimpleCarousel from './components/Carousel';
function App() {
  return (
    <div className="App ">
     {/* <SimpleCarousel/> */}
     <div className="min-h-screen flex items-center  bg-blue flex w-full place-content-center space-x-40 ">
      {/* min-h-screen : prend au moins toute la hauteur de l'écran */}
      {/* flex : permet un modèle de boîte flexible pour les enfants */}
      {/* items-center : centre les enfants horizontalement */}
      {/* justify-center : centre les enfants verticalement */}

      <button
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:shadow-outline-blue active:bg-purple-800"
      >
        Bouton 1
      </button>
      <button
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Bouton 2
      </button>      <button
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-pink-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Bouton 3
      </button>
    </div>
    </div>
  );
}

export default App;
