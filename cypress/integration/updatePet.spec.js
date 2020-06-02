describe('Add a new pet and then edit this pet', () => {
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
    cy.get('input[name="name"]').type('EDIT ME')
    cy.get('[data-cy=create-pet]').submit()
    cy.contains('EDIT ME').should('exist')
  })

  it('should edit the created pet on submit', () => {
    cy.contains('EDIT ME')
      .parent('div')
      .parent('section')
      .within(() => {
        cy.get('[data-cy=edit-pet]').click({ force: true })
      })
    cy.get('[data-cy=update-pet]')
    cy.get('input[name="name"]').clear().type('NEW ME')
    cy.get('[data-cy=update-pet]').submit()
  })

  it('should check that the edited pet exists and the previous version does not', () => {
    cy.contains('EDIT ME').should('not.exist')
    cy.contains('NEW ME').should('exist')
  })
})
