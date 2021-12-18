"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _auth = require("../controller/auth.controller");

const router = (0, _express.Router)();
const auth = new _auth.authController();
router.post('/', auth.login);
router.post('/ativar', auth.ativar);
var _default = router;
exports.default = _default;