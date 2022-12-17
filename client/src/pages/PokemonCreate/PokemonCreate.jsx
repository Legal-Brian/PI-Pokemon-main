import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon, getTypes } from "../../redux/actions";

const PokemonCreate = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);

    const [input, setInput] = useState({
        name: "",
        image: "",
        hp: 0, 
        attack: 0 , 
        defense: 0, 
        speed: 0, 
        height: 0, 
        weight: 0,
        types: []
    })
    useEffect(() => {
        dispatch(getTypes());
    },[dispatch]);

    return(
        <div>
            <h1>Create Pokemon!</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" value={input.name} name="name" placeholder="add name"/>
                </div>
                <div>
                    <label>Image</label>
                    <input type="text" value={input.image} name="image" placeholder="add image url"/>
                </div>
                <div>
                    <label>HP</label>
                    <input type="number" value={input.hp} name="hp"/>
                </div>
                <div>
                    <label>Attack</label>
                    <input type="number" value={input.attack} name="attack"/>
                </div>
                <div>
                    <label>Defense</label>
                    <input type="number" value={input.defense} name="defense"/>
                </div>
                <div>
                    <label>Speed</label>
                    <input type="number" value={input.speed} name="speed"/>
                </div>
                <div>
                    <label>Height</label>
                    <input type="number" value={input.height} name="height"/>
                </div>
                <div>
                    <label>Weight</label>
                    <input type="number" value={input.weight} name="weight"/>
                </div>
                <div>
                    <label>Type 1</label>
                    <select>
                        {types?.map((ele) => (
                            <option value={ele.name}>{ele.name[0].toUpperCase()+ele.name.slice(1)}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Type 2</label>
                    <select>
                        {types?.map((ele) => (
                            <option value={ele.name}>{ele.name[0].toUpperCase()+ele.name.slice(1)}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PokemonCreate;