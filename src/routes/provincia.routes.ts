import { Router } from "express";
import { provinciaController } from "../controller/provincia.controller";

const router = Router();

const provincia = new provinciaController();

router.get("/read", provincia.read);
router.get("/readOne/:id", provincia.readOne);

export default router;