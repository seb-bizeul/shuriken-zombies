// @flow
import { eventChannel, type Saga } from 'redux-saga'
import { call, takeEvery, take, put, select } from 'redux-saga/effects'

import * as loopActions from './actions'
import type { Tick } from './types'

function createChannel() {
  let counter = 0
  return eventChannel(emitter => {
    function loop() {
      emitter(counter++)
      requestIdleCallback(loop)
    }
    requestIdleCallback(loop)
    return () => {}
  })
}

export function* startLoop(): Saga<*> {
  const chan = yield call(createChannel)
  while (true) {
    const x = yield take(chan)
    yield put(loopActions.tick(x))
  }
}

export function* root(): Saga<*> {
  yield takeEvery(loopActions.START, startLoop)
}