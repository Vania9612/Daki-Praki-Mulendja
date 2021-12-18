"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authController = void 0;

var _usuario = _interopRequireDefault(require("../models/usuario.model"));

var _bcrypt = require("bcrypt");

var _jsonwebtoken = require("jsonwebtoken");

var _authConfig = _interopRequireDefault(require("../config/authConfig"));

var _pessoa = _interopRequireDefault(require("../models/pessoa.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class authController {
  async ativar(request, response) {
    const {
      codigo
    } = request.body;

    if (!codigo) {
      return response.status(400).json({
        error: true,
        message: 'Introduza o código de validação',
        data: null
      });
    }

    try {
      const usuario = await _usuario.default.findOne({
        where: {
          codigo: codigo
        }
      });
      if (!usuario) return response.status(404).json({
        error: true,
        message: 'Código inválido',
        data: null
      });

      try {
        await _usuario.default.update({
          estado: true,
          codigo: null
        }, {
          where: {
            id: usuario.id
          }
        });
        return response.status(202).json({
          error: false,
          message: 'Usuário autenticado',
          data: null
        });
      } catch (error) {
        return response.status(404).json({
          error: true,
          message: 'Falha autenticando o usuário',
          data: error
        });
      }
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: 'Falha ao buscar dados do usuario',
        data: error
      });
    }
  }

  async login(request, response) {
    console.log(request.body);
    const {
      email,
      senha
    } = request.body;
    let erro = false;
    let msg = [];

    if (!email) {
      erro = true, msg.push("Informe o email ou contato");
    }

    if (!senha) {
      erro = true, msg.push("Informe a senha");
    }

    if (erro) return response.status(404).json({
      error: true,
      data: msg
    });
    let pessoa = null;
    pessoa = await _pessoa.default.findOne({
      where: {
        email: email
      }
    });
    if (!pessoa) pessoa = await _pessoa.default.findOne({
      where: {
        contato: email
      }
    });
    if (!pessoa) return response.status(404).json({
      error: true,
      message: 'O usuario não existe',
      data: null
    });
    const compared = await (0, _bcrypt.compare)(senha, pessoa.senha);
    if (!compared) return response.status(403).json({
      error: true,
      message: 'Acesso negado',
      data: null
    });

    try {
      const usuario = await _usuario.default.findOne({
        where: {
          pessoa_id: pessoa.id
        }
      });
      if (!usuario) return response.status(404).json({
        error: true,
        message: 'Usuário não existe',
        data: null
      });
      if (!usuario.estado) return response.status(401).json({
        error: true,
        message: 'Conta desativada',
        data: null
      });
      delete pessoa.senha;
      var token = (0, _jsonwebtoken.sign)({
        id: pessoa.id
      }, _authConfig.default.jwt.secret, {
        subject: String(pessoa.id),
        expiresIn: _authConfig.default.jwt.expiresIn
      });
      const objeto = {
        'id': pessoa.id,
        'nome': pessoa.nome,
        'apelido': pessoa.nome ? pessoa.nome : 'Desconhecido',
        'contato': pessoa.contato,
        'sexo': pessoa.sexo ? pessoa.sexo : 'Desconhecido',
        'email': pessoa.email ? pessoa.email : 'Desconhecido',
        'dataNascimento': usuario.dataNascimento ? usuario.dataNascimento : 'Desconhecida',
        'tipoDocumento': usuario.tipoDocumento ? usuario.tipoDocumento : 'Desconhecido',
        'nrDocumento': usuario.nrDocumento ? usuario.nrDocumento : 'Desconhecido',
        'estado': usuario.estado
      };
      return response.status(200).json({
        error: false,
        objeto,
        token
      });
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: 'Falha buscando dados do usuário',
        data: error
      });
    }
  }

}

exports.authController = authController;