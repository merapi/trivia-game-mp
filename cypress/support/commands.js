import '@testing-library/cypress/add-commands'

Cypress.Commands.add('startQuiz', () => {
  cy.visit('/')
    .findByText(/start/i)
    .click()
})

Cypress.Commands.add('answerQuestion', answer => {
  cy.findByText(new RegExp(answer, 'i')).click()
})
