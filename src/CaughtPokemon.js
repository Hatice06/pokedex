import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);

  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  };
  const catchPokemon = () => {
    if (pokemonNameInput !== "") {
      setCaught(caught.concat(pokemonNameInput));
    }
    setPokemonNameInput("");
  };

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      {
        <ul>
          {caught.map((pokedex, index) => {
            return <li key={index}>{pokedex}</li>;
          })}
        </ul>
      }
      <input
        type="text"
        placeholder="Pokemon Name"
        value={pokemonNameInput}
        onChange={handleInputChange}
      ></input>
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </div>
  );
};
export default CaughtPokemon;
