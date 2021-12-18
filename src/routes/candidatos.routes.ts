import { Router } from "express";
import isAuthenticated from "../middlewares/isAuthenticate";
import { candidatosController } from "../controller/candidatos.controller";

const router = Router();

const candidatos = new candidatosController();

router.get('/candidatar/:encomenda', isAuthenticated, candidatos.candidatar);
router.get('/candidaturas', isAuthenticated, candidatos.minhasCandidaturas);
router.get('/verCandidatos/:encomenda', isAuthenticated, candidatos.verCandidatos);
router.post('/aprovarCandidato/:candidatura_id', isAuthenticated, candidatos.aprovarCandidato);


export default router;