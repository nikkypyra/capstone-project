describe('Add family member', () => {
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
    cy.get('input[name="email"]').type('family@family.com')
    cy.get('[data-cy=add-family]').submit()
  })

  it('checks that this family member exists', () => {
    cy.get('[data-cy=settings]').click()
    cy.contains('family@family.com').should('exist')
  })
})
