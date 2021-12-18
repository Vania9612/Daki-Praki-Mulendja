"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Encomenda extends _sequelizeTypescript.Model {}

exports.default = Encomenda;
Encomenda.init({
  id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  codigo: {
    type: _sequelizeTypescript.DataType.STRING,
    allowNull: true
  },
  peso: {
    type: _sequelizeTypescript.DataType.FLOAT,
    allowNull: true
  },
  preco: {
    type: _sequelizeTypescript.DataType.FLOAT,
    allowNull: true
  },
  provinciaProv: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false
  },
  endereco_id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false
  },
  categoria_id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false
  },
  pessoa_id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false
  },
  receptor_id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false
  },
  descricao: {
    type: _sequelizeTypescript.DataType.TEXT,
    allowNull: false
  },
  atribuida: {
    type: _sequelizeTypescript.DataType.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: "encomenda",
  sequelize: _database.default
});