describe('Login', () => {
  it('should log into the app with existing account', () => {
    cy.visit('/')
    cy.get('input[type="email"]').type('nikkymacleod@hotmail.com')
    cy.get('input[type="password"]').type('12345678')
    cy.get('[data-cy=login]').submit()
  })

  it('should log out of the account', () => {
    cy.contains('Log Out').click()
    cy.contains('Log in').should('exist')
  })
})
