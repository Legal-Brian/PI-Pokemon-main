import axios from "axios";

export const getCharacters = () => {
    return async function(dispatch){
        const json = await axios.get("http://localhost:3001/pokemons");
        return dispatch({
            type: "GET_CHARACTERS",
            payload: json.data
        })
    }
}