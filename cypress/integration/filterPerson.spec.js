describe('search for owner names in the tasks list', () => {
  it('updates the value of the input if a user types into the input', () => {
    cy.visit('/filter')

    cy.get('input[name="search"]').type('Martin').should('have.value', 'Martin')
  })

  it('displays the correct result', () => {
    cy.visit('/filter')

    cy.get('input[name="search"]').type('Martin')
    cy.get('[data-cy=owner_name]').contains('Martin')
  })

  it('displays all when input is cleared', () => {
    cy.get('input[name="search"]').clear()
  })
})
