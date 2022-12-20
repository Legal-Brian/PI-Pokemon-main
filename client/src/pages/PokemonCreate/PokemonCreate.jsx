import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon, getTypes } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import validate from "./validate";

const PokemonCreate = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const types = useSelector(state => state.types);
    const pokemons = useSelector(state => state.allPokemons.map( pok => pok.name))

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
    });
    const [errors, setErrors] = useState({});
    
    useEffect(() => {
        dispatch(getTypes());
    },[dispatch]);

    const handleChange = (e) => {
        setInput({...input, [e.target.name] : e.target.value})
        setErrors(validate({...input, [e.target.name] : e.target.value}, pokemons))
    }
    
    function handleChecked(e){
        if (e.target.checked) {
            setInput({...input, types: [...input.types , e.target.value]})
            setErrors(validate({...input, types: [...input.types , e.target.value]}, pokemons))   
        } else if (!e.target.checked) {
            setInput({...input, types: input.types.filter(el => el !== e.target.value)})
            setErrors(validate({...input, types: input.types.filter(el => el !== e.target.value)}, pokemons))    
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(Object.keys(errors).length === 0 && input.name.length){
            dispatch(postPokemon(input));
            setInput({
                name: '',
                hp: '',
                attack: 0,
                defense: 0,
                speed: 0,
                weight: 0,
                height: 0,
                types: [],
            })
            alert("Pokemon created successfuly!");
            history.push("/home")
        } else{
            alert("Correct the error to create the Pokemon");
        }
    }
    
    const handlerImageDefault = (event) => {
        event.preventDefault()
        setInput({...input, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"})
    }

    return(
        <div>
            <h1>Create Pokemon!</h1>
            <form onSubmit={event => handleSubmit(event)}>    
                <div className="name">
                    <label>Name: </label>
                    <input type="text" name="name" value={input.name} onChange={handleChange} placeholder="Add Name"/>
                    {errors.name ? (<div><span>{errors.name}</span></div>) : <i></i>}
                </div>
                <div>
                    <label>Image: </label>
                    <input type="text" name="image" value={input.image}  onChange={handleChange} placeholder="Add Image URL"/>
                    <button onClick={handlerImageDefault}>Image Default</button>
                    {errors.image ? (<div><span>{errors.image}</span></div>) : <i></i>}
                </div>
                <div className="stats">
                    <div className="hp">
                        <label>HP: </label>
                        <input type="range" name="hp" min={1} max={255} value={input.hp} onChange={handleChange}/>
                        <span>{input.hp ? input.hp : 0}</span>
                        {errors.hp ? (<div><span>{errors.hp}</span></div>) : <i></i>}
                    </div>
                    <div className="attack">
                        <label>Attack: </label>
                        <input type="range" name="attack" min={1} max={255} value={input.attack} onChange={handleChange}/>
                        <span>{input.attack ? input.attack : 0}</span>
                        {errors.attack ? (<div><span>{errors.attack}</span></div>) : <i></i>}
                    </div>
                    <div className="defense">
                        <label>Defense: </label>
                        <input type="range" name="defense" min={1} max={255} value={input.defense} onChange={handleChange}/>
                        <span>{input.defense ? input.defense : 0}</span>
                        {errors.defense ? (<div><span>{errors.defense}</span></div>) : <i></i>}
                    </div>
                    <div className="speed">
                        <label>Speed: </label>
                        <input type="range" name="speed" min={1} max={255} value={input.speed} onChange={handleChange}/>
                        <span>{input.speed ? input.speed : 0}</span>
                        {errors.speed ? (<div><span>{errors.speed}</span></div>) : <i></i>}
                    </div>
                </div>
                <div className="measures">
                    <div>
                        <label>Height: </label>
                        <input type="range" name="height" min={1} max={100} value={input.height} onChange={handleChange}/>
                        <span>{input.height ? ((input.height / 10).toFixed(1) + "m") : (0 + "m")}</span>
                        {errors.height ? (<div><span>{errors.height}</span></div>) : <i></i>}
                    </div>
                    <div>
                        <label>Weight: </label>
                        <input type="range" name="weight" min={1} max={1500} value={input.weight} onChange={handleChange}/>
                        <span>{input.weight ? ((input.weight/10).toFixed(1)) + "kg" : 0 + "kg"}</span>
                        {errors.weight ? (<div><span>{errors.weight}</span></div>) : <i></i>}
                    </div>
                </div>
                <div> 
                    <label>Type(s): </label>
                    {types.map( type => (
                        <div>
                            <label> {type.name[0].toUpperCase().concat(type.name.slice(1))}</label>
                            <input type="checkbox" value={type.name} onChange={(e) => handleChecked(e)}/>
                        </div>
                    ))}
                    {errors.types ? (<div><span>{errors.types}</span></div>) :<i></i>}
                </div>  
                <button type="submit">Create Pokemon</button>
            </form>
        </div>
    )
}

export default PokemonCreate;