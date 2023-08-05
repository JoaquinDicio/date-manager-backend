import getUsers from "./getUsers.js";

export default async function verifyUserExistence(username) {
  const usersCollection = await getUsers();
  const user = usersCollection.find((user) => user.username == username);
  if (user) return user;
  return false;
}
