import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function PokemonMoves(props) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        fetch(
            `https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`
        )
            .then((res) => res.json())
            .then((data) => {
                setPokemonData(data)
            })
    }, [props.pokemonId])

    return pokemonData && (
        <div>
            <p>{pokemonData.name}'s moves:</p>
            <ul>
                {pokemonData.moves.map((move, index) => {
                    return <li key={index}>{move.move.name}</li>;
                })}
            </ul>
        </div>
    )
}

export default PokemonMoves;