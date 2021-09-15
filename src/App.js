import React from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';

function logWhenClicked() {
  console.log('Charmander was clicked!!!');
}

const App = () => (
  <div>
    <Logo appName='Pokedex' handleClick={logWhenClicked} />
    <BestPokemon abilities={['Anticipation', 'Adaptability', 'Run-Away', 'Fire', 'Fire']} />
    <CaughtPokemon />
  </div>
)

export default App;
