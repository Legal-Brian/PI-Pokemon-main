import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemon } from "../../redux/actions/index";
import style from "./SearchBar.module.css"

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleInputChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(name !== ''){
            dispatch(getNamePokemon(name))
            setName("")
        }
    }

    return (
        <form className={style.container} onSubmit={(e) => handleSubmit(e)}>
            <input className={style.searchText} type="text" placeholder="Search Pokemon..." value = {name} onChange={(e) => handleInputChange(e)}/>
            <button type="submit" className={style.searchButton}>🔍</button>
        </form>
    )
}

export default SearchBar;