"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelizeTypescript = require("sequelize-typescript");

var _database = _interopRequireDefault(require("../database"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Pessoa extends _sequelizeTypescript.Model {}

exports.default = Pessoa;
Pessoa.init({
  id: {
    type: _sequelizeTypescript.DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: _sequelizeTypescript.DataType.STRING(200)
  },
  apelido: {
    type: _sequelizeTypescript.DataType.STRING(200),
    allowNull: true
  },
  contato: {
    type: _sequelizeTypescript.DataType.STRING(15),
    allowNull: false
  },
  sexo: {
    type: _sequelizeTypescript.DataType.STRING,
    allowNull: true
  },
  email: {
    type: _sequelizeTypescript.DataType.STRING(200),
    allowNull: true,
    unique: true
  },
  senha: {
    type: _sequelizeTypescript.DataType.TEXT,
    allowNull: false
  }
}, {
  tableName: 'pessoa',
  sequelize: _database.default
});
Pessoa.beforeCreate((user, option) => {
  return _bcrypt.default.hash(user.senha, 10).then(hash => {
    user.senha = hash;
  }).catch(erro => {
    console.log("No password");
  });
});