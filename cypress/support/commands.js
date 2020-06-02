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
