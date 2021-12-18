"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Endereco extends _sequelizeTypescript.Model {}

exports.default = Endereco;
Endereco.init({
  id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  avenida: {
    type: _sequelizeTypescript.DataType.STRING
  },
  rua: {
    type: _sequelizeTypescript.DataType.STRING
  },
  bairro: {
    type: _sequelizeTypescript.DataType.STRING
  },
  distrito_id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false
  },
  provincia_id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false
  },
  encomenda: {
    type: _sequelizeTypescript.DataType.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: "endereco",
  sequelize: _database.default
});