import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import MainVC from './test/MainVC';
import FindVC from './test/FindVC';
import ReleaseVC from './test//ReleaseVC';
import NewsVC from './test/NewsVC';
import MineVC from './test/MineVC';
import DetailVC from './test/DetailVC';
import ListVC from './test/ListVC'
// 通过TabNavigator做路由映射
const MainScreentNavigator=TabNavigator({
    MainVC:{screen:MainVC},
    FindVC:{screen:FindVC},
    ReleaseVC:{screen:ReleaseVC},
    NewsVC:{screen:NewsVC},
    MineVC:{screen:MineVC},
});
//引入要用到的跳转页面
const  MyNavigatior = StackNavigator({
    Main:{screen:MainScreentNavigator},
    DetailVC:{screen:DetailVC},
    ListVC:{screen:ListVC}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('testdemo', () => MyNavigatior)