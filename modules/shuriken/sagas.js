// @flow
import { takeEvery, put, select, all } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import type { Saga } from 'redux-saga'
import { Dimensions } from 'react-native'
import {batchActions, enableBatching, batchDispatchMiddleware} from 'redux-batched-actions'

import loop from '../loop'
import * as shurikenActions from './actions'
import * as shurikenSelectors from './selectors'
import type { Shoot, Shuriken } from './types'

export function* computeShurikenPositions(): Saga<*> {
  const shurikens = yield select(shurikenSelectors.getAll)
  const actions = shurikens
    .map(shuriken => ({
      ...shuriken,
      posY: shuriken.posY - 10,
      rotation: shuriken.rotation + 10
    }))
    .filter(shuriken => shuriken.posY >= 0)
  yield put(shurikenActions.update(actions))
}

export function* root(): Saga<*> {
  yield takeEvery(loop.actions.TICK, computeShurikenPositions)
}
