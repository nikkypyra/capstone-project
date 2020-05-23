describe('Add a new family member then delete this family member', () => {
  before(() => {
    cy.login()
  })

  after(() => {
    cy.logout()
  })

  it('goes to the join-family page', () => {
    cy.get('[data-cy=settings]').click()
    cy.get('a[href="/add-family"]').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.equal('/add-family')
    })
  })

  it('creates a new family member', () => {
    cy.get('[data-cy=add-family]')
    cy.get('input[name="email"]').type('delete@family.com')
    cy.get('[data-cy=add-family]').submit()
  })

  it('checks that this family member exists', () => {
    cy.contains('delete@family.com').should('exist')
  })

  it('deletes the created family member when ok is clicked', () => {
    cy.contains('delete@family.com')
      .parent('div')
      .parent('section')
      .within(() => {
        cy.get('[data-cy=delete-family]').within(() => {
          cy.get('img').click({ force: true })
        })
      })
    cy.contains('OK').click()
  })

  it('checks that the family member has been deleted', () => {
    cy.contains('delete@family.com').should('not.exist')
  })
})
