import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css';
import SearchBar from "../SearchBar/SearchBar";
import image from "./logo.png"


const NavBar = () => { 
    return (
        <nav className={style.nav}>
            <Link to='/'>
                <img id="logoPoke" src={image} className={style.logo}/>
            </Link>
            <SearchBar />
            <Link to="/pokemons"><button className={style.create}>Create</button></Link>
        </nav>
    );
}
export default NavBar