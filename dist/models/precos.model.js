"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Precos extends _sequelizeTypescript.Model {}

exports.default = Precos;
Precos.init({
  id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  peso: {
    type: _sequelizeTypescript.DataType.FLOAT,
    unique: true,
    allowNull: false
  },
  sul: {
    type: _sequelizeTypescript.DataType.FLOAT,
    allowNull: false
  },
  centro: {
    type: _sequelizeTypescript.DataType.FLOAT,
    allowNull: false
  },
  norte: {
    type: _sequelizeTypescript.DataType.FLOAT,
    allowNull: false
  }
}, {
  tableName: "precos",
  sequelize: _database.default
});