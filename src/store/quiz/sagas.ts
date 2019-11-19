import Api from 'api';
import { fork } from 'redux-saga/effects';
import { call, take } from 'utils/typedEffects';
import { FetchQuestionsResponse } from "../../api/index";
import { NewGame, QuizActionsConsts } from './types';

function* quizGame() {
  const action: NewGame = yield take(QuizActionsConsts.NEW_GAME)
  const response: FetchQuestionsResponse = yield call(
    Api.questions.fetchQuestions,
    action.numberOfQuestions,
    action.questionDifficulty,
    action.questionType,
  )
  console.log(response)
}

export default function*() {
  yield fork(quizGame)
}
