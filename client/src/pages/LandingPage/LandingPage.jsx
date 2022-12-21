import React from "react";
import {Link} from "react-router-dom";
import style from "./LandingPage.module.css";

const LandingPage = () => {
    return(
        <div className={style.container}>
            <h1 className={style.welcome}>Welcome to the Pokedex</h1>
            <Link to="/home">
                <button className={style.enter}>Enter</button>
            </Link>
        </div>
    )
}

export default LandingPage;