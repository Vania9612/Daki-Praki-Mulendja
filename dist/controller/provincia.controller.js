"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provinciaController = void 0;

var _provincia = _interopRequireDefault(require("../models/provincia.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class provinciaController {
  async read(request, response) {
    try {
      const provincias = await _provincia.default.findAll({});
      if (provincias.length <= 0) return response.status(404).json({
        error: true,
        message: 'Sem dados',
        data: null
      });
      return response.status(202).json({
        error: false,
        message: 'Lista de províncias',
        data: provincias
      });
    } catch (error) {
      return response.status(404).json({
        error: true,
        message: 'Falha ao listar províncias',
        data: error
      });
    }
  }

  async readOne(request, response) {
    if (!request.params.id) return response.status(400).json({
      error: true,
      message: 'Nenhuma província foi selecionada',
      data: null
    });
    const id = request.params.id;

    try {
      const provincia = await _provincia.default.findOne({
        where: {
          id: id
        }
      });
      if (!provincia) return response.status(404).json({
        error: true,
        message: 'Província não achada',
        data: null
      });
      return response.status(202).json({
        error: false,
        message: 'Província achada',
        data: provincia
      });
    } catch (error) {}
  }

}

exports.provinciaController = provinciaController;