describe('search for dates in the tasks list', () => {
  it('updates the value of the input if a user types into the input', () => {
    cy.visit('/filter')

    cy.get('input[name="search"]').type('08').should('have.value', '08')
  })

  it('displays the correct result', () => {
    cy.visit('/filter')

    cy.get('input[name="search"]').type('08')
    cy.get('[data-cy=date]').contains('08')
  })

  it('displays all when input is cleared', () => {
    cy.get('input[name="search"]').type('08').clear()
  })
})
