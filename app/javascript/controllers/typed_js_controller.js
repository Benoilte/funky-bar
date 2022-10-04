import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

// Connects to data-controller="typed-js"
export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Le site du funky bar est en construction"],
      typeSpeed: 50,
      loop: false
    })
  }
}
