import Api, { FetchQuestionsResponse, GetTokenResponse, ResponseCode } from 'api'
import { navigate } from 'hookrouter'
import { fork } from 'redux-saga/effects'
import { Results } from 'routes'
import { getItem, setItem } from 'utils/storage'
import { call, put, select, take } from 'utils/typedEffects'
import * as quizActions from './actions'
import * as quizSelectors from './selectors'
import { NewGame, QuizActionsConsts } from './types'

function* newToken() {
  const tokenResponse: GetTokenResponse = yield call(Api.questions.getToken)
  const { token } = tokenResponse
  yield call(setItem, 'token', token)
  return token
}

export function* getToken() {
  let token = yield call(getItem, 'token')
  if (!token) {
    token = yield call(newToken)
  }
  return token
}

function* fetchQuestions(gameSettings: NewGame) {
  let token: string = yield call(getToken)

  do {
    const response: FetchQuestionsResponse = yield call(
      Api.questions.fetchQuestions,
      gameSettings.numberOfQuestions,
      gameSettings.questionDifficulty,
      gameSettings.questionType,
      token,
    )
    if ([ResponseCode.TokenEmpty, ResponseCode.TokenNotFound].includes(response.response_code)) {
      token = yield call(newToken)
    } else {
      return response
    }
  } while (true)
}

function* gameFlow() {
  while (true) {
    const gameSettings: NewGame = yield take(QuizActionsConsts.NEW_GAME)
    const response: FetchQuestionsResponse = yield call(
      fetchQuestions,
      gameSettings,
    )

    // Safely decode the questions without dangerouslySetInnerHTML
    yield put(
      quizActions.setQuestions(
        response.results.map(q => {
          return {
            ...q,
            question: decodeURIComponent(q.question),
            category: decodeURIComponent(q.category),
            correct_answer: decodeURIComponent(q.correct_answer),
            incorrect_answers: q.incorrect_answers.map(ia =>
              decodeURIComponent(ia),
            ),
          }
        }),
      ),
    )

    let answersCount = 0
    do {
      yield take(QuizActionsConsts.GIVE_ANSWER)
      answersCount = yield select(quizSelectors.answersCount)
      if (answersCount + 1 === gameSettings.numberOfQuestions) {
        Results.preload()
      }
    } while (answersCount < gameSettings.numberOfQuestions)

    yield call(navigate, '/results')
  }
}

export default function*() {
  yield fork(gameFlow)
}
