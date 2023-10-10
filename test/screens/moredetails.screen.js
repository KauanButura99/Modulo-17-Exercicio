class addMoreDetails {
  get #addDetails() { return $('#com.woocommerce.android:id/productDetail_addMoreButton') }
  get #addweightDimensions() { return $('android=new UiSelctor().text("Shipping")') }

  async detailsBtn() {
    await this.#addDetails.click()
  }

  async shippingBtn() {
    await this.#addweightDimensions.click()

  }


}
module.exports = new addMoreDetails()