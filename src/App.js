import React from 'react';

const App = () => (
  <div>
    <Logo/>
    <BestPokemon/>
  </div>
)

const Logo = () => (
  <div>
    <header>
      <h1>Welcome to the Pokedex</h1>
      <img src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png' alt = '#'></img>
    </header>
  </div>
)

const BestPokemon = () => (
  <p>My favorite pokemon is Charmander!</p>
)

export default App;
