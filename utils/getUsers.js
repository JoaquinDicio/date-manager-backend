import { collection, getDocs } from "firebase/firestore";
import db from "../db/connectToDb.js";

export default async function getUsers() {
  try {
    const users = [];
    const usersCollection = await getDocs(collection(db, "usuarios"));
    usersCollection.forEach((doc) => users.push(doc.data()));
    return users;
  } catch (err) {
    console.log("Error al leer la base de datos de usuarios:", err);
  }
}
