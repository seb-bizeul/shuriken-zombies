// @flow
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'

import root from './modules/root'
import shuriken from './modules/shuriken'

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={root.store}>
        <View style={styles.container}>
          <shuriken.containers.ShurikenGestureContainer/>
          <shuriken.containers.ShurikensContainer/>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
