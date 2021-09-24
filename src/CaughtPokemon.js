import { useState } from "react";

const CaughtPokemon = (props) => {

  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState('');

  const catchPokemon = () => {
    // array of pokemon's name
    // const pokemons = ['Bulbasaur', 'Ivysaur', 'Charizard', 'Alakazam']
    // pick a random number of a pokemon name
    // const random = Math.floor(Math.random() * pokemons.length)
    // set the pokemon name
    // if (pokemonNameInput === '') {
    //   return window.alert('You need a pokemon name!')
    // }
    // else {
    //   return setCaught(caught.concat(pokemonNameInput))
    // }
    setCaught(caught.concat(pokemonNameInput))
    setPokemonNameInput('')
  }

  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value)
  }

  return (<div>
    <p>Caught {caught.length} Pokémon on {props.date}</p>
    <ul>
      {caught.map((pokemon, index) => {
        return <li key={index}>{pokemon === '' ? window.alert('You need a pokemon name!') : pokemon}</li>
      })}
    </ul>
    <input type='text'
      value={pokemonNameInput}
      onChange={handleInputChange} />
    <button onClick={catchPokemon}>catch a Pokemon!</button>
  </div>
  );
}

export default CaughtPokemon
