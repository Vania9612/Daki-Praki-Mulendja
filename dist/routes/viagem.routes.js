"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _isAuthenticate = _interopRequireDefault(require("../middlewares/isAuthenticate"));

var _viagem = require("../controller/viagem.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
const viagem = new _viagem.viagemController();
router.post('/adicionar', _isAuthenticate.default, viagem.addViagem);
router.get('/listar', _isAuthenticate.default, viagem.readViagem);
var _default = router;
exports.default = _default;