// @flow
import * as React from 'react'
import { connect } from 'react-redux'

import Game from '../components/Game'
import loop from '../../loop'
import zombie from '../../zombie'
import type { GameProps } from '../components/Game'
import type { Zombie } from '../../zombie/types'
import type { AppState } from '../../../types'

type MapState = {|
  zombies: Zombie[]
|}

type MapDispatch = {|
  start: typeof loop.actions.start
|}

const mapStateToProps: (AppState => MapState) = state => ({
  zombies: zombie.selectors.getAll(state)
})

const mapDispatchToProps: MapDispatch = {
  start: loop.actions.start
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(Game): React.ComponentType<{}>)