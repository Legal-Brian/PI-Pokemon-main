const { Source, Type } = require("");
const fs = require("fs");
require("dotenv").config();

router.put("/", async (req, res) => {
    // Definimos una ruta para las imagenes
    const imagesUrl = `${HOST}/images`;
  
    // Almacenamos en variables los datos pasados por body
    const { id, name, hp, attack, defense, speed, height, weight, types } =
      req.body;
  
    try {
      if (!id) throw new Error("an id is required");
      if (parseInt(id) < 501)
        throw new Error("modifying an original pokemon is not allowed");
      // Hacemos la request al indice de la base de datos por id
      const currentSource = await Source.findByPk(parseInt(id));
      // Si no existe se envía mensaje de error
      if (!currentSource) throw new Error("the requested id does not exist");
      // Si existe el id se obtienen los detalles asociados al indice
      const currentPokemon = await currentSource.getPokemon();
      // Si hay un arhivo de imagen precargado se almacena y se crea el nombre de archivo
      if (store.currentImg) {
        const fileExt = store.currentImg.name.split(".").pop();
        // Antes de actualizar la imagen se obtienen los datos del objeto anterior
        const oldPokemonData = currentSource;
        const oldFileName = oldPokemonData.image.split("/").pop();
        const oldImagePath = `./src/public/images/pokemons/${oldFileName}`;
        const oldName = oldPokemonData.name;
        if (!name) {
          //Si se carga un archivo nuevo pero no se recibe name, se usa el name anterior
          const fileName = oldName
            .split(/[ \-\_]/)
            .map((word) => `${word.toLowerCase()}`)
            .join("_");
          await store.currentImg.mv(
            `./src/public/images/pokemons/${fileName}.${fileExt}`,
            (err) => {
              if (err) throw new Error("image file upload failed");
            }
          );
          store.currentFilename = `${fileName}.${fileExt}`;
        } else {
          // Si se manda un nombre nuevo se usa para dar nombre al archivo de imagen nuevo
          const fileName = name
            .split(/[ \-\_]/)
            .map((word) => `${word.toLowerCase()}`)
            .join("_");
          await store.currentImg.mv(
            `./src/public/images/pokemons/${fileName}.${fileExt}`,
            (err) => {
              if (err) throw new Error("image file upload failed");
            }
          );
          store.currentFilename = `${fileName}.${fileExt}`;
          if (oldFileName !== "default.png") {
            fs.unlinkSync(oldImagePath);
          }
        }
      }
      // Creamos un objeto con los datos a modificar del pokemon
      const newPokemonData = {
        name,
        image: store.currentImg
          ? `${imagesUrl}/pokemons/${store.currentFilename}`
          : `${imagesUrl}/default.png`,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
      };
      // Primero se actualizan los detalles del pokemon
      await currentPokemon.update(newPokemonData);
      // Si no hay errores se actualiza la referencia
      await currentSource.update({
        name: newPokemonData.name,
        image: newPokemonData.image,
        attack: newPokemonData.attack,
      });
      // Si recibimos tipos de pokemon, se actualizan
      if (types && types.length > 0) {
        const dbTypes = [];
        for (const type of types) {
          const currentType = await Type.findByPk(parseInt(type));
          dbTypes.push(currentType);
        }
        await currentSource.setTypes(dbTypes);
      }
  
      // Limpiamos la store
      store.currentImg = null;
      store.currentFilename = null;
  
      // Recuperamos la referencia recien creada y la enviamos como response
      const updatedSource = await Source.findByPk(id, { include: Type });
  
      res.send(updatedSource);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  });
  
  ///////////////
  // DELETE route
  ///////////////
  // Borra un pokemon de la base de datos.
  // Si el id pertenece a un pokemon original envía un error.
  