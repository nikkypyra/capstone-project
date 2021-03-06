describe('Add task', () => {
  before(() => {
    cy.login()
  })

  after(() => {
    cy.logout()
  })

  it('should go to the create task page', () => {
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

  it('should create a new task', () => {
    cy.get('input[name="description"]').type('Random task')
    cy.get('input[name="date"]').type('2020-05-29')
    cy.get('input[name="time"]').type('08:00')
    cy.get('input[name="person"]').type('Random person')
    cy.get('[data-cy=create-task]').submit()
  })

  it('should check that this task exists', () => {
    cy.contains('Random task').should('exist')
  })
})
