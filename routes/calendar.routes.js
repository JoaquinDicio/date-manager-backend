import { Router } from "express";
import { crearCalendario } from "../controllers/calendar.controller.js";
const calendarRouter = Router();

calendarRouter.get("/", crearCalendario);

export default calendarRouter;
