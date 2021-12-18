"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAuthenticated;

var _jsonwebtoken = require("jsonwebtoken");

var _authConfig = _interopRequireDefault(require("../config/authConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAuthenticated(request, response, next) {
  const {
    authorization
  } = request.headers;

  if (!authorization) {
    return response.status(401).json({
      error: true,
      message: "Token is missing"
    });
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const decodedToken = (0, _jsonwebtoken.verify)(token, _authConfig.default.jwt.secret);
    const {
      id
    } = decodedToken;
    request.userId = id;
    return next();
  } catch (error) {
    return response.status(401).json({
      error: true,
      message: "Invalid token"
    });
  }
}