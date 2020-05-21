const testPetName = 'TEST' + Math.floor(Math.random() * Math.floor(10))

describe('Add pet', () => {
  it('goes to the create pet page', () => {
    cy.visit('/home')
    cy.get('a[href="/create-pet"]').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.equal('/create-pet')
    })
  })

  it('creates a new pet on submit', () => {
    cy.get('[data-cy=create-pet]')
    cy.get('input[name="name"]').type(testPetName)
    cy.get('[data-cy=create-pet]').submit()
  })

  it('checks that this pet exists', () => {
    cy.contains(testPetName).should('exist')
  })
})
