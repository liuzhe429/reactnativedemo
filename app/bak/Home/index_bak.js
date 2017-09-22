import React,{ Component } from 'react'
import {
  AppRegistry,
  Text,
  Button,
  View,
  StyleSheet,
  Image
} from 'react-native'
import Swiper from 'react-native-swiper'
import "./index"
let style = StyleSheet.create({
  icon: {
    width: 19,
    height: 19,
  },
  slide: {
    width:"100%",
    height:"100%"
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  list: {
    //justifyContent: 'space-around',
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
  },
  sectionHeader: {
    marginLeft: 10,
    padding: 6.5,
    fontSize: 12,
    color: '#787878'
  },
  
})
let Dimensions = require('Dimensions');//获取屏幕的宽高
let ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this._renderItem = this._renderItem.bind(this)
    this.renderExpenseItem = this.renderExpenseItem.bind(this)
  }
  _renderItem = ({ item })=>(
      <View>
        {
            item.map((item, i) => this.renderExpenseItem(item, i))
        }
      </View>
  )
  renderExpenseItem = ({ item })=>{
    return  <TouchableOpacity key={i} onPress={() => this._pressRow(item)} underlayColor="transparent">
                {/* <View style={styles.row}>
                    <CellView source={item.img}></CellView>
                </View> */}
            </TouchableOpacity>
  }
  _renderSectionHeader = ({ section }) => (
    <View style={{ flex: 1, height: 25 }}>
        {/* <Text style={styles.sectionHeader} >{section.key}</Text> */}
    </View>
  )
  render() {
    return (
      <View style={{paddingTop:25,backgroundColor:"#fff"}}>
        {/* logo部分 start */}
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:10,paddingBottom:10,borderBottomWidth:1,borderBottomColor:"#ccc"}}>
          <Image
            source={require('../images/header/home_logoicon.png')}
            style={{width:88,height:28}}/>
        </View>
        {/* logo部分 end */}
        {/* 轮播图部分 start */}
        <View style={{height:160,backgroundColor:"#fff"}}>
          <Swiper horizontal={true} autoplay>
            <View style={style.slide}>
              <Image source={require('../images/banner/1.jpg')}/>
            </View>
            <View style={style.slide}>
              <Image source={require('../images/banner/2.jpg')}/>
            </View>
            <View style={style.slide}>
              <Image source={require('../images/banner/3.jpg')}/>
            </View>
            <View style={style.slide}>
              <Image source={require('../images/banner/4.jpg')}/>
            </View>
          </Swiper>
        </View>
        {/* 轮播图部分 end */}
        {/* 随鑫约部分 */}
        <View>
          <SectionList
            renderItem={this._renderItem}
            renderSectionHeader={this._renderSectionHeader}
            sections={[
              {
                "investLine": "36",
                "unitType": "2",
                "investUnit": "个月",
                "buttonName": "去预约",
                "tagBefore": "预计9月19日起息",
                "tagAfter": "",
                "displayMoney": 1,
                "countDisplay": 0,
                "count": "100.00元起投",
                "amount": "26,963.82万元",
                "rate": "12.50%",
                "dealType": 0,
                "appointUrl": "/deal/reserve?investLine=36&investUnit=2",
                "detailUrl": "/deal/reservedetail?line_unit=36_2",
                "rateText": "年化借款利率"
              },
              {
                "investLine": "36",
                "unitType": "2",
                "investUnit": "个月",
                "buttonName": "去预约",
                "tagBefore": "预计9月19日起息",
                "tagAfter": "",
                "displayMoney": 1,
                "countDisplay": 0,
                "count": "100.00元起投",
                "amount": "26,963.82万元",
                "rate": "12.50%",
                "dealType": 0,
                "appointUrl": "/deal/reserve?investLine=36&investUnit=2",
                "detailUrl": "/deal/reservedetail?line_unit=36_2",
                "rateText": "年化借款利率"
              }
            ]}
          />
        </View>
      </View>
    )
  }
}
export default HomeScreen