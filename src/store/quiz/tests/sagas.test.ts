import Api from 'api'
import {
  NUMBER_OF_QUESTIONS,
  QUESTIONS_DIFFICULTY,
  QUESTIONS_TYPE,
} from 'config/consts'
import { navigate } from 'hookrouter'
import { expectSaga } from 'redux-saga-test-plan'
import { call } from 'redux-saga/effects'
import rootReducer from 'store/rootReducer'
import { mockQuestion } from 'tests/fixtures/question.fixture'
import * as quizActions from '../actions'
import sagas, { getToken } from '../sagas'

describe('Quiz saga', () => {
  test('Answer 10 questions', async () => {
    const randomToken = 'randomToken'
    return expectSaga(sagas)
      .withReducer(rootReducer)
      .provide([
        [call(getToken), randomToken],
        [
          call(
            Api.questions.fetchQuestions,
            NUMBER_OF_QUESTIONS,
            QUESTIONS_DIFFICULTY,
            QUESTIONS_TYPE,
            randomToken,
          ),
          { results: Array(10).fill(mockQuestion), response_code: 0 },
        ],
      ])
      .dispatch(
        quizActions.newGame(
          NUMBER_OF_QUESTIONS,
          QUESTIONS_DIFFICULTY,
          QUESTIONS_TYPE,
        ),
      )
      .dispatch(quizActions.giveAnswer('True'))
      .dispatch(quizActions.giveAnswer('True'))
      .dispatch(quizActions.giveAnswer('True'))
      .dispatch(quizActions.giveAnswer('True'))
      .dispatch(quizActions.giveAnswer('True'))
      .dispatch(quizActions.giveAnswer('True'))
      .dispatch(quizActions.giveAnswer('True'))
      .dispatch(quizActions.giveAnswer('True'))
      .dispatch(quizActions.giveAnswer('True'))
      .dispatch(quizActions.giveAnswer('True'))
      .call(getToken)
      .call(
        Api.questions.fetchQuestions,
        NUMBER_OF_QUESTIONS,
        QUESTIONS_DIFFICULTY,
        QUESTIONS_TYPE,
        randomToken,
      )
      .call(navigate, '/results')
      .silentRun()
  })
})
