import React from "react";

const Card = ({name, image, types}) => {
    return(
        <div>
            <h3>{name}</h3>
            <img src={image} />
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
        </div>
    )
}

export default Card;