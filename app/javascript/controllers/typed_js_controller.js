import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

// Connects to data-controller="typed-js"
export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Le site du funky bar est en construction",
      "Prépare toi à retrouver toutes les informations concernant la meilleure bande de pote pour préparer tes cocktails où tu veux"],
      typeSpeed: 50,
      loop: true
    })
  }
}
