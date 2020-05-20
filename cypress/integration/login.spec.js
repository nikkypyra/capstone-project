describe('Login', () => {
  it('logs into app with existing account', () => {
    cy.visit('/')
    cy.get('input[name="email"]').type('nikkymacleod@hotmail.com')
    cy.get('input[name="password"]').type('12345678')
    cy.contains('Log in').click()
  })
})
