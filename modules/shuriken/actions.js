// @flow
import {
  Dimensions
} from 'react-native'

import type {
  Shuriken,
  Shoot,
  Move,
  Delete
} from './types'

export const SHOOT =  'shuriken/SHOOT'
export const MOVE =   'shuriken/MOVE'
export const DELETE = 'shuriken/DELETE'

export const shoot = (posX: number, posY: number, velocity: number): Shoot => {
  return {
    type: SHOOT,
    payload: { id: Date.now().toString(), posX, posY: Dimensions.get('screen').height, velocity: +velocity, rotation: 0 }
  }
}

export const move = (shuriken: Shuriken): Move => {
  return { type: MOVE, payload: shuriken }
}

export const deleteOne = (id: string): Delete => {
  return { type: DELETE, payload: id }
}
