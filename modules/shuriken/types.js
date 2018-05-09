// @flow
import type { Map } from '../../helpers/map'

export type Shuriken = $ReadOnly<{|
  posX: number,
  posY: number,
  velocity: number,
  rotation: number,
  id: string
|}>

export type ShurikenState = $ReadOnly<{|
  shurikens: Shuriken[]
|}>

export type Shoot = {
  +type: 'shuriken/SHOOT',
  +payload: Shuriken
}

export type Move = {
  +type: 'shuriken/MOVE',
  +payload: Shuriken
}

export type Delete = {
  +type: 'shuriken/DELETE',
  +payload: string
}

export type ShurikenAction =
  Shoot |
  Move  |
  Delete
