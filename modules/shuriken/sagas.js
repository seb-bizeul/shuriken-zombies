// @flow
import { takeEvery, put, select } from 'redux-saga/effects'
import type { Saga } from 'redux-saga'

import loop from '../loop'
import * as shurikenActions from './actions'
import * as shurikenSelectors from './selectors'

export function* updateUI(): Saga<*> {
  const shurikens = yield select(shurikenSelectors.getAll)
  const updatedShurikens = shurikens
    .map(shuriken => ({
      ...shuriken,
      posY: shuriken.posY - 15,
      rotation: shuriken.rotation + 15
    }))
    .filter(shuriken => shuriken.posY >= 0)
  yield put(shurikenActions.update(updatedShurikens))
}

export function* root(): Saga<*> {
  yield takeEvery(loop.actions.TICK, updateUI)
}
