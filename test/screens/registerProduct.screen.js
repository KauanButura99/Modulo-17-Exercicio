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
  get #regularPrice() { return $('.android.widget.EditText').index(0) }
  get #salePrice() { return $('android=new UiSelctor().text("Sale Price")') }



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

  async productName() {
    await this.#prdTitle.setValue(product)//Esta com problema, a automação não esta colocando o nome do produto
    await this.#descriptioBotton.click()
    await this.#writeDescription.setValue(description)
  }

  async setPrice() {
    await this.#addPrice.click()
    await this.#regularPrice.clear().setValue(normalPrice)
    await this.#salePrice.clear().setValue(price)
    await this.#back.click()
  }

}

module.exports = new registerProduct()