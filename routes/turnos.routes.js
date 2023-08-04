import { Router } from "express";
import * as turnosController from "../controllers/turnos.controller.js";
const turnosRouter = Router();

turnosRouter.get("/", turnosController.getTodosLosTurnos);

turnosRouter.post("/", turnosController.postNewTurno);

turnosRouter.delete("/", turnosController.deleteTurnoById);

export default turnosRouter;
