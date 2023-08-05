import { v4 as uuid } from "uuid";

export default class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.id = uuid();
  }

  validateUser = () => {
    if (
      this.username != "" &&
      this.password != "" &&
      this.username?.length > 5 &&
      this.password?.length > 5
    )
      return true;
    return false;
  };

  getDataForDb = () => {
    return { username: this.username, password: this.password, id: this.id };
  };
}
