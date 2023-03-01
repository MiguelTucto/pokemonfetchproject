//theme
import "primereact/resources/themes/viva-light/theme.css";

//core
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeflex/primeflex.min.css"

//icons
import "primeicons/primeicons.css";
import PokemonSection from "./pokemon/pages/PokemonSection";
import {Menubar} from "primereact/menubar";
import {Route, Routes} from "react-router-dom";
import PokemonList from "./pokemon/pages/PokemonList";
function App() {
    const items = [
        {
            label: 'Pokemon',
            icon: 'pi pi-animal',
            url: '/pokemon'
        },
        {
            label:'Pokemon List',
            icon: 'pi pi-list',
            url: '/plist'
        }
    ]

  return (
    <div>
        <Menubar model={items}/>
        <Routes>
            <Route path='/pokemon' element={<PokemonSection />}></Route>
            <Route path='/plist' element={<PokemonList />}></Route>
        </Routes>
    </div>
  );
}

export default App;
