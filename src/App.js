import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/190")
        .then(response => response.json())
        .then(data => setPokemon(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>{pokemon.order}</h1>
      <h2>{pokemon.name}</h2>
      <h2>{pokemon.species.url}</h2>
      <h2>{pokemon.sprites.back_default}</h2>
      <img src={pokemon.sprites.front_default} width="150"/>
    </div>
  );
}

export default App;
