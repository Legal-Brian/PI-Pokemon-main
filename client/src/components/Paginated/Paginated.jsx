import React from "react";

const Paginated = ({pokemonsPerPage, allPokemons, paginated}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul className="paginated">
                {pageNumbers?.map(number => (
                        <button onClick={()=> paginated(number)}>{number}</button>
                ))}
            </ul>
        </nav>
    )
}

export default Paginated;