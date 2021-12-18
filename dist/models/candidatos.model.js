"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Candidatos extends _sequelizeTypescript.Model {}

exports.default = Candidatos;
Candidatos.init({
  id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  encomenda_id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false
  },
  candidato_id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false
  },
  aprovado: {
    type: _sequelizeTypescript.DataType.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: "candidatos",
  sequelize: _database.default
});