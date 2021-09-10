import React from "react";

const BestPokemon = () => {
    const abilities = ['Anticipation', 'Adaptability', 'Run-Away', 'Fire'];
    return (
      <div>
        <p>My favorite pokemon is Charmander!</p>
        <ul>
          {abilities.map((abiliti, index) => (
            <li key = {index}>{abiliti}</li>
          ))}
        </ul>
      </div>
    );
}

export default BestPokemon