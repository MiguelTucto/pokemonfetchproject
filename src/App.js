//theme
import "primereact/resources/themes/viva-light/theme.css";

//core
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeflex/primeflex.min.css"

//icons
import "primeicons/primeicons.css";
import PokemonSection from "./pokemon/pages/PokemonSection";
function App() {
  return (
    <div className="App">
      <PokemonSection />
    </div>
  );
}

export default App;
