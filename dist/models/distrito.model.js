"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Distrito extends _sequelizeTypescript.Model {}

exports.default = Distrito;
Distrito.init({
  id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: _sequelizeTypescript.DataType.STRING,
    unique: true,
    allowNull: false
  },
  codigo: {
    type: _sequelizeTypescript.DataType.STRING,
    unique: true,
    allowNull: false
  },
  provincia_id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false
  }
}, {
  tableName: "distritos",
  sequelize: _database.default
});