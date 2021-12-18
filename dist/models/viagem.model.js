"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Viagem extends _sequelizeTypescript.Model {}

exports.default = Viagem;
Viagem.init({
  id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  data_ida: {
    type: _sequelizeTypescript.DataType.DATEONLY,
    allowNull: false
  },
  endereco_id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false
  },
  pessoa_id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    allowNull: false
  }
}, {
  tableName: "viagem",
  sequelize: _database.default
});