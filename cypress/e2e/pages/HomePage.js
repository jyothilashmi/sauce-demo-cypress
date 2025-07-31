import locators from '../../fixtures/locators.json';
class HomePage {
  selectItems(number) {
    return cy.get(locators.checkoutPage.inventoryItems).then(($items) => {
      const totalItems = $items.length;
      const selectedIndexes = Cypress._.sampleSize([...Array(totalItems).keys()], number);
      const selectedNames = [];
      return selectedIndexes.reduce((chain, i) => {
        return chain.then(() => {
          const item = $items[i];
          const name = item.querySelector('.inventory_item_name').textContent.trim();
          selectedNames.push(name);
          return cy.wrap(item).find('button').click();
        });
      }, cy.wrap()) 
           .then(() => {
        return cy.get(locators.checkoutPage.shoppingCartBadge).should('have.text', `${number}`);
      })
      .then(() => {
        return cy.wrap(selectedNames);
      });
    });
  }

  clickCart() {
    cy.get(locators.checkoutPage.shoppingCartLink).click();
  }
}

export default HomePage;
