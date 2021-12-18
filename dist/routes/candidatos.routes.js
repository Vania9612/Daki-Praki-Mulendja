"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _isAuthenticate = _interopRequireDefault(require("../middlewares/isAuthenticate"));

var _candidatos = require("../controller/candidatos.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
const candidatos = new _candidatos.candidatosController();
router.get('/candidatar/:encomenda', _isAuthenticate.default, candidatos.candidatar);
router.get('/candidaturas', _isAuthenticate.default, candidatos.minhasCandidaturas);
router.get('/verCandidatos/:encomenda', _isAuthenticate.default, candidatos.verCandidatos);
router.post('/aprovarCandidato/:candidatura_id', _isAuthenticate.default, candidatos.aprovarCandidato);
var _default = router;
exports.default = _default;