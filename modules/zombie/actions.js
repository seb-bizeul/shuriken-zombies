// @flow
import type {
  Zombie,
  Update,
} from './types'

export const UPDATE = 'zombie/UPDATE'

export const update = (zombies: Zombie[]): Update => {
  return { type: UPDATE, payload: zombies }
}

