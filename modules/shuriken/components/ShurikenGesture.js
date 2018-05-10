// @flow
import React from 'react'
import {
  View,
  StyleSheet,
  PanResponder
} from 'react-native'

import type { Shuriken } from '../types'

export type ShurikenGestureProps = {
  shoot: (number, number) => any
}

export default class ShurikenGesture extends React.Component<ShurikenGestureProps> {

  panResponder: any

  constructor(props: ShurikenGestureProps) {
    super(props)
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderRelease: this.handleRelease
    })
  }

  handleRelease = (evt: any, gestureState: any) => {
    this.props.shoot(gestureState.moveX, gestureState.vy)
  }

  render() {
    return (
      <View style={styles.container} {...this.panResponder.panHandlers}/>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000
  }
})
