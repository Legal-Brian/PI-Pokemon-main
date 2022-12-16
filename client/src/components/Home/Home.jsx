import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemons, filterPokemonsByType, getTypes } from "../../actions/index";
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";


const Home = () => {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);
    const allTypes = useSelector((state) => state.types)

    useEffect(()=>{
        dispatch(getPokemons());
        dispatch(getTypes())
    },[dispatch]);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handlerClick = (event) => {
        event.preventDefault();
        dispatch(getPokemons());
    }

    const handleFilterType = (event) => {
        dispatch(filterPokemonsByType(event.target.value));
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
                <select onChange={e => handleFilterType(e)}>
                    <option value="all">All</option>
                    {allTypes?.map((ele) => (
                    <option value={ele.name}>{ele.name[0].toUpperCase()+ele.name.slice(1)}</option>
                    ))}
                </select>
                <select>
                <option value="all">All</option>
                <option value="created">Created</option>
                <option value="existing">Existing</option>
                </select>
                <Paginated pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginated={paginated}/>
                {
                    currentPokemons?.map(ele => {
                        return(
                            <fragment className="container" >
                                <Link to={"/home" + ele.id}>
                                <Card name={ele.name} image={ele.image} types={ele.types}/>
                                </Link>
                            </fragment>
                        )
                    })
                }
                <Paginated pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginated={paginated}/>
            </div>
        </div>
    )
}

export default Home;