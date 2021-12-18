"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distritoController = void 0;

var _distrito = _interopRequireDefault(require("../models/distrito.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class distritoController {
  async read(request, response) {
    try {
      const distritos = await _distrito.default.findAll({});
      if (distritos.length <= 0) return response.status(404).json({
        error: true,
        message: 'Sem dados',
        data: null
      });
      return response.status(202).json({
        error: false,
        message: 'Lista de distritos',
        data: distritos
      });
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: 'Falha ao listar distritos',
        data: error
      });
    }
  }

  async readOne(request, response) {
    if (!request.params.id) return response.status(400).json({
      error: true,
      message: 'Nenhum distrito foi selecionado',
      data: null
    });
    const id = request.params.id;

    try {
      const distrito = await _distrito.default.findOne({
        where: {
          id: id
        }
      });
      if (!distrito) return response.status(404).json({
        error: true,
        message: 'Distrito não achado',
        data: null
      });
      return response.status(202).json({
        error: false,
        message: 'Distrito achado',
        data: distrito
      });
    } catch (error) {}
  }

}

exports.distritoController = distritoController;