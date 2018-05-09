// @flow
import Maybe from 'data.maybe'
import { createSelector } from 'reselect'

import { type Map, toArray } from '../../helpers/map'
import { find } from '../../helpers/array'
import type { AppState } from '../../types'
import type { Shuriken, ShurikenState } from './types'

export const getState = (state: AppState): ShurikenState => state.shuriken

export const getAll: (state: AppState) => Shuriken[] = createSelector(
  getState,
  state => state.shurikens
)

export const getOne = (state: AppState, id: string): Maybe<Shuriken> => {
  return find(shuriken => shuriken.id === id, state.shuriken.shurikens)
}
