import locators from '../../fixtures/locators.json';
class CheckOutPage{

fillInfo(first, last, zip) {
    cy.get(locators.checkoutPage.txtfirstname).type(first);
    cy.get(locators.checkoutPage.txtlastname).type(last);
    cy.get(locators.checkoutPage.txtzip).type(zip);
    cy.get(locators.checkoutPage.continueBtn).click();
  }
   verifyCheckOutItemsInOverview(expectedItems) {
    cy.get(locators.checkoutPage.inventoryItemName).should('have.length', expectedItems.length)
      .then(($items) => {
        const names = [...$items].map(el => el.textContent.trim());
        expect(names.sort()).to.deep.eq(expectedItems.sort());
      });
  }
finishCheckout() {
    cy.get(locators.checkoutPage.finishBtn).click();
  }
verifyOrderSuccess() {
    cy.get(locators.checkoutPage.completeHeader).should('have.text', 'Thank you for your order!');
  }
}
export default CheckOutPage;