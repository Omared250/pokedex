import { useState } from "react";

const CaughtPokemon = (props) => {

  const pokemons = ['Bulbasaur', 'Ivysaur', 'Charizard', 'Alakazam']
  const random = Math.floor(Math.random() * pokemons.length)

  const [caught, setCaught] = useState([]);

  const catchPokemon = () => {
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
