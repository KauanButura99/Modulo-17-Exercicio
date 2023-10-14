class registerProduct {

  get #enterPorduct() {
    return $('//android.widget.FrameLayout[@content-desc="Products"]')
  }
  get #addProducts() { return $('~Add products') }
  get #selectPrdType() { return $('android=new UiSelector().text("Simple physical product")') }

  get #addImage() {
    return $('android=new UiSelector().text("Add a product image")')
  }
  get #choseWordPressPhoto() { return $('android=new UiSelector().text("WordPress media library")') }
  get #photo() { return $('(//android.widget.ImageView[@content-desc="Product image"])[2]') }//Xpath da imagem do Rolex Gold
  get #done() { return $('android=new UiSelector().text("DONE")') }

  get #back() { return $('~Navigate up') }

  get #prdTitle() { return $('android=new UiSelector().text("Enter Product Title")') }
  get #descriptioBotton() { return $('android=new UiSelector().text("Describe your product")') }
  get #writeDescription() { return $('android=new UiSelector().text("Start writing…")') }

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
    await this.#choseWordPressPhoto.click()
    await this.#photo.click()
    await this.#done.click()
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