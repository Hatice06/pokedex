import React from "react";

const Logo = (props) => {
  
  // const logWhenClicked = () => {
  //   console.log("Image is clicked!");
  // };

  return (
    <header>
      <h1>{props.appName}</h1>
      <img
        // onClick={logWhenClicked}
         onClick={props.handleClick}
        src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"}
        alt={"a pokemon"}
      ></img>
    </header>
  );
};

export default Logo;
