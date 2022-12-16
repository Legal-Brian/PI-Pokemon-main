
const inicialState = {
    pokemons : [],
    allPokemons: [],
    types: []
}

const rootReducer = (state = inicialState, action) => {
    const allPokemons = state.allPokemons;
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
            const typeFiltered = action.payload === "all" ? allPokemons : allPokemons.filter(el => el.types.find(el => el === action.payload));
            return{
                ...state,
                pokemons: typeFiltered,
            }
        case "FILTER_CREATED":
            const createdFilter = action.payload === "created" ? allPokemons.filter(el => el.createdInDb) : allPokemons.filter(el => !el.createdInDb);
            return{
                ...state,
                pokemons: action.payload === "all" ? state.allPokemons : createdFilter,
            }
        case "ORDER_BY_NAME":
            const sortedName = action.payload === "ascendant" ? state.pokemons.sort(function(a,b){
                if (a.name > b.name){
                    return 1
                }
                if (b.name > a.name){
                    return -1
                }
                return 0;
            }) : state.pokemons.sort(function(a,b){
                if (a.name > b.name){
                    return -1
                }
                if (b.name > a.name){
                    return 1
                }
                return 0
            })
            return {
                ...state,
                pokemons: sortedName
            }
            case "ORDER_BY_ATTACK":
                const sortedArr = action.payload === "minor attack" ? state.pokemons.sort(function(a,b){
                    if (a.attack > b.attack){
                        return 1
                    }
                    if (b.attack > a.attack){
                        return -1
                    }
                    return 0;
                }) : state.pokemons.sort(function(a,b){
                    if (a.attack > b.attack){
                        return -1
                    }
                    if (b.attack > a.attack){
                        return 1
                    }
                    return 0
                })
                return {
                    ...state,
                    pokemons: sortedArr
                }
        default:
            return state;
    }
};

export default rootReducer;