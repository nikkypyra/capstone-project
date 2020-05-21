describe('search for owner names in the tasks list', () => {
  before(() => {
    cy.login()
  })

  after(() => {
    cy.logout()
  })

  it('updates the value of the input if a user types into the input', () => {
    cy.get('[data-cy=filter]').click()
    cy.get('input[name="search"]').type('Martin').should('have.value', 'Martin')
  })

  it('displays the correct result', () => {
    cy.get('[data-cy=owner_name]').contains('Martin')
  })

  it('displays all when input is cleared', () => {
    cy.get('input[name="search"]').type('Martin').clear()
  })
})
