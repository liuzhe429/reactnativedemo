import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 TouchableOpacity
} from 'react-native';
export default class MineVC extends Component {
 
 static navigationOptions = {
   headerTitle: '我的',
   tabBarLabel: '我的',
   tabBarIcon:<View style={{height:30,width:30,backgroundColor:'red'}}></View>
 };
 render() {
   const { navigate } = this.props.navigation;
   return (
     <View style={styles.container}>
       <TouchableOpacity style={{height:60,backgroundColor:'orange',justifyContent: 'center',}}
                          onPress={() => navigate('ListVC', { title: '详情',des:'我是返回点击我22' })} >
           <Text style={{marginTop:300}}>点击进list222</Text>
        </TouchableOpacity>
     </View>
   );
 }
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#F5FCFF',
 },
});