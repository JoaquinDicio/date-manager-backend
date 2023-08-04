import { Router } from "express";
const usersRouter = Router();
import * as usersController from "../controllers/users.controller.js";

usersRouter.post("/login", usersController.handleLogin);
usersRouter.post("/register", usersController.handleRegister);

export default usersRouter;
