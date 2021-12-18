import express from 'express'
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import sequelize from './database';
import usuarioRoutes from './routes/usuario.routes';
import provinciaRoutes from './routes/provincia.routes';
import distritoRoutes from './routes/distrito.routes';
import authRoutes from './routes/auth.routes';
import viagemRoutes from './routes/viagem.routes';
import encomendaRoutes from './routes/encomenda.routes';
import candidatosRoutes from './routes/candidatos.routes';

const app = express();

app.use(cors({
  origin: "*",
  methods: ["READ, GET, HEAD, PUT, PATCH, POST, DELETE"],
  preflightContinue: true,
  optionsSuccessStatus: 204
}));
app.use(express.json());

app.get('/dakipraki', (request, response) => {
  return response.send('Welcome');
})

app.use('/', authRoutes);
app.use("/usuario", usuarioRoutes);
app.use("/provincia", provinciaRoutes);
app.use("/distrito", distritoRoutes);
app.use("/viagem", viagemRoutes);
app.use("/encomenda", encomendaRoutes);
app.use("/candidato", candidatosRoutes);



const PORT = process.env.PORT || 3333;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Dakipraki com Swagger",
      version: "0.1.0",
      description:
        "Está é a API do aplicativo Dakipraki",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Dakipraki",
        url: "https://logrocket.com",
        email: "pavulladev@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3333/",
      },
    ],
  },
  apis: ["../apiroutes/user.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.listen(PORT, () => {
  console.log("Server is running");
  sequelize.authenticate().then(async () => {
    console.log("Conectado a base de dados");
    // await sequelize.sync({ alter: true });
  }).catch((e: any) => {
    console.log("ERRO: " + e);
  })
});