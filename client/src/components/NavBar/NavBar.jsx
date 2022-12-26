import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css';
import SearchBar from "../SearchBar/SearchBar";
import image from "../../images/logo.png"


const NavBar = () => { 
    return (
        <nav className={style.container}>
            <Link to='/'>
                <img id="logoPoke" src={image} className={style.logo}/>
            </Link>
            <SearchBar />
            <Link to="/pokemons"><button className={style.createButton}>Create</button></Link>
        </nav>
    );
}
export default NavBar