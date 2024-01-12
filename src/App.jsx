import "./App.css";
import '@coreui/coreui/dist/css/coreui.min.css'
import MyCarousel from "./components/CarouselV2";
function App() {
  return (
    <div className="h-full">
      {/* Ajoute ici le contenu que tu veux afficher en dehors du carousel */}
        <MyCarousel />
      {/* Intègre le carousel à la page */}

      {/* Ajoute ici le reste du contenu que tu veux afficher en dehors du carousel */}
{/*       <footer>
        <p>© 2024 Mon Site</p>
      </footer> */}
    </div>
  );
}

export default App;
