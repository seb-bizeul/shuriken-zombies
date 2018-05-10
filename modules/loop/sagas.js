// @flow
import { eventChannel, type Saga } from 'redux-saga'
import { call, takeEvery, take, put, select } from 'redux-saga/effects'

import * as loopActions from './actions'
import type { Tick } from './types'

function createChannel() {
  return eventChannel(emitter => {
    function loop() {
      emitter(1)
      requestAnimationFrame(loop)
    }
    requestAnimationFrame(loop)
    return () => {}
  })
}

export function* startLoop(): Saga<*> {
  const chan = yield call(createChannel)
  while (true) {
    const x = yield take(chan)
    yield put(loopActions.tick())
  }
}

export function* root(): Saga<*> {
  yield takeEvery(loopActions.START, startLoop)
}