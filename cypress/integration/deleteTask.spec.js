describe('Add a new task and then delete this task', () => {
  before(() => {
    cy.login()
  })

  after(() => {
    cy.logout()
  })

  it('should go to the create task page from the pet page', () => {
    cy.contains('FLUFFY')
      .parent('div')
      .parent('section')
      .within(() => {
        cy.get('[data-cy=pet]').click({ force: true })
      })
    cy.get('a[href="/pet/1YNhFhOW02GO4x7oN4Dq/create-task"]').click()
    cy.location().should((location) => {
      expect(location.pathname).to.equal(
        '/pet/1YNhFhOW02GO4x7oN4Dq/create-task'
      )
    })
  })

  it('should create a new task on submit', () => {
    cy.get('input[name="description"]').type('Task to delete')
    cy.get('input[name="date"]').type('2020-05-29')
    cy.get('input[name="time"]').type('08:00')
    cy.get('input[name="person"]').type('Random person')
    cy.get('[data-cy=create-task]').submit()
    cy.contains('Task to delete').should('exist')
  })

  it('should delete the created task when ok is clicked', () => {
    cy.contains('Task to delete')
      .parent('div')
      .parent('section')
      .within(() => {
        cy.get('[data-cy=edit-task]').click({ force: true })
      })
    cy.contains('Delete').click({ force: true })
    cy.contains('OK').click()
  })

  it('should check that the task has been deleted', () => {
    cy.contains('Task to delete').should('not.exist')
  })
})
