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
  },
  sectionHeader: {
    marginLeft: 10,
    padding: 6.5,
    fontSize: 12,
    color: '#787878'
  },
  arrow:{
    width:20,
    marginTop:7,
    marginLeft:2,
    marginRight:0,
  }
})
class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this._renderItem = this._renderItem.bind(this)
    this._renderSectionHeader = this._renderSectionHeader.bind(this)
    this._extraUniqueKey = this._extraUniqueKey.bind(this)
  }
  _renderItem = (info) => {
    return <View style={{borderColor:"green",borderWidth:0,}}>
            {
              info.item.tagBefore || info.item.tagAfter
              ?
                <View style={{width:"100%",height:30,flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",paddingTop:5}}>
                {
                  info.item.tagBefore
                  ?
                  <Text
                    style={{textAlignVertical:'center',color:'#e63207',fontSize:10,borderWidth:1,borderColor:"#e63207",borderRadius:6,marginLeft:15,marginRight:5}}>{info.item.tagBefore}</Text>
                    : null
                }
                
                {
                  info.item.tagAfter
                  ?
                  <Text
                    style={{textAlignVertical:'center',color:'#e63207',fontSize:10,borderWidth:1,borderColor:"#e63207",borderRadius:6,}}>{info.item.tagAfter}</Text>
                  : null
                }
              </View>
              : null
            }
            
            <View style={{width:"100%",flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",paddingTop:5}}>
              <View style={{flex:1}}>
                <Text style={{textAlignVertical:'center',color:'#909090',fontSize:11,marginLeft:15,marginRight:5,height:20,textAlignVertical:"center"}}>
                  年化借款利率
                </Text>
                <Text style={{textAlignVertical:'center',color:'#e63207',fontSize:24,fontWeight:"500",marginLeft:15,marginRight:5}}>
                  5.30%
                </Text>
              </View>
              <View style={{flex:1}}>
                <Text style={{textAlignVertical:'center',color:'#909090',fontSize:10,marginLeft:15,marginRight:5,height:20,textAlignVertical:"center"}}>
                  期限
                </Text>
                <Text style={{textAlignVertical:'center',color:'#e63207',fontSize:24,fontWeight:"500",marginLeft:15,marginRight:5}}>
                  21<Text style={{fontSize:15}}>天</Text>
                </Text>
              </View>
              <View style={{flex:1}}>
                <Text style={{textAlignVertical:'center',color:'#909090',fontSize:10,marginLeft:15,marginRight:5,height:20,textAlignVertical:"center"}}>
                  
                </Text>
                <View style={{display:"flex",flex:1,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
                  <Text style={{color:'#fff',fontSize:12,marginRight:15,borderWidth:1,borderRadius:10,borderColor:"#e63207",paddingTop:3,paddingBottom:3,paddingLeft:5,paddingRight:5}}>
                    <Text style={{width:"100%",height:"100%",backgroundColor:"#e63207"}}>去预约</Text>
                  </Text>
                </View>
                
              </View>
            </View>
          </View>
}
  _renderSectionHeader = (info) => {
    return <View style={{height:50,flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <View style={{width:"50%",flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
              <Text style={{height:20,textAlign:'left',width:2,backgroundColor:"#ee4634",marginLeft:15,marginRight:6}}></Text>
              <Text style={{textAlign:'left',fontSize:15,color:'#000',}}>{info.section.key}</Text>
            </View>
            <View style={{width:"50%",flex:1,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
              <Text style={{width:"20%",textAlign:'right'}}>更多</Text>
              <Text style={SwiperCss.arrow}>
                <Image
                  source={require('./images/arrows_reserve.png')}
                  style={{width:8,height:13}}/>
              </Text>
            </View>
            </View>
  }
  _extraUniqueKey(item ,index){
    return "index"+index+item;
  } 
  _renderSectionHeader2 = (info) => {
    return <View style={{height:1,backgroundColor:"#d8d8d8"}}></View>
  }
  _ListFooterComponent (){
    return <View style={{height:60}}></View>
  }
  render() {
    let sxydatas = [{
      "investLine": "36",
      "unitType": "2",
      "investUnit": "个月",
      "buttonName": "去预约",
      "tagBefore": "预计9月19日起息",
      "tagAfter": "",
      "displayMoney": 1,
      "countDisplay": 0,
      "count": "100.00元起投",
      "amount": "27,025.34万元",
      "rate": "12.50%",
      "dealType": 0,
      "appointUrl": "/deal/reserve?investLine=36&investUnit=2",
      "detailUrl": "/deal/reservedetail?line_unit=36_2",
      "rateText": "年化借款利率"
    },{
      "investLine": "21",
      "unitType": "1",
      "investUnit": "天",
      "buttonName": "去预约",
      "tagBefore": "投资即返1.5%红包",
      "tagAfter": "预计9月19日起息",
      "displayMoney": 1,
      "countDisplay": 0,
      "count": "100.00元起投",
      "amount": "597,687.18万元",
      "rate": "5.30%",
      "dealType": 0,
      "appointUrl": "/deal/reserve?investLine=21&investUnit=1",
      "detailUrl": "/deal/reservedetail?line_unit=21_1",
      "rateText": "年化借款利率"
    }]
    let zxdatas=[{
      "productID": "kCwk",
      "type": "资产管理",
      "title": "盈嘉A003327615",
      "timelimit": "6",
      "total": "2,500.00万",
      "avaliable": "23,270,839.68",
      "mini": "12.10万",
      "repayment": "按月支付收益到期还本",
      "loantype": "4",
      "stats": "1",
      "crowd_str": "全部用户",
      "deal_crowd": "0",
      "start_loan_time": "",
      "income_base_rate": "8.40",
      "income_ext_rate": 0,
      "rate": "8.40",
      "money_loan": "23270839.68",
      "daren": 0,
      "deal_tag_name": "果粉标＋高净值尊享＋满标有礼",
      "deal_type": 0,
      "product_name": "友居贷3号-1",
      "timeunit": "个月"
    },{
      "productID": "kCuE",
      "type": "资产管理",
      "title": "盈嘉A003327253",
      "timelimit": "12",
      "total": "3,255.00万",
      "avaliable": "18,656,875.18",
      "mini": "11.00万",
      "repayment": "按月支付收益到期还本",
      "loantype": "4",
      "stats": "1",
      "crowd_str": "全部用户",
      "deal_crowd": "0",
      "start_loan_time": "",
      "income_base_rate": "9.30",
      "income_ext_rate": 0,
      "rate": "9.30",
      "money_loan": "18656875.18",
      "daren": 0,
      "deal_tag_name": "高净值客户尊享+满标有礼",
      "deal_type": 0,
      "product_name": "长兴8号-1",
      "timeunit": "个月"
    }]
    var sections = [{
      key:"随鑫约",
      data: sxydatas
    },{
      key:"专享",
      data: zxdatas
    }]
    
    return (
      <View style={{paddingTop:25,backgroundColor:"#fff"}}>
        {/* logo部分 start */}
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:10,paddingBottom:10,borderBottomWidth:1,borderBottomColor:"#ccc"}}>
          <Image
            source={require('../images/header/home_logoicon.png')}
            style={{width:88,height:28}}/>
        </View>
        {/* logo部分 end */}
        
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
        {/* 随鑫约部分 */}
        <View>
          <SectionList
            sections={sections}
            keyExtractor = {this._extraUniqueKey}
            SectionSeparatorComponent={this._renderSectionHeader2}
            ListFooterComponent={this._ListFooterComponent}
            renderItem={this._renderItem}
            renderSectionHeader={this._renderSectionHeader}
            ItemSeparatorComponent=""/>
        </View>
        </ScrollView>
      </View>
    )
  }
}
export default HomeScreen