const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo para los Tipos de Pokemon
  sequelize.define("type", {
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
  },
  { timestamps: false }
);
};