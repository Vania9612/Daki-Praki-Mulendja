"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.candidatosController = void 0;

var _encomenda = _interopRequireDefault(require("../models/encomenda.model"));

var _candidatos = _interopRequireDefault(require("../models/candidatos.model"));

var _categoria = _interopRequireDefault(require("../models/categoria.model"));

var _endereco = _interopRequireDefault(require("../models/endereco.model"));

var _provincia = _interopRequireDefault(require("../models/provincia.model"));

var _distrito = _interopRequireDefault(require("../models/distrito.model"));

var _pessoa = _interopRequireDefault(require("../models/pessoa.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class candidatosController {
  async candidatar(request, response) {
    const enco = request.params.encomenda;
    if (!enco) return response.status(400).json({
      error: true,
      message: 'Informe a encomenda sobre a qual deseja se candidatar',
      data: null
    });

    try {
      const procurar = await _candidatos.default.findOne({
        where: {
          encomenda_id: enco,
          candidato_id: request.userId
        }
      });
      if (procurar) return response.status(400).json({
        error: true,
        message: 'Já candidatou-se à essa encomenda',
        data: null
      });

      try {
        const encomenda = await _encomenda.default.findOne({
          where: {
            id: enco
          }
        });
        if (!encomenda) return response.status(404).json({
          error: true,
          message: 'Encomenda não foi encontrada',
          data: null
        });

        try {
          const addCand = await _candidatos.default.create({
            encomenda_id: enco,
            candidato_id: request.userId
          });
          return response.status(202).json({
            error: false,
            message: 'Candidatura adicionada com sucesso',
            data: null
          });
        } catch (error) {
          return response.status(404).json({
            error: true,
            message: 'Falha ao adicionar candidatura',
            data: error
          });
        }
      } catch (error) {
        return response.status(404).json({
          error: true,
          message: 'Falha ao candidatar',
          data: error
        });
      }
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: 'Falha buscando dados da encomenda',
        data: error
      });
    }
  }

  async minhasCandidaturas(request, response) {
    try {
      const candidaturas = await _candidatos.default.findAll({
        where: {
          candidato_id: request.userId
        }
      });
      if (candidaturas.length <= 0) return response.status(404).json({
        error: true,
        message: 'sem candidaturas',
        data: null
      });
      let lista = [];

      for (let index = 0; index < candidaturas.length; index++) {
        const encomenda = await _encomenda.default.findOne({
          where: {
            id: candidaturas[index].encomenda_id
          }
        });
        const categoria = await _categoria.default.findOne({
          where: {
            id: encomenda.categoria_id
          }
        });
        const endereco = await _endereco.default.findOne({
          where: {
            id: encomenda.endereco_id
          }
        });
        const provincia = await _provincia.default.findOne({
          where: {
            id: endereco.provincia_id
          }
        });
        const distrito = await _distrito.default.findOne({
          where: {
            id: endereco.distrito_id
          }
        });
        lista.push({
          'id': candidaturas[index].id,
          'encomenda_id': encomenda.id,
          'encomenda_codigo': encomenda.codigo,
          'encomenda_descricao': encomenda.descricao,
          'encomenda_avenida': endereco.avenida ? endereco.avenida : 'Não foi informada',
          'encomenda_rua': endereco.rua ? endereco.rua : 'Não foi informada',
          'encomenda_bairro': endereco.bairro ? endereco.bairro : 'Não foi informado',
          'encomenda_provincia': provincia.nome,
          'encomenda_distrito': distrito.nome,
          'encomenda_peso': encomenda.peso,
          'encomenda_preco': encomenda.preco,
          'categoria_descricao': categoria.descricao
        });
      }

      return response.status(202).json({
        error: false,
        message: 'Lista de candidaturas',
        data: lista
      });
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: 'Falha ao listar candidaturas',
        data: error
      });
    }
  }

  async verCandidatos(request, response) {
    const enco = request.params.encomenda;
    if (!enco) return response.status(400).json({
      error: true,
      message: 'Informe a encomenda',
      data: null
    });

    try {
      const encomenda = await _encomenda.default.findOne({
        where: {
          id: enco,
          pessoa_id: request.userId
        }
      });
      if (!encomenda) return response.status(404).json({
        error: true,
        message: 'Encomenda não existe',
        data: null
      });

      try {
        const candidatos = await _candidatos.default.findAll({
          where: {
            encomenda_id: enco,
            aprovado: false
          }
        });
        if (candidatos.length <= 0) return response.status(202).json({
          error: true,
          message: 'Sem candidatos',
          data: null
        });
        let lista = [];

        for (let index = 0; index < candidatos.length; index++) {
          const pessoa = await _pessoa.default.findOne({
            where: {
              id: candidatos[index].candidato_id
            }
          });
          lista.push({
            'id': candidatos[index].id,
            'candidato_nome': pessoa.nome,
            'candidato_apelido': pessoa.apelido,
            'candidato_telefone': pessoa.contato,
            'candidato_email': pessoa.email,
            'aprovado': candidatos[index].aprovado
          });
        }

        return response.status(202).json({
          error: true,
          message: 'Lista de candidatos',
          data: lista
        });
      } catch (error) {
        return response.status(404).json({
          error: true,
          message: 'Falha ao listar candidatos',
          data: error
        });
      }
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: 'Falha com a encomenda',
        data: error
      });
    }
  }

  async aprovarCandidato(request, response) {
    const id = request.params.candidatura_id;
    if (!id) return response.status(400).json({
      error: true,
      message: 'Selecione a candidatura que deseja aprovar',
      data: null
    });

    try {
      const canditatura = await _candidatos.default.update({
        aprovado: true
      }, {
        where: {
          id: id
        }
      });
      return response.status(202).json({
        erorr: false,
        message: 'Candidatura aprovada',
        data: null
      });
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: 'Falha ao aprovar a candidatura',
        data: error
      });
    }
  }

}

exports.candidatosController = candidatosController;