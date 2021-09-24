import React, { useState } from "react";

function PokemonCity() {
    const [city, setCity] = useState("");

    const updateCity = (event) => {
        setCity(event.target.value)
    }

    return (
        <div>
            <input type='text' value={city} placeholder='Enter de city name' onChange={updateCity} />
            <p>Welcome to the city of {city}</p>
        </div>
    );
}

export default PokemonCity;