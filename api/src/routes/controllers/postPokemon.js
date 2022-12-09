const { Pokemon , Type } = require("../../db");
const getTypes = require("./getTypes")

const postPokemon = async (name, hp, attack, defense, speed, height, weight, types , image,) => {
    if ( 
        isNaN(hp) || isNaN(attack) || isNaN(defense) || isNaN(speed) || isNaN(height) || isNaN(weight)
    ) throw new Error("Alguno de los argumentos no es un numero");
  
    if (!name) throw new Error("El nombre es obligatorio" );
  
    const existe = await Pokemon.findOne({ where: { name: name } });
    if (existe) throw new Error("El pokemon ya existe" );
    else{
        const pokemon = await Pokemon.create({
            name: name.toLowerCase(),
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
        });
        const allTypes = await getTypes();
        const type = await types.forEach(async el =>{
            await allTypes 
            await pokemon.addType(await Type.findAll({
                where: {name: el.name}
            }));
        });
        console.log(type)
        
        return {info: "Pokemon creado con exito"};
    }
}

module.exports = postPokemon;