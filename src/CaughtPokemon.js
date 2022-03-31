import React, { useState } from "react";

const CaughtPokemon = (props) => {
  // const [caught, setCaught] = useState(0);
  const [caught, setCaught] = useState([]);
  //console.log(caught)
  const catchPokemon = () => {
    // const newArray = caught.concat(ourPokemon);
    // setCaught(caught + 1);
   setCaught(caught.concat("Pikachu"));
   // const newArray = [...caught];
   
  };

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      { <ul>
        {caught.map((pokedex, index) => {
          return <li key={index}>{pokedex}</li>;
        })}
      </ul>}

      <button onClick={catchPokemon}>Click me!</button>
    </div>
  );
};
export default CaughtPokemon;





