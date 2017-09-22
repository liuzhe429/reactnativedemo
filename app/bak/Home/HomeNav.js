import React, { Component } from 'react'
import { Navigator } from 'react-native-deprecated-custom-components'
import HomeIndex from './index'
// import navigationBar from 'HSNavBar'

const initialRoute = {name:"HomeIndex",component: HomeIndex}

class HomeScreen extends Component {
  constructor () {
    super()
    this.renderScene = this.renderScene.bind(this)
  }
  renderScene (route, navigator) {
    return (
      <route.component navigator={navigator} {...route.passProps} />
    )
  }
  render () {
    return (
      // navigationBar={navigationBar()}
      <Navigator
        initialRoute={initialRoute}
        configureScene={(route) => ({
          
          ...Navigator.SceneConfigs.HorizontalSwipeJump,
          gestures: { pop: false }
        })}
        renderScene={this.renderScene.bind(this)} />
    )
  }
}

export default HomeScreen
