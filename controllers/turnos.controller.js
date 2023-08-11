import { setDoc, doc, deleteDoc } from "firebase/firestore";
import db from "../db/connectToDb.js";
import getTurnos from "../utils/getTurnos.js";
import Turno from "../models/Turno.js";
import { verifyToken } from "../utils/tokenUtils.js";

export async function postNewTurno(req, res) {
  try {
    const { token, date, from, to, speciality } = req.body;

    const username = verifyToken(token);

    if (typeof username != "string") {
      sendResponseError(401, "Token invalido, usuario no autorizado", res);
      return;
    }

    const turno = new Turno(from, to, date, username, speciality);

    if (turno.validate()) {
      await setDoc(doc(db, "turnos", turno.id), turno.getDataForDb());
      res.status(200).json({ msg: "Turno guardado correctamente" });
    } else {
      sendResponseError(
        400,
        "Error, verifique que ningun campo este vacio",
        res
      );
    }
  } catch (err) {
    res.status(500).send("Ocurrio un error al guardar el turno:" + err);
    console.log(err);
  }
}

function sendResponseError(code, msg, res) {
  res.status(code).json({ error: msg });
}

export async function getTodosLosTurnos(req, res) {
  try {
    const turnos = await getTurnos();
    res.status(200).send(turnos);
  } catch (err) {
    res.status(500).send("Algo salio mal, intenta nuevamente mas tarde");
    console.log(err);
  }
}
export async function deleteTurnoById(req, res) {
  try {
    const { id } = req.body;
    await deleteDoc(doc(db, "turnos", id));
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
}
