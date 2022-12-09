const { Pokemon, Type } = require("../../db");
const fetch = require("node-fetch")

const getApiPokemon = async () => {
  const api = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await api.json();
  const pokemonInfo = [];
  for (i = 0; i < data.results.length; i++) {
      const pokemon = await fetch(data.results[i].url);
      const info = await pokemon.json();
      pokemonInfo.push({
        id: info.id,
        name: info.name,
        image: info.sprites.other["official-artwork"].front_default,
        hp: info.stats[0].base_stat,
        attack: info.stats[1].base_stat,
        defense: info.stats[2].base_stat,
        speed: info.stats[5].base_stat,
        height: info.height,
        weight: info.weight,
        types: info.types.map((t) => t.type.name),
      });
  }
  return pokemonInfo;
};

const getDbPokemon = async () => {
  const pokemonsDb = await Pokemon.findAll({
    include: {
      model: Type,
    },
  });
  const pokemonDb = pokemonsDb.map((pokemon) => {
    const result = pokemon.toJSON();
    return {
      ...result,
      types: result.types.map((type) => type.name),
    };
  });
  return pokemonDb;
};

const getAllPokemon = async () => {
    const apiPokemon = await getApiPokemon();
    const dbPokemon = await getDbPokemon();
    const pokemon = dbPokemon.concat(apiPokemon);
    return pokemon;
  };


module.exports = {
  getAllPokemon,
  getApiPokemon,
  getDbPokemon,
} 