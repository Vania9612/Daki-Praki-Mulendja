"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../database"));

var _sequelizeTypescript = require("sequelize-typescript");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Provincia extends _sequelizeTypescript.Model {}

exports.default = Provincia;
Provincia.init({
  id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: _sequelizeTypescript.DataType.STRING,
    allowNull: false,
    unique: true
  },
  codigo: {
    type: _sequelizeTypescript.DataType.STRING,
    allowNull: false,
    unique: true
  },
  zona: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'provincia',
  sequelize: _database.default
});