import { Router } from "express";
import {
  getTodosLosTurnos,
  postNewTurno,
} from "../controllers/turnos.controller.js";
const turnosRouter = Router();

turnosRouter.get("/", getTodosLosTurnos);

turnosRouter.post("/", postNewTurno);

export default turnosRouter;
