// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

before(() => {
  cy.visit('/lib/bgb');
  cy.wait(5000);
  cy.get('[data-cy=login-btn-nav]').click();
  cy.get('[data-cy=email]').type('');          // todo: dodati email i lozinku
  cy.get('[data-cy=password-input]').type('');
  cy.get('[data-cy=login-submit]').click();

  cy.wait(2000);
})
