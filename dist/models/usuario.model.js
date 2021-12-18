"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Usuario extends _sequelizeTypescript.Model {}

exports.default = Usuario;
Usuario.init({
  id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  dataNascimento: {
    type: _sequelizeTypescript.DataType.DATEONLY,
    allowNull: true
  },
  tipoDocumento: {
    type: _sequelizeTypescript.DataType.INTEGER
  },
  nrDocumento: {
    type: _sequelizeTypescript.DataType.STRING,
    unique: true
  },
  codigo: {
    type: _sequelizeTypescript.DataType.STRING,
    allowNull: true
  },
  estado: {
    type: _sequelizeTypescript.DataType.BOOLEAN,
    defaultValue: false
  },
  endereco_id: {
    type: _sequelizeTypescript.DataType.INTEGER
  },
  pessoa_id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'usuario',
  sequelize: _database.default
});