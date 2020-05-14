describe('Add task', () => {
  beforeEach(() => {
    cy.visit('/pet/makS69UINrJFuhAuCyui')
    cy.get('a[href="/pet/makS69UINrJFuhAuCyui/create-task"]').click()
  })
  it('adds a new task', () => {
    cy.get('input[name="description"]').type('Random task')
    cy.get('input[name="date"]').type('2020-05-29')
    cy.get('input[name="time"]').type('08:00')
    cy.get('input[name="person"]').type('Random person')
    cy.get('[data-cy=create-task]').submit()
    cy.contains('Random task').should('exist')
  })
})
