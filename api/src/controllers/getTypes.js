const { Type } = require("../db");
const fetch = require("node-fetch");

const getTypes = async () => {
const api = await fetch('https://pokeapi.co/api/v2/type');
const types = await api.json();
for( let type of types.results ) {
    await Type.findOrCreate({
        where: {name: type.name}
    });
};
return await Type.findAll();
}

module.exports = getTypes;