describe('Add a new pet and then delete this pet', () => {
  it('goes to the create pet page from the home page', () => {
    cy.visit('/home')
    cy.get('a[href="/create-pet"]').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.equal('/create-pet')
    })
  })

  it('creates a new pet on submit', () => {
    cy.get('[data-cy=create-pet]')
    cy.get('input[name="name"]').type('DELETEME')
    cy.get('[data-cy=create-pet]').submit()
    cy.contains('DELETEME').should('exist')
  })

  it('deletes the created pet when ok is clicked', () => {
    cy.contains('DELETEME')
      .parent('div')
      .parent('section')
      .within(() => {
        cy.get('[data-cy=edit-pet]').click({ force: true })
      })
    cy.contains('Delete').click({ force: true })
    cy.contains('OK').click()
    cy.contains('DELETEME').should('not.exist')
  })
})
