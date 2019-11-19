import { all } from 'redux-saga/effects'
import quiz from './quiz/sagas'

export default function* rootSaga() {
  yield all([quiz()])
}
