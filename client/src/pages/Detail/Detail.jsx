import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar"
import style from "./Detail.module.css"

const Detail = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetails(props.match.params.id));
    },[dispatch]);

    const myPokemon = useSelector((state) => state.detail)

    return (
        <div >
            {myPokemon.length > 0 ? 
            <div>
                <NavBar/>
                <Link to="/home"><button className={style.home}>Home</button></Link>
                <div className={style.container} >

                    <div className={style.dataContainer}>
                        <h1 className={style.text}>Name: {myPokemon[0].name[0].toUpperCase().concat(myPokemon[0].name.slice(1))}</h1>
                        <h3 className={style.text}>Id: {myPokemon[0].id}</h3>
                        <img className={style.img} src={myPokemon[0].image}/>
                    </div>
                
                
                    <div className={style.allData}>
                        <div className={style.subContainer}>
                            <h3 className={style.typesContainer}>Types: {myPokemon[0].types.map(ele => <h3 className={style.typexd}>{ele[0].toUpperCase().concat(ele.slice(1))}</h3>)}</h3>
                            <h3 className={style.xd}>HP: {myPokemon[0].hp}</h3>
                            <h3 className={style.xd}>Attack: {myPokemon[0].attack}</h3>
                            <h3 className={style.xd}>Defense: {myPokemon[0].defense}</h3>
                            <h3 className={style.xd}>Speed: {myPokemon[0].speed}</h3>
                            <h3 className={style.xd}>Height: {(myPokemon[0].height / 10).toFixed(1) + "m"}</h3>
                            <h3 className={style.xd}>Weight: {(myPokemon[0].weight / 10).toFixed(1) + "kg"}</h3>
                        </div>
                    </div>
                </div>
            </div> : <p>Loading...</p>
            }
        </div>
    )
}

export default Detail;