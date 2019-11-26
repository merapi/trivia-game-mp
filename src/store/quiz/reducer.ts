import { QuizActions, QuizActionsConsts, QuizState } from './types'

const initialState: QuizState = {
  questions: [],
  answers: []
}

export default (
  state: QuizState = initialState,
  action: QuizActions,
) => {
  switch (action.type) {
    case QuizActionsConsts.NEW_GAME: {
      return initialState
    }

    case QuizActionsConsts.SET_QUESTIONS: {
      const { questions } = action

      return ({
        ...state,
        questions,
      })
    }

    case QuizActionsConsts.GIVE_ANSWER: {
      const { answer } = action
      return ({
        ...state,
        answers: [...state.answers, answer]
      })
    }

    default: return state
  }
}
