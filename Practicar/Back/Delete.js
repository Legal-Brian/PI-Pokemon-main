const { Source } = require("");
const fs = require("fs");
require("dotenv").config();


router.delete("/", async (req, res) => {
    const { id } = req.body;
    try {
      // Verificamos que recibamos un id
      if (!id) throw new Error("an id is required");
      // Verificamos que sea un numero
      if (isNaN(id)) throw new Error("a number is required");
      // Verificamos que el numero de id no pertenezca a pokemones originales
      if (parseInt(id) < 501)
        throw new Error("deleting an original pokemon is not allowed");
      // Pasadas las verificaciones almacenamos el registro de la base de datos en una variable
      const currentSource = await Source.findByPk(parseInt(id));
      // Verificamos que el registro exista
      if (!currentSource) throw new Error("the requested id does not exist");
      // Eliminamos la imagen del pokemon
      const oldPokemonData = currentSource;
      const oldFileName = oldPokemonData.image.split("/").pop();
      const oldImagePath = `./src/public/images/pokemons/${oldFileName}`;
      if (oldFileName !== "default.png") {
        fs.unlinkSync(oldImagePath);
      }
      // Eliminamos el registro de la base de datos
      await currentSource.destroy();
      res.send({ message: "Pokemon successfully eliminated" });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  });
  