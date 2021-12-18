"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receptorController = void 0;

var _receptor = _interopRequireDefault(require("../models/receptor.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class receptorController {
  async create(request, response) {
    const {
      nome,
      apelido,
      contato
    } = request.body;
    let falha = false;
    const msg = [];

    if (!nome) {
      falha = true;
      msg.push("O nome do receptor deve ser preenchido");
    }

    if (!apelido) {
      falha = true;
      msg.push("O apelido do receptor deve ser preenchido");
    }

    if (!contato) {
      falha = true;
      msg.push("O contato do receptor deve ser preenchido");
    }

    if (falha) return response.status(404).json({
      error: true,
      message: msg,
      data: null
    });

    try {
      const receptor = await _receptor.default.create({
        nome: nome,
        apelido: apelido,
        contato: contato
      });
      return response.status(202).json({
        error: false,
        message: 'Receptor adicionado',
        data: receptor
      });
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: 'Falha ao adicionar receptor',
        data: error
      });
    }
  }

  async read(request, response) {
    try {
      const receptores = await _receptor.default.findAll({});
      if (receptores.length <= 0) return response.status(404).json({
        error: true,
        message: 'Sem receptores',
        data: null
      });
      return response.status(202).json({
        error: false,
        message: 'Lista de receptores',
        data: receptores
      });
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: 'Falha ao listar receptores',
        data: error
      });
    }
  }

  async readOne(request, response) {
    if (!request.params.id) return response.status(400).json({
      error: true,
      message: 'Selecione um receptor',
      data: null
    });
    const id = request.params.id;

    try {
      const receptor = await _receptor.default.findOne({
        where: {
          id: id
        }
      });
      if (!receptor) return response.status(404).json({
        error: true,
        message: 'Receptor não foi achado',
        data: null
      });
      return response.status(202).json({
        error: false,
        message: 'Receptor foi achado',
        data: receptor
      });
    } catch (error) {}
  }

}

exports.receptorController = receptorController;