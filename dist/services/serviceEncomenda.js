"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _precos = _interopRequireDefault(require("../models/precos.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class serviceEncomenda {
  async generatePrice(zonaDestino, zonaProve, encoPeso) {
    const dif = Math.abs(zonaProve - zonaDestino);

    try {
      const preco = await _precos.default.findOne({
        where: {
          peso: encoPeso
        }
      });
      if (dif <= 1) return preco.sul;
      if (dif == 2) return preco.norte;
    } catch (error) {
      return false;
    }
  }

}

var _default = new serviceEncomenda();

exports.default = _default;