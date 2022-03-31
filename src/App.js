import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import "./App.css";



function App() {
  let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  let date = new Date().toLocaleDateString();

  const logWhenClicked = () => {
    console.log("Image is clicked!");
  };

  return (
    <div>
      <Logo appName={"Hatice's Pokedex"} handleClick={logWhenClicked} />
      <BestPokemon  abilities={abilities} />
      <CaughtPokemon date={date}/>
    </div>
  );
}

export default App;


