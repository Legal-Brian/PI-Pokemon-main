import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../actions/index";
import { Link } from "react-router-dom";
import Card from "../Card/Card"


const Home = () => {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);

    useEffect(()=>{
        dispatch(getPokemons());
    },[dispatch]);

    const handlerClick = (event) => {
        event.preventDefault();
        dispatch(getPokemons());
    }

    return(
        <div>
            <Link to="/pokemon">Create Pokemon</Link>
            <h1>Pokedex</h1>
            <button onClick={e=>{handlerClick(e)}}>Recharge Pokemons</button>
            <div>
                <select>
                    <option value="ascendant">Ascendant</option>
                    <option value="descendant">Descendant</option>
                </select>
                <select>
                    <option value="all">All</option>
                    <option value="normal">Normal</option>
                    <option value="fighting">Fighting</option>
                    <option value="flying">Flying</option>
                    <option value="poison">Poison</option>
                    <option value="ground">Ground</option>
                    <option value="rock">Rock</option>
                    <option value="bug">Bug</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="electric">Electric</option>
                    <option value="psychic">Psychic</option>
                    <option value="ice">Ice</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                    <option value="unknown">Unknown</option>
                    <option value="shadow">Shadow</option>
                </select>
                <select>
                <option value="all">All</option>
                <option value="created">Created</option>
                <option value="existing">Existing</option>
                </select>
                {
                    allPokemons?.map(ele => {
                        return(
                            <fragment>
                                <Link to={"/home" + ele.id}>
                                <Card name={ele.name} image={ele.image} types={ele.types}/>
                                </Link>
                            </fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;