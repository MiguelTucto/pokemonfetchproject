import {useEffect, useState} from "react";

function PokemonList() {
    const [pokemon, setPokemon] = useState([]);

    const fetchData = () => {
      fetch('https://pokeapi.co/api/v2/pokemon')
          .then(response => response.json())
          .then(data => setPokemon(data))
          .catch(e => console.log(e));
    };

    const newPkm = () => {
        for (let i = 1; i <= pokemon.length; i++){
            <p>{pokemon[i].name}</p>
        }
    }

    useEffect(() => {
        fetchData();
    }, [fetchData()]);
    return (

            <div>

                <p>PokemonList works!</p>
                {newPkm}
            </div>


    );
}

export default PokemonList;