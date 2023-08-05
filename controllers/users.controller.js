import User from "../models/User.js";
import { setDoc, doc } from "firebase/firestore";
import db from "../db/connectToDb.js";
import verifyUserExistence from "../utils/verifyUserExistence.js";
import { validate } from "uuid";

export async function handleLogin(req, res) {
  try {
    const { username, password } = req.body;
    const user = await verifyUserExistence(username);
    if (user?.password == password) {
      res.status(200).json({ token: "tokencode" });
    } else {
      res.status(400).json({ msg: "Contrasenia o usuario incorrectos" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al loguear intente mas tarde");
  }
}

export async function handleRegister(req, res) {
  try {
    const { username, password } = req.body; //id should be document identification number
    const user = new User(username, password);
    const isCorrect = user.validateUser();
    const existence = await verifyUserExistence(username);
    if (!existence && isCorrect) {
      await setDoc(doc(db, "usuarios", user.id), user.getDataForDb());
      res.status(200).json({ msg: "Usuario creado correctamente" });
    } else if (!isCorrect) {
      res.status(400).json({
        msg: "Los campos no pueden estar vacios, y deben contener al menos seis caracteres",
      });
    } else {
      res.status(400).json({
        msg: "Parece que el usuario ya existe",
      });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ msg: "Internal server error al crear un usuario nuevo" });
  }
}
