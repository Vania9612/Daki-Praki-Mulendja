import { Router } from "express";
import { usuarioController } from "../controller/usuario.controller";

const router = Router();

const usuario = new usuarioController();

router.post("/create", usuario.create);
router.get("/read", usuario.read);
router.get("readOne/:id", usuario.readOne);

export default router;