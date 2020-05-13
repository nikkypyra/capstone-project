const testPetName = 'Hannah' + Math.floor(Math.random() * Math.floor(10))

describe('after submit a new pet is created', () => {
  it('a new pet is added after submit', () => {
    cy.visit('/create-pet')
    cy.get('[data-cy=submit-button]').should('be.disabled')
    cy.get('[data-cy=create-pet]')
    cy.get('input[name="name"]').type(testPetName)
    cy.get('[data-cy=create-pet]').submit()
    cy.visit('/')
    cy.contains(testPetName).should('exist')
  })
})
