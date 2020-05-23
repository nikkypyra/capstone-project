describe('navigates to another url', () => {
  before(() => {
    cy.login()
  })

  after(() => {
    cy.logout()
  })

  it('clicking search icon navigates to a new url', () => {
    cy.get('[data-cy=filter]').click()
    cy.url().should('include', '/filter')
  })

  it('clicking settings icon navigates to a new url', () => {
    cy.get('[data-cy=settings]').click()
    cy.url().should('include', '/settings')
  })

  it('clicking home icon navigates to a new url', () => {
    cy.visit('/filter')
    cy.get('[data-cy=home]').click()
    cy.url().should('include', '/home')
  })
})
