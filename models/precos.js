'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Precos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Precos.init({
    peso: DataTypes.FLOAT,
    sul: DataTypes.FLOAT,
    centro: DataTypes.FLOAT,
    norte: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Precos',
  });
  return Precos;
};