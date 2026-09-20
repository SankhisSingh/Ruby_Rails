import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal", "loginForm", "signupForm"]

  openLogin() {
    this.open()
    this.showLogin()
  }

  openSignup() {
    this.open()
    this.showSignup()
  }

  open() {
    this.modalTarget.classList.remove("hidden")
    this.modalTarget.classList.add("flex")
  }

  close() {
    this.modalTarget.classList.add("hidden")
    this.modalTarget.classList.remove("flex")
  }

  closeOutside(event) {
    if (event.target === this.modalTarget) {
      this.close()
    }
  }

  showLogin() {
    this.loginFormTarget.classList.remove("hidden")
    this.signupFormTarget.classList.add("hidden")
  }

  showSignup() {
    this.loginFormTarget.classList.add("hidden")
    this.signupFormTarget.classList.remove("hidden")
  }
}