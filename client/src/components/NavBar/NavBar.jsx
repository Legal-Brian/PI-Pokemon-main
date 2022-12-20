import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css';
import SearchBar from "../SearchBar/SearchBar";


const NavBar = () => {
    const image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/640px-International_Pokémon_logo.svg.png";  
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