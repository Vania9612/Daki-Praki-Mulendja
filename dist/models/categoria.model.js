"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Categoria extends _sequelizeTypescript.Model {}

exports.default = Categoria;
Categoria.init({
  id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  descricao: {
    type: _sequelizeTypescript.DataType.STRING,
    unique: true,
    allowNull: false
  }
}, {
  tableName: "categoria",
  sequelize: _database.default
});