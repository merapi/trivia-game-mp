import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';



const middleware = []

const sagaMiddleware = createSagaMiddleware()
middleware.push(sagaMiddleware)

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  const { createLogger } = require(`redux-logger`);
  middleware.push(createLogger());
  // middleware.push(createLogger({ colors: process.env.NODE_ENV !== 'test' }));
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : compose,
  ),
)

sagaMiddleware.run(rootSaga)

export default store
