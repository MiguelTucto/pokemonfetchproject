import {useEffect, useState} from "react";
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import { Image } from 'primereact/image';
import { Dialog } from 'primereact/dialog';



function PokemonSection() {
    const [pokemon, setPokemon] = useState([]);
    const [count, setCount] = useState(1);
    const [visible, setVisible] = useState(false);
    
    const fetchData = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
            .then(response => response.json())
            .then(data => setPokemon(data));
    };

    const footer = (
        <div className="flex justify-content-between">
            <Button icon="pi pi-arrow-left" onClick={decreaseButton} />
            <Button icon="pi pi-arrow-right" onClick={increaseButton}/>
        </div>
    );



    const header = (
        <Image alt="card" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.order}.png`} width="100" preview />
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
        <div className="card flex justify-content-center align-items-center" >
            <Card title={pokemon.name} subTitle={pokemon.order} header={header} footer={footer} className="md:w-25rem flex-column justify-content-center w-full ">
                <div>
                    <Button label="See more" onClick={() => setVisible(true)}/>
                </div>
            </Card>
            <Dialog onHide={() => setVisible(false)} header={pokemon.name} visible={visible}>
                <p>Height: {pokemon.height} cm</p>
                <p>Weight: {pokemon.weight} kg</p>
            </Dialog>
        </div>
    );
}

export default PokemonSection;