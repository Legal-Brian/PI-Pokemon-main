import axios from "axios";

export const getPokemons = () => {
    return async (dispatch) =>{
        const json = await axios.get("http://localhost:3001/pokemons");
        return dispatch({
            type: "GET_POKEMONS",
            payload: json.data
        })
    }
};

export const getTypes = () => {
    return async (dispatch) =>{
        const json = await axios.get("http://localhost:3001/types");
        return dispatch({
            type: "GET_TYPES",
            payload: json.data
        })
    }
};

export const filterPokemonsByType = (payload) =>{
    return {
        type: "FILTER_BY_TYPE",
        payload,
    }
}