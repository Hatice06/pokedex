import React, { useState } from "react";

const CaughtPokemon = (props) => {
  // const [caught, setCaught] = useState(0);
  const [caught, setCaught] = useState([]);
  // console.log(caught);

  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
    // console.log(event.target.value);
  };
  const catchPokemon = () => {
    // const newArray = caught.concat(ourPokemon);
    // setCaught(caught + 1);
    // setCaught(caught.concat(pokemonNameInput));
    // const newArray = [...caught];
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
        value={pokemonNameInput}
        onChange={handleInputChange}
      ></input>
      <button onClick={catchPokemon}>Click me!</button>
    </div>
  );
};
export default CaughtPokemon;
