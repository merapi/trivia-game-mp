import { AppState } from 'store/rootReducer'

export const currentQuestion = (state: AppState) => {
  const currentQuestionIndex = state.quiz.answers.length
  return state.quiz.questions[currentQuestionIndex]
}

export const questionsCount = (state: AppState) => state.quiz.questions.length

export const answersCount = (state: AppState) => state.quiz.answers.length
