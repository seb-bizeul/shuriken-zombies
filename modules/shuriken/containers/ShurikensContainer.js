// @flow
import * as React from 'react'
import { connect } from 'react-redux'

import * as shurikenSelectors from '../selectors'
import Shurikens from '../components/Shurikens'
import type { ShurikensProps } from '../components/Shurikens'
import type { AppState } from '../../../types'

const mapStateToProps: (AppState => ShurikensProps) = state => ({
  shurikens: shurikenSelectors.getAll(state)
})

export default (connect(
  mapStateToProps
)(Shurikens): React.ComponentType<{}>)
