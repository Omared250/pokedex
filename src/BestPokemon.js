import React from "react";

const BestPokemon = (props) => {
  return (
    <div>
      <p>My favorite pokemon is Charmander!</p>
      <ul>
        {props.abilities.map((abiliti, index) => (
          <li key={index}>{abiliti}</li>
        ))}
      </ul>
    </div>
  );
}

export default BestPokemon