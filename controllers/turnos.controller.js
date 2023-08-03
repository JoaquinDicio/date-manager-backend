import { setDoc, doc, deleteDoc } from "firebase/firestore";
import db from "../db/connectToDb.js";
import { formatISO } from "date-fns";
import getTurnos from "../utils/getTurnos.js";
import { v4 as uuid } from "uuid";

async function postNewTurno(req, res) {
  try {
    //this information should come with the request
    const { date, from, to } = req.body;
    const data = {
      date,
      from,
      to,
      date_string: formatISO(date, { representation: "date" }),
      id: uuid(),
    };
    if (validateTurno(data)) {
      //if everything is correct, saves in db
      await setDoc(doc(db, "turnos", data.id), data);
      res.status(200).send("Turno agendado correctamente");
    } else {
      res.status(400).send("Datos no validos");
    }
  } catch (err) {
    console.log("Error al guardar el turno: ", err);
    res.status(400).send();
  }
}

function validateTurno(data) {
  const { from, to, date, date_string } = data;
  if (!from || !to || !date || !date_string) return false;
  if (
    typeof from !== "number" ||
    typeof to !== "number" ||
    typeof date !== "number"
  )
    return false;
  return true;
}

async function getTodosLosTurnos(req, res) {
  try {
    const turnos = await getTurnos();
    res.status(200).send(turnos);
  } catch (err) {
    res.status(500).send("Something went wrong, try again");
    console.log(err);
  }
}

async function deleteTurnoById(req, res) {
  try {
    const { id } = req.body;
    await deleteDoc(doc(db, "turnos", id));
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
}

export { postNewTurno, getTodosLosTurnos, deleteTurnoById };
