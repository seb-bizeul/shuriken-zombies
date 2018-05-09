// @flow
import * as React from 'react'
import { connect } from 'react-redux'

import * as shurikenActions from '../actions'
import ShurikenGesture from '../components/ShurikenGesture'
import type { ShurikenGestureProps } from '../components/ShurikenGesture'
import type { AppState } from '../../../types'

const mapDispatch: ShurikenGestureProps = ({
  shoot: shurikenActions.shoot
})

export default (connect(
  null,
  mapDispatch
)(ShurikenGesture): React.ComponentType<{}>)
