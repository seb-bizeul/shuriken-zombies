// @flow
export type Start = {
  +type: 'loop/START'
}

export type Stop = {
  +type: 'loop/STOP'
}

export type Tick = {
  +type: 'loop/TICK'
}

export type GameAction =
  Start |
  Stop  |
  Tick
