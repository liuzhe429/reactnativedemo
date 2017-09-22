import React,{ Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  render() {
    const { navigate } = this.props.navigation
    return  (
            <View>
              <Text>Hello, Navigation!</Text>
              <Button onPress={() => navigate('Chat',{ user: 'Lucy'})} title="chat width lucy"></Button>
            </View>
    )
  }
}
class ChatScreen extends Component {
  static navigationOptions =( {navigation} )=>({
    title: `Chat with ${navigation.state.params.user}`,
  })
  render() {
    const { params } = this.props.navigation.state
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: {screen: ChatScreen}
});

AppRegistry.registerComponent('testdemo', () => SimpleApp);