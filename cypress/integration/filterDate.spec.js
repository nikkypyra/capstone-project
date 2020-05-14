describe('search for dates in the tasks list', () => {
  it('updates the value of the input if a user types into the input', () => {
    cy.visit('/filter')

    cy.get('input[name="search"]').type('28').should('have.value', '28')
  })

  it('displays the correct result', () => {
    cy.visit('/filter')

    cy.get('input[name="search"]').type('28')
    cy.get('[data-cy=date]').contains('28')
  })

  it('displays all when input is cleared', () => {
    cy.get('input[name="search"]').type('28').clear()
  })
})
