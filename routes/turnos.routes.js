import { Router } from "express";
import {
  getTodosLosTurnos,
  postNewTurno,
  deleteTurnoById,
} from "../controllers/turnos.controller.js";
const turnosRouter = Router();

turnosRouter.get("/", getTodosLosTurnos);

turnosRouter.post("/", postNewTurno);

turnosRouter.delete("/", deleteTurnoById);

export default turnosRouter;
