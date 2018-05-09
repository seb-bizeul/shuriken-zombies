// @flow
import * as React from 'react'
import { connect } from 'react-redux'

import * as shurikenSelectors from '../selectors'
import Shuriken from '../components/Shuriken'
import type { ShurikenProps } from '../components/Shuriken'
import type { AppState } from '../../../types'

type Props = {
  id: string
}

const mapStateToProps: ((AppState, Props) => ShurikenProps) = (state, props) => ({
  posX: shurikenSelectors.getOne(state, props.id).map(s => s.posX).getOrElse(0),
  posY: shurikenSelectors.getOne(state, props.id).map(s => s.posX).getOrElse(0),
  rotation: shurikenSelectors.getOne(state, props.id).map(s => s.rotation).getOrElse(0),
  id: props.id
})

export default (connect(
  mapStateToProps
)(Shuriken): React.ComponentType<Props>)
