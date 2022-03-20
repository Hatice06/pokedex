import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import "./App.css";



function App() {
  let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  let date = new Date().toLocaleDateString();
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon  abilities={abilities} />
      <CaughtPokemon date={date}/>
    </div>
  );
}



export default App;


