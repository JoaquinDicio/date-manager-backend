import { collection, getDocs } from "firebase/firestore";
import db from "../db/connectToDb.js";

async function getTurnos() {
  try {
    const turnos = [];
    const data = await getDocs(collection(db, "turnos"));
    data.forEach((doc) => turnos.push(doc.data()));
    return turnos;
  } catch (err) {
    console.log("error al leer la base de datos:", err);
  }
}

export default getTurnos;
