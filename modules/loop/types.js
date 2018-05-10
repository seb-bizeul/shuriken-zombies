// @flow
export type Start = {
  +type: 'loop/START'
}

export type Stop = {
  +type: 'loop/STOP'
}

export type Tick = {
  +type: 'loop/TICK',
  +payload: number
}

export type GameAction =
  Start |
  Stop  |
  Tick
