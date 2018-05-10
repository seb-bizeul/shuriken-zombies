// @flow
import type { ShurikenState } from './modules/shuriken/types'
import type { ZombieState } from './modules/zombie/types'

export type AppState = $ReadOnly<{|
  shuriken: ShurikenState,
  zombie: ZombieState
|}>
