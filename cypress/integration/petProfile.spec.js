const testUserName = 'Hannah' + Math.floor(Math.random() * Math.floor(10))

describe('after submit a new pet is created', () => {
  it('a new pet is added after submit', () => {
    cy.visit('/create-pet')
    cy.get('[data-cy=create_pet]')
    cy.get('input[name="name"]').type(testUserName)
    cy.get('[data-cy=create_pet]').submit()
    cy.visit('/')
    cy.contains(testUserName).should('exist')
  })
})
