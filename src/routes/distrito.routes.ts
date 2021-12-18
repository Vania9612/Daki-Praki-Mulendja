import { Router } from "express";
import { distritoController } from "../controller/distrito.controller";

const router = Router();

const distrito = new distritoController()

router.get("/read", distrito.read);
router.get("/readOne/:id", distrito.readOne);

export default router;