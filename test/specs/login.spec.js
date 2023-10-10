const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");
const registerProducts = require('../screens/registerProduct.screen')


let url = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
let product = 'Rolex'
let description = 'By operating its own exclusive foundry, Rolex has the unrivalled ability....'
let normalPrice = '20000'
let price = '25000'

describe('Acessar Admin Painel', () => {
  it('should login whith valid credentials', async () => {
    await homeScreen.enterBtn()
    await loginScreen.siteAddress(url, { force: true })
    await loginScreen.continueWithCreditialsBtn()
    await loginScreen.logineEditText(usuario, senha)
    await loginScreen.goToSecondFactorBtn(senha)

    expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
    expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')

  });

  it('Should register a product on Ebac Store', async () => {
    await registerProducts.addProductsBtn()
    await registerProducts.addImageBtn()
    await registerProducts.backBtn()
    await registerProducts.productName(product, description)
  })
  /*
    it('Should set price on product  ', async () => {
      await registerProducts.setPrice(normalPrice, price)
    })*/
});