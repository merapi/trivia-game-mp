import { AppState } from 'store/rootReducer'

export const currentQuestion = (state: AppState) => {
  const currentQuestionIndex = state.quiz.answers.length
  return state.quiz.questions[currentQuestionIndex]
}

export const questions = (state: AppState) => state.quiz.questions
export const questionsCount = (state: AppState) => state.quiz.questions.length

export const answers = (state: AppState) => state.quiz.answers
export const answersCount = (state: AppState) => state.quiz.answers.length


export const score = (state: AppState) => {
  const qs = questions(state)
  return state.quiz.answers.reduce((sum, answer, index) => {
    if (answer === qs[index].correct_answer) {
      return sum + 1
    }
    return sum
  }, 0)
}
