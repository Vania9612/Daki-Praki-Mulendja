"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Receptor extends _sequelizeTypescript.Model {}

exports.default = Receptor;
Receptor.init({
  id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  pessoa_id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false
  },
  encomendante: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'receptor',
  sequelize: _database.default
});