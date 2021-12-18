'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Distritos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Distritos.init({
    nome: DataTypes.STRING,
    codigo: DataTypes.STRING,
    provincia_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Distritos',
  });
  return Distritos;
};