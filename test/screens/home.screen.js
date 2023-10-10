class homeScreen {

  get enterStoreAddress() { return $('android=new UiSelector().text("Enter your store address")') }

  async enterBtn() {
    await this.enterStoreAddress.click()
  }

}
module.exports = new homeScreen()