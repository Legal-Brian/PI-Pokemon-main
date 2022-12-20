const { Pokemon , Type } = require("../db");

const postPokemon = async (name, hp, attack, defense, speed, height, weight, types , image) => {
    const pokemonCreated = await Pokemon.create({
        name, 
        image,
        hp, 
        attack, 
        defense, 
        speed, 
        height, 
        weight, 
    })
                
    const pokemonTypes = await Type.findAll({
        where: { name: types }
    })
                
    pokemonCreated.addType(pokemonTypes)
    return res.send('Pokemon created successfuly')
}


module.exports = postPokemon;