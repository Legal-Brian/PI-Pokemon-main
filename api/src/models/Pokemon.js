const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png',
      allowNull: true,
    },
    hp: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: { min: 1 },
      allowNull: true,
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: { min: 1 },
      allowNull: true,
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: { min: 1 },
      allowNull: true,
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: { min: 1 },
      allowNull: true,
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: { min: 1 },
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: { min: 1 },
      allowNull: true,
    },
  },
  { timestamps: false }
);
};
