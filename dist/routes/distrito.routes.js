"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _distrito = require("../controller/distrito.controller");

const router = (0, _express.Router)();
const distrito = new _distrito.distritoController();
router.get("/read", distrito.read);
router.get("/readOne/:id", distrito.readOne);
var _default = router;
exports.default = _default;