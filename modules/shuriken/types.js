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

export type Update = {
  +type: 'shuriken/UPDATE',
  +payload: Shuriken[]
}

export type ShurikenAction =
  Shoot |
  Update
