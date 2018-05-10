// @flow
import {
  Dimensions
} from 'react-native'

import type {
  Shuriken,
  Shoot,
  Update,
} from './types'

export const SHOOT =    'shuriken/SHOOT'
export const UPDATE =   'shuriken/UPDATE'

export const shoot = (posX: number, posY: number, velocity: number): Shoot => {
  return {
    type: SHOOT,
    payload: { id: Date.now().toString(), posX, posY: Dimensions.get('screen').height - 10, velocity: +velocity, rotation: 0 }
  }
}

export const update = (shurikens: Shuriken[]): Update => {
  return { type: UPDATE, payload: shurikens }
}
