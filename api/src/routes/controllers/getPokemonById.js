const fetch = require("node-fetch")
const { Pokemon } = require("../../db");

const getPokemonById = async (id) => {
    try {
        if (isNaN(id)) {
            const db = await Pokemon.findOne({where: { id: id }});
            const pokemonDb = [{
                id: db.id,
                name: db.name,
                type: db.type.map((t) => t.name),
                image: db.image,
                hp: db.hp,
                attack: db.attack,
                defense: db.defense,
                speed: db.speed,
                height: db.height,
                weight: db.weight,
            }];
            return pokemonDb;
        } else {
            const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const info = await api.json();
            const pokemonId = [{
                id: info.id,
                name: info.name,
                type: info.types.map((t) => t.type.name),
                image: info.sprites.other["official-artwork"].front_default,
                hp: info.stats[0].base_stat,
                attack: info.stats[1].base_stat,
                defense: info.stats[2].base_stat,
                speed: info.stats[5].base_stat,
                height: info.height,
                weight: info.weight,
            }];
            return pokemonId;
        }
    } catch (error) {
        throw new Error("Pokemon not found")   
    }
};

module.exports= getPokemonById;