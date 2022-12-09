const { Router } = require("express");
const fetch = require("node-fetch")
const {Type} = require("../db")

const router = Router();

router.get('/', async (req, res) => {
    try {
        const api = await fetch('https://pokeapi.co/api/v2/type');
        const types = await api.json();
        for( let type of types.results ) {
            const exist = await Type.findOne({where: { name: type.name }})
            if(exist) return res.json(await Type.findAll())
            await Type.create({ name: type.name})
        }
        res.json(await Type.findAll());
    } catch (error) {
        res.status(404).json(error.message)   
    }
});

module.exports = router;