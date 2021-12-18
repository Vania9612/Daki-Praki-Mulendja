"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _database = _interopRequireDefault(require("./database"));

var _usuario = _interopRequireDefault(require("./routes/usuario.routes"));

var _provincia = _interopRequireDefault(require("./routes/provincia.routes"));

var _distrito = _interopRequireDefault(require("./routes/distrito.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _viagem = _interopRequireDefault(require("./routes/viagem.routes"));

var _encomenda = _interopRequireDefault(require("./routes/encomenda.routes"));

var _candidatos = _interopRequireDefault(require("./routes/candidatos.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)({
  origin: "*",
  methods: ["READ, GET, HEAD, PUT, PATCH, POST, DELETE"],
  preflightContinue: true,
  optionsSuccessStatus: 204
}));
app.use(_express.default.json());
app.get('/dakipraki', (request, response) => {
  return response.send('Welcome');
});
app.use('/', _auth.default);
app.use("/usuario", _usuario.default);
app.use("/provincia", _provincia.default);
app.use("/distrito", _distrito.default);
app.use("/viagem", _viagem.default);
app.use("/encomenda", _encomenda.default);
app.use("/candidato", _candidatos.default);
const PORT = process.env.PORT || 3333;
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Dakipraki com Swagger",
      version: "0.1.0",
      description: "Está é a API do aplicativo Dakipraki",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html"
      },
      contact: {
        name: "Dakipraki",
        url: "https://logrocket.com",
        email: "pavulladev@gmail.com"
      }
    },
    servers: [{
      url: "http://localhost:3333/"
    }]
  },
  apis: ["../apiroutes/user.js"]
};
const specs = (0, _swaggerJsdoc.default)(options);
app.use("/api-docs", _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(specs, {
  explorer: true
}));
app.listen(PORT, () => {
  console.log("Server is running");

  _database.default.authenticate().then(async () => {
    console.log("Conectado a base de dados"); // await sequelize.sync({ alter: true });
  }).catch(e => {
    console.log("ERRO: " + e);
  });
});