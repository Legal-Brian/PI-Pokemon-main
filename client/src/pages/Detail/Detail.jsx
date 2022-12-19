import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions";


const Detail = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetails(props.match.params.id));
    },[dispatch]);

    const myPokemon = useSelector((state) => state.detail)

    return (
        <div>
            {myPokemon.length > 0 ? 
            <div>
                <h1>Name: {myPokemon[0].name}</h1>
                <h2>Types: {myPokemon[0].types.map(ele => ele + (" "))}</h2>
                <img src={myPokemon[0].image}/>
                <h3>HP: {myPokemon[0].hp}</h3>
                <h3>Attack: {myPokemon[0].attack}</h3>
                <h3>Defense: {myPokemon[0].defense}</h3>
                <h3>Speed: {myPokemon[0].speed}</h3>
                <h3>Height: {myPokemon[0].height}</h3>
                <h3>Weight: {myPokemon[0].weight}</h3>
            </div> : <p>Loading...</p>
            }
        </div>
    )
}

export default Detail;