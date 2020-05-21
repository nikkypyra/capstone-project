const testPetName = 'TEST' + Math.floor(Math.random() * Math.floor(10))

describe('Add pet', () => {
  beforeEach(() => {
    cy.visit('/home')
    cy.get('a[href="/create-pet"]').click()
  })

  it('goes to the create pet page', () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.equal('/create-pet')
    })
  })

  it('creates a new pet on submit', () => {
    cy.get('[data-cy=create-pet]')
    cy.get('input[name="name"]').type(testPetName)
    cy.get('[data-cy=create-pet]').submit()
    cy.contains(testPetName).should('exist')
  })
})
