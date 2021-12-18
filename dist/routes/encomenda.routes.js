"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _encomenda = require("../controller/encomenda.controller");

var _isAuthenticate = _interopRequireDefault(require("../middlewares/isAuthenticate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
const encomenda = new _encomenda.encomendaController();
router.post('/adicionar', _isAuthenticate.default, encomenda.addEncomenda);
router.get('/outras/:viagemId', _isAuthenticate.default, encomenda.outrasEncomendas);
router.get('/listar', _isAuthenticate.default, encomenda.listarEncomendas);
var _default = router;
exports.default = _default;