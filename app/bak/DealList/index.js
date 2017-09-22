import React,{ Component } from 'react'
import {
  AppRegistry,
  Text,
  Button,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SectionList
} from 'react-native'
import Swiper from 'react-native-swiper'
import "./index"
import  Dimensions from 'Dimensions'//获取屏幕的宽高
import homeScreen from "../Home/homeRootContainer"
let ScreenWidth = Dimensions.get('window').width
var ScreenHeight = Dimensions.get('window').height
let SwiperCss = StyleSheet.create({
  icon: {
    width: 19,
    height: 19,
  },
  slide: {
    width:"100%",
    height:"100%"
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF'
  },
  row: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    width: (ScreenWidth - 1) / 4,
    height: (ScreenWidth - 1) / 4,
    alignItems: 'center',
  }
})
class DealListScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{paddingTop:25,backgroundColor:"#fff"}}>
        <ScrollView>
        {/* 轮播图部分 start */}
        <View style={{height:160,backgroundColor:"#fff"}}>
          <Swiper horizontal={true} autoplay>
            <View>
              <Image source={require('../images/banner/11.jpg')} style={{width:"100%",height:"100%",alignItems:"center",alignSelf:"center"}}/>
            </View>
            <View>
              <Image source={require('../images/banner/22.jpg')} style={{width:"100%",height:"100%",alignItems:"center",alignSelf:"center"}}/>
            </View>
            <View>
              <Image source={require('../images/banner/3.jpg')} style={{width:"100%",height:"100%",alignItems:"center",alignSelf:"center"}}/>
            </View>
            <View>
              <Image source={require('../images/banner/4.jpg')} style={{width:"100%",height:"100%",alignItems:"center",alignSelf:"center"}}/>
            </View>
          </Swiper>
        </View>
        {/* 轮播图部分 end */}
        
        </ScrollView>
      </View>
    )
  }
}
export default DealListScreen