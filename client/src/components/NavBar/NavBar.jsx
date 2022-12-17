import React from "react";
import { Link } from "react-router-dom";
import image from "./Pokemon.png"

const NavBar = () => {
  return (
    <div>
      <header>
        <Link to="/">
            <div >
          <img src={image}/>
            </div>
        </Link>
        <Link to="/home"><button>Pokedex</button></Link>
        <Link to="/pokemons"><button>Create</button></Link>
      </header>
    </div>
  );
};
export default NavBar