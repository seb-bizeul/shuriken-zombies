// @flow
import React from 'react'
import { View } from 'react-native'

import Shuriken from './Shuriken'
import type { Shuriken as ShurikenT } from '../types'

export type ShurikensProps = {
  shurikens: ShurikenT[]
}

export default class Shurikens extends React.Component<ShurikensProps> {

  renderShuriken(shuriken: ShurikenT) {
    return <Shuriken key={shuriken.id} {...shuriken}/>
  }

  render() {
  return (
    <View style={{ flex: 1 }}>
      { this.props.shurikens.map(this.renderShuriken) }
    </View>
  )
  }
}
