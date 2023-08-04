import { setDoc, doc, deleteDoc } from "firebase/firestore";
import db from "../db/connectToDb.js";
import getTurnos from "../utils/getTurnos.js";
import Turno from "../models/Turno.js";

export async function postNewTurno(req, res) {
  try {
    const { from, to, date } = req.body;
    const turno = new Turno(from, to, date);
    if (turno.validate()) {
      await setDoc(doc(db, "turnos", turno.id), turno.getDataForDb());
      res.status(200).send("Turno agendado correctamente");
    } else {
      res.status(400).send("Datos no validos para el turno");
    }
  } catch (err) {
    console.log("Error al guardar el turno: ", err);
    res.status(400).send();
  }
}
export async function getTodosLosTurnos(req, res) {
  try {
    const turnos = await getTurnos();
    res.status(200).send(turnos);
  } catch (err) {
    res.status(500).send("Something went wrong, try again");
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
