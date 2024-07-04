import { Howl } from "howler";

class HowlWithId extends Howl {
  constructor(options, id) {
    super(options);
    this.id = id;
  }
}

export default HowlWithId