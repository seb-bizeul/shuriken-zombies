// @flow
export type Zombie = $ReadOnly<{|
  posX: number,
  posY: number,
  spriteIndex: number,
  id: string
|}>

export type ZombieState = $ReadOnly<{|
  zombies: Zombie[]
|}>

export type Update = {
  +type: 'zombie/UPDATE',
  +payload: Zombie[]
}

export type ZombieAction =
  Update
