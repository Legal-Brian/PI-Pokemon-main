import { connect, useDispatch } from "react-redux";


//  REDUCER
const initialState = {
	myFavorites: [],
	allCharacters: [],
};

/* export default */ function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_FAVORITE":
			return {
				allCharacters: [...state.allCharacters, action.payload],
				myFavorites: [...state.allCharacters, action.payload],
			};
		case "REMOVE_FAVORITE":
			return {
				...state,
				myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload),
			};
        default:
			return state;
    }
}

//  ACTIONS

/*export*/ function agregarFavorito(personaje) {
	return { type: "ADD_FAVORITE", payload: personaje };
}

/*export*/ function removerFavorito(id) {
	return { type: "REMOVE_FAVORITE", payload: id };
}



//  COMPONENTE

function Favorites({ myFavorites }) {
	const dispatch = useDispatch();

	function handleFilter(e) {
		dispatch(filtrarPersonajes(e.target.value));
	}

	return (
		<div>
			<h1>Favorites</h1>
			<div>
				<select
					name="order"
					onChange={e => dispatch(ordenarPersonajes(e.target.value))}
				>
					<option value="default" disabled>
						Select...
					</option>
					<option value="Ascendente">Ascendente</option>
					<option value="Descendente">Descendente</option>
				</select>
				<select name="gender" id="" onChange={handleFilter}>
					<option value="" disabled>
						Select...
					</option>
					<option value="All">All</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="unknown">Unknown</option>
				</select>
			</div>
			<div>
				{myFavorites?.map(character => (
					<div>
						<h3>
							{character.name} - {character.id}
						</h3>
						<img src={character.image} alt="" />
					</div>
				))}
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		myFavorites: state.myFavorites,
	};
}

/*export defaultconnect(mapStateToProps)(Favorites);*/ 
