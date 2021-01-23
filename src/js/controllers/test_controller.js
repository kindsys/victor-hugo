import {Controller} from "stimulus";

export default class TestController extends Controller {
  static targets = ["output"];

  connect() {
    this.outputTarget.innerHTML = "yay!";
  }
}
