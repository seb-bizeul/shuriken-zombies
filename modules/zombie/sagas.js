// @flow
import { takeEvery, select, put } from 'redux-saga/effects'
import type { Saga } from 'redux-saga'
import { Dimensions } from 'react-native'

import * as zombieSelectors from './selectors'
import * as zombieActions from './actions'
import loop from '../loop'
import type { Zombie } from './types'
import type { Tick } from '../loop/types'

export function* updateUI(action: Tick): Saga<*> {
  const zombies: Zombie[] = yield select(zombieSelectors.getAll)
  if (action.payload % 4 === 0) {
    const updatedZombies = zombies
      .map(zombie => ({
        ...zombie,
        posX: zombie.posX + 1,
        spriteIndex: zombie.spriteIndex >= 5 ? 0 : zombie.spriteIndex + 1
      }))
      .filter(zombie => zombie.posX <= Dimensions.get('screen').width)
    yield put(zombieActions.update(updatedZombies))
  }
}

export function* root(): Saga<*> {
  yield takeEvery(loop.actions.TICK, updateUI)
}