import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemon } from "../../redux/actions/index";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleInputChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getNamePokemon(name));
    }

    return (
        <div>
            <input type="text" placeholder="Search Name" onChange={event => handleInputChange(event)} />
            <button type="submit" onClick={event => handleSubmit(event)}>Search</button>
        </div>
    )
}

export default SearchBar;