import { useState } from "react";

const CaughtPokemon = () => {
  const date = new Date().toLocaleDateString();

  const [caught, setCaught] = useState(0);

  const catchPokemon = () => {
    setCaught(caught + 1)
  }

  return (<div>
    <p>Caught {caught} Pokémon on {date}</p>
    <button onClick={catchPokemon}>catch</button>
  </div>
  );
}

export default CaughtPokemon
