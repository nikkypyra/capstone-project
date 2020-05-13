describe('Add task', () => {
  it('adds a new task', () => {
    cy.visit('/create-task')
    cy.get('input[name="description"]').type('Random task')
    cy.get('input[name="date"]').type('2020-05-29')
    cy.get('input[name="time"]').type('08:00')
    cy.get('input[name="person"]').type('Random person')
    cy.get('[data-cy=create_task]').submit()
    cy.visit('/pet/makS69UINrJFuhAuCyui')
    cy.contains('Random task').should('exist')
  })
})
