// @flow
import React from 'react'
import { View } from 'react-native'

import Shuriken from './Shuriken'
import type { Shuriken as ShurikenT } from '../types'

export type ShurikensProps = {
  shurikens: ShurikenT[]
}

export default function Shurikens({ shurikens }: ShurikensProps) {

  const renderShuriken = (shuriken) => {
    return <Shuriken key={shuriken.id} {...shuriken}/>
  }

  return (
    <View style={{ flex: 1 }}>
      {/* { shurikens.map(renderShuriken) } */}
    </View>
  )
}
