import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import image from "./Pokemon.png"

export const Navbar = () => {
  return (
    <div>
      <header>
        <Link to="/">
            <div >
          <img src={image}/>
            </div>
        </Link>
        <button>
        <Link to="/home">Pokedex</Link>
        </button>
        <button>
        <Link to="/create">Create</Link>
        </button>
        <SearchBar></SearchBar>
      </header>
    </div>
  );
};
