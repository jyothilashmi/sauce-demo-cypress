Cypress.Commands.add('verifyTitle', (expectedTitle) => {
  cy.title().should('eq', expectedTitle);
});

Cypress.Commands.overwrite('type', (originalFn, subject, text, options) => {
  return cy.wrap(subject).screenshot('typing-before').then(() => {
    return originalFn(subject, text, options);
  });
});
