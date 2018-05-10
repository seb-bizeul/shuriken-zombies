// @flow
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect, Provider } from 'react-redux'

import shuriken from '../../shuriken'
import loop from '../../loop'

type Props = {
  start: typeof loop.actions.start
}

export class Root extends React.Component<Props> {
  componentDidMount() {
    this.props.start()
  }

  render() {
    return (
      <View style={styles.container}>
        <shuriken.containers.ShurikenGestureContainer/>
        <shuriken.containers.ShurikensContainer/>
      </View>
    )
  }
}

export default connect(
  null,
  { start: loop.actions.start }
)(Root)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan'
  },
})
