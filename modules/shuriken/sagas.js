// @flow
import { takeEvery, put, select, all } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import type { Saga } from 'redux-saga'
import { Dimensions } from 'react-native'

import loop from '../loop'
import * as shurikenActions from './actions'
import * as shurikenSelectors from './selectors'
import type { Shoot, Shuriken } from './types'


export function* computeShurikenPositions(): Saga<*> {
  const shurikens = yield select(shurikenSelectors.getAll)
  yield all(shurikens.map(shuriken => {
    if (shuriken.posY <= 0) {
      return put(shurikenActions.deleteOne(shuriken.id))
    }
    return put(shurikenActions.move({
      ...shuriken,
      posY: shuriken.posY - 10,
      rotation: shuriken.rotation + 10
    }))
  }))
}

export function* root(): Saga<*> {
  yield takeEvery(loop.actions.TICK, computeShurikenPositions)
}
