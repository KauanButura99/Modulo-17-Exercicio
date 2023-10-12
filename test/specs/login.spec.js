const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");
const registerProducts = require('../screens/registerProduct.screen')


let url = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
let product = 'Rolex President Yellow Gold 18k'
let description = 'By operating its own exclusive foundry, Rolex has the unrivalled ability....'
let normalPrice = '20'
let price = '25'

describe('Access Admin Painel', () => {

  it('should login whith valid credentials', async () => {
    await homeScreen.enterBtn()
    await loginScreen.siteAddress(url, { force: true })
    await loginScreen.continueWithCreditialsBtn()
    await loginScreen.logineEditText(usuario, senha)
    await loginScreen.goToSecondFactorBtn(senha)

    expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
    expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
  });

  it('Should add a photo', async () => {
    await registerProducts.addProductsBtn()
    await registerProducts.addImageBtn()
    await registerProducts.backBtn()
  })

  it('Should register a name to the product ', async () => {
    await registerProducts.productName(product, description)
  });

  it('Should set price on product  ', async () => {
    await registerProducts.setPrice(normalPrice, price)
  })

});