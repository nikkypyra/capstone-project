Cypress.Commands.add('login', () => {
  cy.visit('/')
  cy.get('input[type="email"]').type('nikkymacleod@hotmail.com')
  cy.get('input[type="password"]').type('12345678')
  cy.get('[data-cy=login]').submit()
})

Cypress.Commands.add('logout', () => {
  cy.contains('Log Out').click()
  cy.contains('Log in').should('exist')
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
