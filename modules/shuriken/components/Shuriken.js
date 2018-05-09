// @flow
import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  PanResponder
} from 'react-native'

import shuriken from '../../../resources/shuriken.png'

export type ShurikenProps = $ReadOnly<{
  posX: number,
  posY: number,
  rotation: number,
  id: string
}>

export default function Shuriken({ posX, posY, rotation }: ShurikenProps) {
  return (
    <View style={[styles.container, { top: posY, left: posX, transform: [{ rotate: `${rotation}deg` }] }]}>
      <Image
        source={shuriken}
        style={{ width: 20, height: 20 }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute'
  }
})
