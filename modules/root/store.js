// @flow
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import saga from './saga'
import shuriken from '../shuriken'
import zombie from '../zombie'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  shuriken: shuriken.reducer,
  zombie: zombie.reducer
})

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(saga)

export default store
