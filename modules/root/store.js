// @flow
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import saga from './saga'
import shuriken from '../shuriken'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  shuriken: shuriken.reducer
})

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(saga)

export default store
