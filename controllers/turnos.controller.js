import { collection, getDocs, query } from "firebase/firestore";
import db from "../db/connectToDb.js";

function crearNuevoTurno(req, res) {
  const { fecha, horario } = body.req;
}

async function getTodosLosTurnos(req, res) {
  try {
    const turnos = [];
    const data = await getDocs(collection(db, "turnos"));
    data.forEach((doc) => turnos.push(doc.data()));
    res.status(200).send(turnos);
  } catch (err) {
    res.status(500).send("Something went wrong, try again");
    console.log(err);
  }
}

export { crearNuevoTurno, getTodosLosTurnos };
