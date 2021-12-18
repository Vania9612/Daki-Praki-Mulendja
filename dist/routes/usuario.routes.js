"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _usuario = require("../controller/usuario.controller");

const router = (0, _express.Router)();
const usuario = new _usuario.usuarioController();
router.post("/create", usuario.create);
router.get("/read", usuario.read);
router.get("readOne/:id", usuario.readOne);
var _default = router;
exports.default = _default;