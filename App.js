// @flow
import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import root from './modules/root'
import game from './modules/game'

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Provider store={root.store}>
          <game.containers.GameContainer/>
        </Provider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
