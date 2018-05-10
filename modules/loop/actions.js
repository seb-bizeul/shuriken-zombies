// @flow
import type {
  Start,
  Stop,
  Tick
} from './types'

export const START  = 'loop/START'
export const STOP   = 'loop/STOP'
export const TICK   = 'loop/TICK'

export const start = (): Start => {
  return { type: START }
}

export const stop = (): Stop => {
  return { type: STOP }
}

export const tick = (counter: number): Tick => {
  return { type: TICK, payload: counter }
}
