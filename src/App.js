import React from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';

const App = () => (
  <div>
    <Logo appName='Pokedex' />
    <BestPokemon abilities={['Anticipation', 'Adaptability', 'Run-Away', 'Fire', 'Fire']} />
    <CaughtPokemon />
  </div>
)

export default App;
