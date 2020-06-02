describe('Add a new task and then edit this task', () => {
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
    cy.get('input[name="description"]').type('Task to edit')
    cy.get('input[name="date"]').type('2020-05-29')
    cy.get('input[name="time"]').type('08:00')
    cy.get('input[name="person"]').type('Random person')
    cy.get('[data-cy=create-task]').submit()
    cy.contains('Task to edit').should('exist')
  })

  it('should edit the created task on submit', () => {
    cy.contains('Task to edit')
      .parent('div')
      .parent('section')
      .within(() => {
        cy.get('[data-cy=edit-task]').click({ force: true })
      })
    cy.get('[data-cy=update-task]')
    cy.get('input[name="description"]').clear().type('Task is edited')
    cy.get('[data-cy=update-task]').submit()
  })

  it('should check that the edited task exists and the previous version does not', () => {
    cy.contains('Task to edit').should('not.exist')
    cy.contains('Task is edited').should('exist')
  })
})
