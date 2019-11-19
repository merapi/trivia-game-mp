import { combineReducers } from 'redux'
import quiz from 'store/quiz/reducer'

const rootReducer = combineReducers({
  quiz,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
