// @flow
import type { ShurikenState } from './modules/shuriken/types'

export type AppState = $ReadOnly<{|
  shuriken: ShurikenState
|}>