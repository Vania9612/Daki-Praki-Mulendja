import { Router } from "express";
import { encomendaController } from "../controller/encomenda.controller";
import isAuthenticated from "../middlewares/isAuthenticate";

const router = Router();

const encomenda = new encomendaController();

router.post('/adicionar', isAuthenticated, encomenda.addEncomenda);
router.get('/outras/:viagemId', isAuthenticated, encomenda.outrasEncomendas);
router.get('/listar', isAuthenticated, encomenda.listarEncomendas);

export default router;