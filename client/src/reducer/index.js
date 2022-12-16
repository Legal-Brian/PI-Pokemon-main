
const inicialState = {
    pokemons : [],
    allPokemons: [],
    types: []
}

const rootReducer = (state = inicialState, action) => {
    switch(action.type){
        case "GET_POKEMONS":
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
            }
        case "GET_TYPES":
            return{
                ...state,
                types: action.payload
            }
        case "FILTER_BY_TYPE":
            const allPokemons = state.allPokemons;
            const typeFiltered = action.payload === "all" ? allPokemons : allPokemons.filter(el => el.types.find(el => el === action.payload));
            return{
                ...state,
                pokemons: typeFiltered,
            }
            
        default:
            return state;
    }
};

export default rootReducer;