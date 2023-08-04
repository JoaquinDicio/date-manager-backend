export default class User {
  constructor(username, password, id) {
    this.username = username;
    this.password = password;
    this.id = id;
  }

  getDataForDb = () => {
    return { username: this.username, password: this.password, id: this.id };
  };
}
