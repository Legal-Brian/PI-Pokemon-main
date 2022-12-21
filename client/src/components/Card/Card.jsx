import React from "react";
import style from "./Card.module.css";


const Card = ({name, image, types}) => {
    return(
        <div className={style.container}>
            <figure className={style.card}>
                <div>
                    <h3 className={style.cardName}>{name[0].toUpperCase() + name.slice(1)}</h3>
                </div>
                <div className={style.cardImageContainer}>
                    <img className={style.pokemonImg} src={image} />
                </div>
                {types.length === 2 ? (
                    <div className={style.types}>
                        <h5 className={style.cardType}>{types[0]}</h5>
                        <h5 className={style.cardType}>{types[1]}</h5>
                    </div>
                ) : (
                    <div className={style.types}>
                        <h5 className={style.cardType}>{types[0]}</h5>
                    </div>
                )}
            </figure>
        </div>
    )
}

export default Card;