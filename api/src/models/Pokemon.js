const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    hp: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    },
  },
  { timestamps: false }
);
};
