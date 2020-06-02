describe('navigates to another url', () => {
  before(() => {
    cy.login()
  })

  after(() => {
    cy.logout()
  })

  it('should navigate to the search url when search icon is clicked', () => {
    cy.get('[data-cy=filter]').click()
    cy.url().should('include', '/filter')
  })

  it('should navigate to the settings url when the settings icon is clicked', () => {
    cy.get('[data-cy=settings]').click()
    cy.url().should('include', '/settings')
  })

  it('should navigate to the home url when home icon is clicked', () => {
    cy.visit('/filter')
    cy.get('[data-cy=home]').click()
    cy.url().should('include', '/home')
  })
})
