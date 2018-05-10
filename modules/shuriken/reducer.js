// @flow
import * as R from 'ramda'

import { findIndex } from '../../helpers/array'
import * as shurikenActions from './actions'
import type {
  ShurikenState,
  ShurikenAction
} from './types'

export const initialState: ShurikenState = {
  shurikens: []
}

const shurikens = R.lensProp('shurikens')

const shoot = (state, action) => {
  return R.set(shurikens, state.shurikens.concat(action.payload), state)
}

const update = (state, action) => {
  return R.set(shurikens, action.payload, state)
}

const deleteOne = (state, action) => {
  return R.over(shurikens, R.filter(s => s.id !== action.payload), state)
}

export default function shurikenReducer(state: ShurikenState = initialState, action: ShurikenAction) {
  switch (action.type) {
    case shurikenActions.SHOOT:     return shoot(state, action)
    case shurikenActions.UPDATE:    return update(state, action)
    default: return state
  }
}
