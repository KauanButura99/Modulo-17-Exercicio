class registerProduct {

  get #enterPorduct() {
    return $('//android.widget.FrameLayout[@content-desc="Products"]')
  }
  get #addProducts() { return $('~Add products') }
  get #selectPrdType() { return $('.android.view.ViewGroup') }

  get #addImage() {
    return $('android=new UiSelector().text("Add a product image")')
  }
  get #choseFromDevice() { return $('android=new UiSelector().text("Choose from device")') }
  get #photo() { return $('android=new UiSelector().text("Gold Rolex.jpg")') }

  get #back() { return $('~Navigate up') }

  get #prdTitle() { return $('android=new UiSelector().text("Enter Product Title")') }
  get #descriptioBotton() { return $('android=new UiSelector().text("Describe your product")') }
  get #writeDescription() { return $(".android.widget.EditText") }

  get #addPrice() { return $('android=new UiSelector().text("Add price")') }
  get #regularPrice() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText') }
  get #salePrice() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText') }

  get #publish() { return $('android=new UiSelector().text("PUBLISH") ') }

  async addProductsBtn() {
    await this.#enterPorduct.click()
    await this.#addProducts.click()
    await this.#selectPrdType.click()
  }

  async addImageBtn() {
    await this.#addImage.click()
    await this.#choseFromDevice.click()
    await this.#photo.click()
  }

  async backBtn() {
    await this.#back.click()
  }

  async productName(product, description) {
    await this.#prdTitle.click()
    await this.#prdTitle.setValue(product)
    await this.#descriptioBotton.click()
    await this.#writeDescription.setValue(description)
    await this.#back.click()
  }

  async setPrice(normalPrice, price) {
    await this.#addPrice.click()
    await this.#regularPrice.setValue(normalPrice)
    await this.#salePrice.setValue(price)
    await this.#back.click()
  }

  async post() {
    await this.#publish.click()
  }
}

module.exports = new registerProduct()