// @flow
import * as R from 'ramda'

import * as zombieActions from './actions'
import type {
  ZombieState,
  ZombieAction
} from './types'

export const initialState: ZombieState = {
  zombies: [
    { posX: 0, posY: 10, spriteIndex: 0, id: Date.now().toString() },
    { posX: 50, posY: 100, spriteIndex: 0, id: 'A' },
  ]
}

const zombies = R.lensProp('zombies')

const update = (state, action) => {
  return R.set(zombies, action.payload, state)
}

export default function zombieReducer(state: ZombieState = initialState, action: ZombieAction) {
  switch (action.type) {
    case zombieActions.UPDATE: return update(state, action)
    default: return state
  }
}
