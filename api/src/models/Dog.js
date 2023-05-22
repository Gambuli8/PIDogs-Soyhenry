const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        isAlpha: true,
        len: [3, 20],
      }
    },
    image: {
      type: DataTypes.STRING,
      validate : {
        isUrl: true,
      },
      allowNull: false,
    },
    height: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    weight: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{timestamps: false});
};
