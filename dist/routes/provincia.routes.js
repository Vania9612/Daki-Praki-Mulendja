"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _provincia = require("../controller/provincia.controller");

const router = (0, _express.Router)();
const provincia = new _provincia.provinciaController();
router.get("/read", provincia.read);
router.get("/readOne/:id", provincia.readOne);
var _default = router;
exports.default = _default;