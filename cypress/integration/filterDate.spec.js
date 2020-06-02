describe('search for dates in the tasks list', () => {
  before(() => {
    cy.login()
  })

  after(() => {
    cy.logout()
  })

  it('should update the value of the input if a user types into the input', () => {
    cy.get('[data-cy=filter]').click()
    cy.get('input[name="search"]').type('08').should('have.value', '08')
  })

  it('should display the correct result', () => {
    cy.get('[data-cy=date]').contains('08')
  })

  it('should display all when input is cleared', () => {
    cy.get('input[name="search"]').type('08').clear()
  })
})
