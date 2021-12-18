"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _receptor = require("../controller/receptor.controller");

const router = (0, _express.Router)();
const receptor = new _receptor.receptorController();
router.post("/create", receptor.create);
router.get("/read", receptor.read);
router.get("/readOne/:id", receptor.readOne);
var _default = router;
exports.default = _default;