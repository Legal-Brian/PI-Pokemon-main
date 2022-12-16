const { Pokemon , Type } = require("../db");
const getTypes = require("./getTypes");

const postPokemon = async (name, hp, attack, defense, speed, height, weight, types , image,) => {
    try{
        if (!name) {
            throw new Error("Name is required" );
        }
        if (!hp) hp = 10;
        if (!attack) attack = 10;
        if (!defense) defense = 10;
        if (!speed) speed = 10;
        if (!height) height = 1;
        if (!weight) weight = 10;
        if (!types ) types = [{"name": "normal"}];
        if (!image) image = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png";
        
        if (isNaN(hp) || isNaN(attack) || isNaN(defense) || isNaN(speed) || isNaN(height) || isNaN(weight)) throw new Error("Incorrect data type");
        
        else{
            if (types.length > 2) throw new Error("Can have no more than two types");
            
            const exist = await Pokemon.findOne({ where: { name: name } });
            if (exist) throw new Error("Pokemon already exist");
            
            else {
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
                await getTypes();
                await types.forEach(async el =>{
                    await pokemon.addType(await Type.findAll({
                        where: {name: el.name}
                    }));
                });
            };
            return "Pokemon successfully created";
        };
    }
    catch (error){
        return(error.message);
    };
};

module.exports = postPokemon;