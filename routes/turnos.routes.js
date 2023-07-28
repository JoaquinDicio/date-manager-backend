import { Router } from "express";
import { crearNuevoTurno } from "../controllers/turnos.controller.js";
const turnosRouter = Router();

turnosRouter.post("/", crearNuevoTurno);

export default turnosRouter;
