const { Type } = require("../../db");
const fetch = require("node-fetch")

const getTypes = async () => {
const api = await fetch('https://pokeapi.co/api/v2/type');
const types = await api.json();
for( let type of types.results ) {
    Type.findOrCreate({
        where: {name: type.name}
    })
}
return Type.findAll();
}

module.exports = getTypes