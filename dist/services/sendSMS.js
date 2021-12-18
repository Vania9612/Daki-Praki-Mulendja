"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _twilio = require("twilio");

var _authConfig = _interopRequireDefault(require("../config/authConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class sendSMS {
  async sendMessage(to, body) {
    const client = new _twilio.Twilio(_authConfig.default.twilio.accountSid, _authConfig.default.twilio.authToken);

    try {
      const message = await client.messages.create({
        body: body,
        from: '(205) 793-4323',
        to: to
      });
      return message;
    } catch (error) {
      return error;
      ;
    }
  }

}

var _default = new sendSMS();

exports.default = _default;