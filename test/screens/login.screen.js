class loginScreen {

  get #urlAddress() { return $('android=new UiSelector().text("Site address")') }
  get #continue() { return $('android=new UiSelector().text("Continue")') } // botão de Continuar

  get #continueWithStoreCredetials() {
    return $('android=new UiSelector().text("Continue with store credentials")')
  } //botão de ir para página de credenciais 

  get #userName() { return $('android=new UiSelector().text("Username")') }
  get #password() { return $('android=new UiSelector().text("Password")') }

  get #goToSecondFactor() { return $('android=new UiSelector().text("Or type your password")') }

  async siteAddress(url) {
    await this.#urlAddress.setValue(url)
    await this.#continue.click()
  }

  async continueWithCreditialsBtn() {
    await this.#continueWithStoreCredetials.waitForDisplayed({ timeout: 10000 })
    await this.#continueWithStoreCredetials.click()
  }


  async logineEditText(email, password) {
    await this.#userName.setValue(email)
    await this.#password.setValue(password)
    await this.#continue.click()
  }

  async goToSecondFactorBtn(password) {
    await this.#goToSecondFactor.click()
    await this.#password.setValue(password)
    await this.#continue.click()
  }
}

module.exports = new loginScreen()