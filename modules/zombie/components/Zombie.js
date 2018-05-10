// @flow
import React from 'react'
import {
  Image,
  View,
  Dimensions
} from 'react-native'

type ZombieProps = $ReadOnly<{
  spriteIndex: number,
  posX: number,
  posY: number
}>

export default class Zombie extends React.Component<ZombieProps> {

  sprites: string[] = []

  constructor(props: ZombieProps) {
    super(props)
    this.sprites = [
      require('../../../resources/Zombie1/animation/Walk1.png'),
      require('../../../resources/Zombie1/animation/Walk2.png'),
      require('../../../resources/Zombie1/animation/Walk3.png'),
      require('../../../resources/Zombie1/animation/Walk4.png'),
      require('../../../resources/Zombie1/animation/Walk5.png'),
      require('../../../resources/Zombie1/animation/Walk6.png')
    ]
  }

  render() {
    return (
      <View style={{ position: 'absolute', top: this.props.posY, left: this.props.posX }}>
        <Image source={this.sprites[this.props.spriteIndex]} style={{ width: 30, height: 60 }}/>
      </View>
    )
  }
}