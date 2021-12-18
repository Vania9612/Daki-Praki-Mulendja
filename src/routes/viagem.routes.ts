import { Router } from "express";
import isAuthenticated from "../middlewares/isAuthenticate";
import { viagemController } from "../controller/viagem.controller";


const router = Router();

const viagem = new viagemController(); 

router.post('/adicionar', isAuthenticated, viagem.addViagem);
router.get('/listar', isAuthenticated, viagem.readViagem);


export default router;