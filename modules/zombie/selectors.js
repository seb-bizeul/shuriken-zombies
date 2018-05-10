// @flow
import { createSelector } from 'reselect'

import type { Zombie, ZombieState } from './types'
import type { AppState } from '../../types'

export const getState = (state: AppState): ZombieState => state.zombie

export const getAll: (state: AppState) => Zombie[] = createSelector(
  getState,
  state => state.zombies
)
