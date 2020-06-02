describe('Add a new pet and then delete this pet', () => {
  before(() => {
    cy.login()
  })

  after(() => {
    cy.logout()
  })

  it('should go to the create pet page from the home page', () => {
    cy.get('a[href="/create-pet"]').click()
    cy.location().should((location) => {
      expect(location.pathname).to.equal('/create-pet')
    })
  })

  it('should create a new pet on submit', () => {
    cy.get('[data-cy=create-pet]')
    cy.get('input[name="name"]').type('DELETE ME')
    cy.get('[data-cy=create-pet]').submit()
    cy.contains('DELETE ME').should('exist')
  })

  it('should delete the created pet when ok is clicked', () => {
    cy.contains('DELETE ME')
      .parent('div')
      .parent('section')
      .within(() => {
        cy.get('[data-cy=edit-pet]').click({ force: true })
      })
    cy.contains('Delete').click({ force: true })
    cy.contains('OK').click()
  })

  it('should check that the pet has been deleted', () => {
    cy.contains('DELETE ME').should('not.exist')
  })
})
