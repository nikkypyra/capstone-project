describe('Add task', () => {
  it('goes to the create task page', () => {
    cy.visit('/pet/1YNhFhOW02GO4x7oN4Dq')
    cy.get('a[href="/pet/1YNhFhOW02GO4x7oN4Dq/create-task"]').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.equal('/pet/1YNhFhOW02GO4x7oN4Dq/create-task')
    })
  })

  it('creates a new task', () => {
    cy.get('input[name="description"]').type('Random task')
    cy.get('input[name="date"]').type('2020-05-29')
    cy.get('input[name="time"]').type('08:00')
    cy.get('input[name="person"]').type('Random person')
    cy.get('[data-cy=create-task]').submit()
  })

  it('checks that this pet exists', () => {
    cy.contains('Random task').should('exist')
  })
})
