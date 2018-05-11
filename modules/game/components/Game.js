// @flow
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect, Provider } from 'react-redux'

import shuriken from '../../shuriken'
import zombie from '../../zombie'
import loop from '../../loop'
import type { Zombie } from '../../zombie/types'

export type GameProps = {
  start: typeof loop.actions.start,
  zombies: Zombie[]
}

export default class Game extends React.Component<GameProps> {
  componentDidMount() {
    this.props.start()
  }

  renderZombie(z: Zombie) {
    return <zombie.components.Zombie posX={z.posX} posY={z.posY} spriteIndex={z.spriteIndex} key={z.id}/>
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.zombies.map(this.renderZombie)}
        <shuriken.containers.ShurikenGestureContainer/>
        <shuriken.containers.ShurikensContainer/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan'
  }
})
