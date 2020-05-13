describe('navigates to another url', () => {
  it('clicking search icon navigates to a new url', () => {
    cy.visit('/')

    cy.get('[data-cy=filter]').click()
    cy.url().should('include', '/filter')
  })

  it('clicking home icon navigates to a new url', () => {
    cy.visit('/filter')

    cy.get('[data-cy=home]').click()
    cy.url().should('include', '/')
  })
})
