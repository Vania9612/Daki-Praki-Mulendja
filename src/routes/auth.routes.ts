import { Router } from "express";
import { authController } from "../controller/auth.controller";

const router = Router();

const auth = new authController();

router.post('/', auth.login);
router.post('/ativar', auth.ativar);


export default router;