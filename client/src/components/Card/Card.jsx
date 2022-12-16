import React from "react";
import "./Card.css"


const Card = ({name, image, types}) => {
    return(
        <div className="container">
            <figure className="card">
                <div>
                    <h3 className="cardName">{name}</h3>
                </div>
                <div className="cardImageContainer">
                    <img src={image} />
                </div>
                {types.length === 2 ? (
                    <div className="types">
                        <h5 className="cardType">{types[0]}</h5>
                        <h5 className="cardType">{types[1]}</h5>
                    </div>
                ) : (
                    <div className="types">
                        <h5 className="cardType">{types[0]}</h5>
                    </div>
                )}
            </figure>
        </div>
    )
}

export default Card;