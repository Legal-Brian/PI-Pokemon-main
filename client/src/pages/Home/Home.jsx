import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getPokemons, filterPokemonsByType, getTypes, filterCreated, orderByName, orderByAttack} from "../../redux/actions/index";
import Card from "../../components/Card/Card";
import Paginated from "../../components/Paginated/Paginated";


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
    const [ordenByName, setOrdenByName] = useState("");
    const [ordenByAttack, setOrdenByAttack] = useState("");

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handlerClick = (event) => {
        event.preventDefault();
        dispatch(getPokemons());
    }

    const handleFilterType = (event) => {
        event.preventDefault()
        dispatch(filterPokemonsByType(event.target.value));
    }

    const handleFilterCreated = (event) =>{
        event.preventDefault()
        dispatch(filterCreated(event.target.value));
    }
    
    const handleOrderedByName = (event) => {
        event.preventDefault();
        dispatch(orderByName(event.target.value));
        setCurrentPage(1);
        setOrdenByName(`Ordenado ${event.target.value}`)
    }
    const handleOrderedByAttack = (event) => {
        event.preventDefault();
        dispatch(orderByAttack(event.target.value));
        setCurrentPage(1);
        setOrdenByAttack(`Ordenado ${event.target.value}`)
    }
    return(
        <div>
            <Link to="/pokemon">Create Pokemon</Link>
            <h1>Pokedex</h1>
            <div>
                <button onClick={e=>{handlerClick(e)}}>Restore</button>
                <select onChange={e => handleOrderedByName(e)}>
                    <option value="ascendant">Ascendant</option>
                    <option value="descendant">Descendant</option>
                </select>
                <select onChange={e => handleOrderedByAttack(e)}>
                    <option value="biggest attack">Biggest Attack</option>
                    <option value="minor attack">Minor Attack</option>
                </select>
                <select onChange={e => handleFilterType(e)}>
                    <option value="all">All</option>
                    {allTypes?.map((ele) => (
                    <option value={ele.name}>{ele.name[0].toUpperCase()+ele.name.slice(1)}</option>
                    ))}
                </select>
                <select onChange={e => handleFilterCreated(e)}>
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