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

const startPosition = Dimensions.get('screen').height - 10

export const shoot = (posX: number, velocity: number): Shoot => {
  return {
    type: SHOOT,
    payload: {
      id: Date.now().toString(),
      posX,
      posY: startPosition,
      velocity: +velocity,
      rotation: 0
    }
  }
}

export const update = (shurikens: Shuriken[]): Update => {
  return { type: UPDATE, payload: shurikens }
}
