// @flow
import { takeEvery, call, put, take, fork } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import type { Saga } from 'redux-saga'
import { Dimensions } from 'react-native'

import * as shurikenActions from './actions'
import type { Shoot, Shuriken } from './types'

function loop(shuriken: Shuriken) {
  return eventChannel(emitter => {
    const start = Date.now()
    function loop(time) {
      emitter(shuriken)
    }
    requestAnimationFrame(loop)
    return () => {}
  })
}

export function* shoot(action: Shoot): Saga<*> {
  const chan = yield call(loop, action.payload)
  while (true) {
    const x = yield take(chan)
    if (action.payload.posY > 0) {
      yield put(shurikenActions.move({
        ...action.payload,
        posY: action.payload.posY - 10,
        rotation: action.payload.rotation + 10
      }))
    }
    else {
      yield put(shurikenActions.deleteOne(action.payload.id))
    }
  }
}

export function* root(): Saga<*> {
  yield takeEvery(shurikenActions.SHOOT, shoot)
  yield takeEvery(shurikenActions.MOVE, shoot)
}