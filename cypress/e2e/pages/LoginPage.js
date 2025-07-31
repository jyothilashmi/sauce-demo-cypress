import locators from '../../fixtures/locators.json';
class LoginPage {
visit() {
    cy.visit('https://www.saucedemo.com');
    cy.verifyTitle('Swag Labs');
  }
userLogin(user,password)
{
    cy.get(locators.loginPage.txtusername).type(user);
    cy.get(locators.loginPage.txtpassword).type(password);
    cy.get(locators.loginPage.loginBtn).click();
}
}
export default LoginPage;