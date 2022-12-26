import React from "react";
import style from "./Paginated.module.css"

const Paginated = ({pokemonsPerPage, allPokemons, paginated}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <nav>
            {pageNumbers?.map(number => (
                <button className={style.paginated} onClick={()=> paginated(number)}>{number}</button>
            ))}
        </nav>
    )
}

export default Paginated;