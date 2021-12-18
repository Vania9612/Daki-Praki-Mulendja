"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usuarioController = void 0;

var _sendSMS = _interopRequireDefault(require("../services/sendSMS"));

var _pessoa = _interopRequireDefault(require("../models/pessoa.model"));

var _usuario = _interopRequireDefault(require("../models/usuario.model"));

var _generatePassword = _interopRequireDefault(require("../services/generatePassword"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class usuarioController {
  async create(request, response) {
    const {
      nome,
      contato,
      email,
      senha
    } = request.body;
    let erro = false;
    let msg = [];

    if (!nome) {
      erro = true, msg.push("Informe o seu nome");
    }

    if (!contato) {
      erro = true;
      msg.push("Informe o seu número de contato");
    }

    if (!email) {
      erro = true;
      msg.push("Informe o seu email");
    }

    if (!senha) {
      erro = true;
      msg.push("Defina a senha de acesso");
    }

    if (erro) return response.status(404).json({
      error: true,
      message: msg,
      data: null
    });

    try {
      const codigo = _generatePassword.default.generateCode(6);

      const novaPessoa = await _pessoa.default.create({
        nome: nome,
        contato: contato,
        email: email,
        senha: senha
      });

      try {
        const novoUser = await _usuario.default.create({
          codigo: codigo,
          pessoa_id: novaPessoa.id
        });

        try {
          const message = "Bem vindo(a), " + novaPessoa.nome + ", o seu código de ativação é: " + codigo;

          const sms = _sendSMS.default.sendMessage(novaPessoa.contato, message);
        } catch (error) {
          await _pessoa.default.destroy({
            where: {
              id: novaPessoa.id
            }
          });
          await _usuario.default.destroy({
            where: {
              id: novoUser.id
            }
          });
          return response.status(404).json({
            error: true,
            message: 'Falha no registro',
            data: error
          });
        }
      } catch (error) {
        await _pessoa.default.destroy({
          where: {
            id: novaPessoa.id
          }
        });
        return response.status(404).json({
          error: true,
          message: 'Falha ao salvar dados do usuário',
          data: error
        });
      }

      return response.status(202).json({
        error: false,
        message: 'Registro feito com sucesso'
      });
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: 'Falha no registro',
        data: error
      });
    }
  }

  async read(request, response) {
    try {
      const usuarios = await _usuario.default.findAll({});
      if (usuarios.length <= 0) return response.status(202).json({
        error: false,
        message: 'Sem usuários',
        data: null
      });
      let lista = [];

      for (let index = 0; index < usuarios.length; index++) {
        const pessoa = await _pessoa.default.findOne({
          where: {
            id: usuarios[index].pessoa_id
          }
        });
        lista.push({
          'id': pessoa.id,
          'nome': pessoa.nome,
          'apelido': pessoa.apelido ? pessoa.apelido : 'Desconhecido',
          'contato': pessoa.contato,
          'sexo': pessoa.sexo ? pessoa.sexo : 'Desconhecido',
          'email': pessoa.email ? pessoa.email : 'Desconhecido',
          'dataNascimento': usuarios[index].dataNascimento ? usuarios[index].dataNascimento : 'Desconhecida',
          'tipoDocumento': usuarios[index].tipoDocumento ? usuarios[index].tipoDocumento : 'Desconhecido',
          'nrDocumento': usuarios[index].nrDocumento ? usuarios[index].nrDocumento : 'Desconhecido',
          'estado': usuarios[index].estado
        });
      }

      return response.status(202).json({
        error: false,
        message: 'Lista de usuários',
        data: lista
      });
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: 'Falha na listagem',
        data: error
      });
    }
  }

  async readOne(request, response) {
    const id = request.params.id;
    if (!id) return response.status(400).json({
      error: true,
      message: 'Selecione o usuario',
      data: null
    });

    try {
      const pessoa = await _pessoa.default.findOne({
        where: {
          id: id
        }
      });
      if (!pessoa) return response.status(404).json({
        error: true,
        message: 'Usuário não foi encontrado',
        data: null
      });

      try {
        const usuario = await _usuario.default.findOne({
          where: {
            pessoa_id: pessoa.id
          }
        });
        return response.status(202).json({
          error: false,
          message: 'Dados do usuário',
          data: {
            'id': pessoa.id,
            'nome': pessoa.nome,
            'apelido': pessoa.apelido ? pessoa.apelido : 'Desconhecido',
            'contato': pessoa.contato,
            'sexo': pessoa.sexo ? pessoa.sexo : 'Desconhecido',
            'email': pessoa.email ? pessoa.email : 'Desconhecido',
            'dataNascimento': usuario.dataNascimento ? usuario.dataNascimento : 'Desconhecida',
            'tipoDocumento': usuario.tipoDocumento ? usuario.tipoDocumento : 'Desconhecido',
            'nrDocumento': usuario.nrDocumento ? usuario.nrDocumento : 'Desconhecido',
            'estado': usuario.estado
          }
        });
      } catch (error) {
        return response.status(404).json({
          error: true,
          message: 'Falha ao listar dados do usuário',
          data: error
        });
      }
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: 'Falha buscando usuário',
        data: error
      });
    }
  }

}

exports.usuarioController = usuarioController;