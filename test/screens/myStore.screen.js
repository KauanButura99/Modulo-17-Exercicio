class MyStoreScreen {

  get #myStoreLogo() {
    return $('~My store')
  }

  get #myStormName() {
    return $('android=new UiSelector().text("EBAC - Shop")')
  }

  async getStoreName() {
    return await this.#myStormName.getText()
  }

  async myStoreLogoIsDisplayed() {
    await this.#myStoreLogo.waitForDisplayed({ timeout: 20000 })
    return await this.#myStoreLogo.isDisplayed()
  }


}
module.exports = new MyStoreScreen()