import { v4 as uuid } from "uuid";
import { formatISO } from "date-fns";

class Turno {
  constructor(from, to, date) {
    this.date = date;
    this.from = from;
    this.to = to;
    this.date_string = formatISO(date, { representation: "date" });
    this.id = uuid();
  }

  validate = () => {
    if (!this.from || !this.to || !this.date) return false;
    if (
      typeof this.from !== "number" ||
      typeof this.to !== "number" ||
      typeof this.date !== "number"
    )
      return false;
    return true;
  };
  //in case you want to upload an object withouth carrying methods
  getDataForDb = () => {
    return {
      date: this.date,
      from: this.from,
      to: this.to,
      date_string: this.date_string,
      id: this.id,
    };
  };
}

export default Turno;
