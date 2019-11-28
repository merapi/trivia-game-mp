// / <reference types="Cypress" />
// Real E2E tests, no stubbing here (in RW we should create testing API env)

context('Main page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Welcome screen with Start button should open Quiz', () => {
    cy.startQuiz().location('pathname').should('eq', '/quiz')
  })

  it('First game should fetch new Token', () => {
    cy.startQuiz().window().its('localStorage.token').should('be.a', 'string')
  })

  it('After 10 questions you should see the Results page and then redirect to Home', () => {
    cy.startQuiz()
    for (let i=0; i<10; i++) {
      cy.answerQuestion('True')
    }
    cy.location('pathname').should('eq', '/results')
    cy.findByText(/you scored/i)
    cy.findByText(/play again/i).click()
    cy.location('pathname').should('eq', '/')
  })

  it('After 10 correct questions you should see congratulations', () => {
    cy.server()
    cy.startQuiz()
    cy.route('api.php*').as('questions')

    cy.wait('@questions').get('@questions').then(async xhr => {
      const { response } = xhr;

      const text = await (new Response(response.body)).text();
      const json = JSON.parse(text)

      for (let i=0; i<json.results.length; i++) {
        const correctAnswer = json.results[i].correct_answer
        cy.answerQuestion(correctAnswer)
      }

      cy.findByText(/you are awesome/i)
    })
  })
})
