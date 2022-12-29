const { Pokemon, conn } = require('../../src/db.js');
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

const expect = chai.expect;

describe('Pokemon models', () => {

  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('Modelo Pokemon', () => {

      it('debe devolver un error si no tiene nombre', async () => {
        var poke = async () => await Pokemon.create({})
        expect(poke()).to.be.rejected
      });

      it('debe devolver un error si image no es un string', async () => {
        const poke = async () => await Pokemon.create({ name: 'Messi', Image:10})
        const poke2 = await Pokemon.create({ name: 'Messi', image: "imagenDeMessi.png"})
        expect(poke()).to.be.rejected
        expect(poke2.image).to.eql("imagenDeMessi.png")
      });

      it('debe devolver un error si hp no es un número', async () => {
        const poke = async () => await Pokemon.create({ name: 'Messi', hp:"buena vida"})
        const poke2 = await Pokemon.create({ name: 'Messi', hp:10})
        expect(poke()).to.be.rejected
        expect(poke2.hp).to.eql(10)
      });

      it('debe devolver un error si attack no es un número', async () => {
        const poke = async () => await Pokemon.create({ name: 'Messi', attack:"buen ataque"})
        const poke2 = await Pokemon.create({ name: 'Messi', attack:10})
        expect(poke()).to.be.rejected
        expect(poke2.attack).to.eql(10)
      });

      it('debe devolver un error si defense no es un número', async () => {
        const poke = async () => await Pokemon.create({ name: 'Messi', defense:"buena defensa"})
        const poke2 = await Pokemon.create({ name: 'Messi', defense:10})
        expect(poke()).to.be.rejected
        expect(poke2.defense).to.eql(10)
      });

      it('debe devolver un error si speed no es un número', async () => {
        const poke = async () => await Pokemon.create({ name: 'Messi', speed:"buena velocidad"})
        const poke2 = await Pokemon.create({ name: 'Messi', speed:10})
        expect(poke()).to.be.rejected
        expect(poke2.speed).to.eql(10)
      });

      it('debe devolver un error si height no es un número', async () => {
        const poke = async () => await Pokemon.create({ name: 'Messi', height:"buena altura"})
        const poke2 = await Pokemon.create({ name: 'Messi', height:10})
        expect(poke()).to.be.rejected
        expect(poke2.height).to.eql(10)
      });

      it('debe devolver un error si weight no es un número', async () => {
        const poke = async () => await Pokemon.create({ name: 'Messi', weight:"buen peso"})
        const poke2 = await Pokemon.create({ name: 'Messi', weight:10})
        expect(poke()).to.be.rejected
        expect(poke2.weight).to.eql(10)
      });
      
    });
  });
});