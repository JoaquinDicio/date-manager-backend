import { Router } from "express";
import {
  crearNuevoTurno,
  getTodosLosTurnos,
} from "../controllers/turnos.controller.js";
const turnosRouter = Router();

turnosRouter.post("/", crearNuevoTurno);

turnosRouter.get("/", getTodosLosTurnos);

export default turnosRouter;
