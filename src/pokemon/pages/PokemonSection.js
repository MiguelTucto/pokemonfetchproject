import {useEffect, useState} from "react";
import {Card} from "primereact/card";
import {Button} from "primereact/button";

function PokemonSection() {
    const [pokemon, setPokemon] = useState([]);
    const [count, setCount] = useState(1);
    const fetchData = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
            .then(response => response.json())
            .then(data => setPokemon(data));
    };

    const footer = (
        <div>
            <Button icon="pi pi-arrow-left" onClick={decreaseButton} />
            <Button icon="pi pi-arrow-right" onClick={increaseButton}/>
        </div>
    );

    function increaseButton (e) {
        e.preventDefault();
        setCount( (count) => count + 1);
    }

    function decreaseButton (e) {
        e.preventDefault();
        setCount((count) => count - 1);
    }

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div >
            <Card title={pokemon.name} className="flex-column align-content-center justify-content-center" footer={footer}>
                <h1>{pokemon.order}</h1>
                <img src={pokemon.sprites.front_default} />
            </Card>
        </div>
    );
}

export default PokemonSection;