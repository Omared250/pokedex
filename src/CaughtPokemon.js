import { useState } from "react";

const CaughtPokemon = (props) => {

  const [caught, setCaught] = useState([]);

  const catchPokemon = () => {
    // array of pokemon's name
    const pokemons = ['Bulbasaur', 'Ivysaur', 'Charizard', 'Alakazam']
    // pick a random number of a pokemon name
    const random = Math.floor(Math.random() * pokemons.length)
    // set the pokemon name
    setCaught(caught.concat(pokemons[random]))
  }

  return (<div>
    <p>Caught {caught.length} Pokémon on {props.date}</p>
    <ul>
      {caught.map((pokemon, index) => {
        return <li key={index}>{pokemon}</li>
      })}
    </ul>
    <button onClick={catchPokemon}>catch a Pokemon!</button>
  </div>
  );
}

export default CaughtPokemon
