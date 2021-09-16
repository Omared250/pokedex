import { useState } from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';

const App = () => {

  // const state = useState()
  // const appName = state[0];
  // const setAppName = state[1];
  const [appName, setAppName] = useState('Pokedex')
  const [pokemonName, setPokemonName] = useState('Charmander')

  const changeAppname = () => {
    console.log(`appName was ${appName}`);
    setAppName('OmarDex')
    console.log(`appName NOW is ${appName}`);
  }

  return (
    <div>
      <Logo appName={appName} handleClick={changeAppname} />
      <BestPokemon name={pokemonName} abilities={['Anticipation', 'Adaptability', 'Run-Away', 'Fire', 'Fire']} />
      <CaughtPokemon />
    </div>
  );
}

export default App;
