import locators from '../../fixtures/locators.json';
class CartPage{

    cartItemsVerification(items)
    {
        cy.get(locators.checkoutPage.inventoryItemName).should('have.length', items.length)
      .then(($cartItems) => {
        const names = [...$cartItems].map(el => el.textContent.trim());
        expect(names.sort()).to.deep.eq(items.sort());
      });

    }
    continueCheckout() {
    cy.get(locators.checkoutPage.checkoutBtn).click();
  }
}
export default CartPage;