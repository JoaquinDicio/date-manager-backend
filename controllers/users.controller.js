import User from "../models/User.js";

export async function handleLogin(req, res) {
  const { username, password } = req.body;
  res.status(200).json({ username, password });
}
export async function handleRegister(req, res) {
  const { username, password, id } = body.req; //id should be document identification number
  const user = new User(username, password, id);
}
