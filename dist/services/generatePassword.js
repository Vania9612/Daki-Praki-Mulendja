"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class generatePassword {
  generatePass(length) {
    var result = '';
    var character = '!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    var characterLength = character.length;

    for (var i = 0; i < length; i++) {
      result += character.charAt(Math.floor(Math.random() * characterLength));
    }

    return result;
  }

  generateCode(length) {
    var result = '';
    var character = '0123456789';
    var characterLength = character.length;

    for (var i = 0; i < length; i++) {
      result += character.charAt(Math.floor(Math.random() * characterLength));
    }

    return result;
  }

}

var _default = new generatePassword();

exports.default = _default;