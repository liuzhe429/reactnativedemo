import React,{ Component } from 'react'
import {
  AppRegistry,
  Text,
  Button,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SectionList,
  TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'
import "./index"
import DealListScreen from "../DealList"
import DashLine from "../components/DashLine"
import  Dimensions from 'Dimensions'//获取屏幕的宽高
let ScreenWidth = Dimensions.get('window').width
var ScreenHeight = Dimensions.get('window').height

class HomeIndex extends Component {
  static navigationOptions = {
    headerTitle: '首页',//对页面的配置
    tabBarLabel: '首页',
    tabBarIcon:<View style={{height:30,width:30,backgroundColor:'red'}}></View>
  }
  constructor(props) {
    super(props)
  }
  _renderItem = (info) => {
    return <View style={{backgroundColor:"#fff"}}>
            {
              info.item.tagBefore || info.item.tagAfter
              ?
                <View style={[styles.itemRow]}>
                  {
                    info.item.tagBefore
                    ?
                    <Text style={styles.itemTag}>{info.item.tagBefore}</Text>
                    : null
                  }
                  {
                    info.item.tagAfter
                    ?
                    <Text style={styles.itemTag}>{info.item.tagAfter}</Text>
                    : null
                  }
                </View>
              : <View style={[styles.itemRow]}>
                  <Text style={{marginRight:5}}>{info.item.title}</Text>
                  <Text style={styles.itemTag}>{info.item.deal_tag_name}</Text>
                </View>
            }
            
            <View style={[styles.itemRow]}>
              {
                info.item.rateText
                ? <View style={{flex:2}}>
                    <Text style={styles.itemTitle}>{info.item.rateText}</Text>
                    <Text style={styles.itemContent}>{info.item.rate}</Text>
                  </View>
                : <View style={{flex:2}}>
                    <Text style={styles.itemTitle}>预期年化</Text>
                    <Text style={styles.itemContent}>{info.item.rate}%</Text>
                  </View>
              }
              
              <View style={{flex:2}}>
                <Text style={styles.itemTitle}>期限</Text>
                <Text style={styles.itemContent}>
                  {info.item.investLine || info.item.timelimit}
                  <Text style={{fontSize:15}}>{info.item.investUnit || info.item.timeunit}</Text>
                </Text>
              </View>
              <View style={{flex:1}}>
                <Text style={styles.itemTitle}></Text>
                <View style={{justifyContent:"flex-end",alignItems:"center"}}>
                  
                  <Text style={styles.itemSxyButton}>{info.item.buttonName ? "去预约" : "投资"}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{marginTop:3,marginLeft:15,marginRight:15}}>
             <DashLine/>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:15,marginRight:10,paddingTop:10,paddingBottom:15}}>
              <Text style={styles.itemDesc}>100.00元起投资</Text>
              <Text style={styles.itemDesc}>100.00元起投资</Text>
              <Text style={styles.itemDesc}>100.00元起投资</Text>
            </View>
          </View>
}
  _renderSectionHeader = (info) => {
    return <View style={styles.itemRowTitle}>
            <View style={{width:"50%",flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
              <Text style={{height:20,textAlign:'left',width:2,backgroundColor:"#ee4634",marginLeft:15,marginRight:6}}></Text>
              <Text style={{textAlign:'left',fontSize:15,color:'#000',}}>{info.section.key}</Text>
            </View>
            <View style={{width:"50%",flex:1,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
              <TouchableOpacity style={{width:"40%",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
                <Text style={{fontSize:13,color:"#909090"}} onPress={() => navigate('DealList', { title: '详情',des:'我是返回点击我' })}>更多</Text>
                <Text style={styles.arrow}>
                  <Image
                    source={require('./images/arrows_reserve.png')}
                    style={{width:8,height:13}}/>
                </Text>
              </TouchableOpacity>
              
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
  render(){
    console.log(this.props.navigation,"jahhah");
    
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
    
    return(
      <View>
        {/* logo部分 start */}
        <View style={{flexDirection:"row",justifyContent:"center",paddingTop:30,paddingBottom:10,borderBottomWidth:1,borderBottomColor:"#ccc",backgroundColor:"#fff"}}>
          <Image
            source={require('../images/header/home_logoicon.png')}
            style={{width:88,height:28}}/>
        </View>
        {/* logo部分 end */}
        <ScrollView style={{}}>
          {/* 轮播图部分 start */}
          <View>
            <Swiper horizontal={true} height={160} autoplay showsPagination={false}>
              <View>
                <Image source={require('../images/banner/11.jpg')} style={styles.swiperImg}/>
              </View>
              <View>
                <Image source={require('../images/banner/22.jpg')} style={styles.swiperImg}/>
              </View>
              <View>
                <Image source={require('../images/banner/3.jpg')} style={styles.swiperImg}/>
              </View>
              <View>
                <Image source={require('../images/banner/4.jpg')} style={styles.swiperImg}/>
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
              ItemSeparatorComponent={this._renderSectionHeader2}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}
let styles = StyleSheet.create({
  bodyTop: {
    // paddingTop:25,
    // backgroundColor:"red",
  },
  icon: {
    width: 19,
    height: 19,
  },
  swiperImg: {
    width:"100%",
    height:"100%",
    alignItems:"center",
    alignSelf:"center"
  },
  itemRow: {
    width:"100%",flex:1,
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    paddingTop:5,
    paddingLeft:15,
    paddingTop:10,
  },
  itemRowTitle: {
    height:50,flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10,backgroundColor:"#fff"
  },
  itemTag: {
    textAlignVertical:'center',
    color:'#e63207',
    fontSize:10,
    borderWidth:1,
    borderColor:"#e63207",
    borderRadius:8,
    marginRight:5,
    paddingLeft:5,
    paddingRight:2,
    paddingTop:1,
    paddingBottom:0.5
  },
  itemTitle: {
    color:'#909090',
    fontSize:11,
    paddingBottom:5,
    paddingTop:5
  },
  itemContent: {
    color:'#e63207',
    fontSize:24,
    fontWeight:"500"
  },
  itemDesc: {
    color:"#909090",fontSize:12
  },
  itemSxyButton: {
    color:'#fff',
    fontSize:12,
    borderWidth:1,
    borderRadius:100,
    borderColor:"#e63207",
    paddingTop:3,
    paddingBottom:3,
    paddingLeft:5,
    paddingRight:5,
    backgroundColor:"#e63207"
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
export default HomeIndex