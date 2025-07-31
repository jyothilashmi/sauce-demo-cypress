import LoginPage from '../pages/LoginPage';
import CheckOutPage from '../pages/CheckOutPage';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';

describe('SauceDemo Checkout Flow', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckOutPage();
  beforeEach(() => {
    cy.fixture('testdata').as('data');
  });
    it('User checking out 3 items successfully from the Sauce Demo website',function()    {

    loginPage.visit();
    loginPage.userLogin(this.data.standarduser.username, this.data.standarduser.password);
    homePage.selectItems(3).then((items) => {
    expect(items.length).to.equal(3); 
    homePage.clickCart();
    cartPage.cartItemsVerification(items);
    cartPage.continueCheckout();
    checkoutPage.fillInfo(this.data.fillDetails.firstName,this.data.fillDetails.lastName,this.data.fillDetails.zipcode);
    checkoutPage.verifyCheckOutItemsInOverview(items);
    checkoutPage.finishCheckout();
    checkoutPage.verifyOrderSuccess();
  });
    });
});
