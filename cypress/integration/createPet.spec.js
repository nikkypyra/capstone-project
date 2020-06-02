const testPetName = 'TEST' + Math.floor(Math.random() * Math.floor(10))

describe('Add pet', () => {
  before(() => {
    cy.login()
  })

  after(() => {
    cy.logout()
  })

  it('should go to the create pet page', () => {
    cy.get('a[href="/create-pet"]').click()
    cy.location().should((location) => {
      expect(location.pathname).to.equal('/create-pet')
    })
  })

  it('should create a new pet on submit', () => {
    cy.get('[data-cy=create-pet]')
    cy.get('input[name="name"]').type(testPetName)
    cy.get('[data-cy=create-pet]').submit()
  })

  it('should check that this pet exists', () => {
    cy.contains(testPetName).should('exist')
  })
})
