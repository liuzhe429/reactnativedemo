import React,{ Component } from 'react'
import {
  AppRegistry,
  Text,
  Button,
  View,
  StyleSheet,
  Image
} from 'react-native'
import { styles } from "./common"
class MyScreen extends React.Component {
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back 首页"
      />
    )
  }
}
export default MyScreen
