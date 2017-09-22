import React,{ Component } from 'react'
import {
  AppRegistry,
  Text,
  Button,
  View,
  StyleSheet,
  Image
} from 'react-native'
const StackOptions = ({navigation}) => {
  let {state,goBack} = navigation
  
  // 用来判断是否隐藏或显示header
  const visible= state.params.isVisible
  let header
  if (visible === true){
      header = null
  }
  const headerStyle = {backgroundColor:'#4ECBFC'}
  const headerTitle = state.params.title
  const headerTitleStyle = {fontSize:FONT_SIZE(20),color:'white',fontWeight:'500'}
  const headerBackTitle = false
  const headerLeft = (
      <Button
          isCustom={true}
          customView={
                          <Icon
                              name='ios-arrow-back'
                              size={30}
                              color='white'
                              style={{marginLeft:13}}
                          />
                      }
          onPress={()=>{goBack()}}
      />
  )
  return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle,headerLeft,header}
}

const TabOptions = (tabBarTitle,normalImage,selectedImage,navTitle) => {
  const tabBarLabel = tabBarTitle
  const tabBarIcon = (({tintColor,focused})=> {
      return(
          focused
              ?
              <Image
                  source={{uri : normalImage}}
                  style={[TabBarIcon, {tintColor: tintColor}]}
              />
              :
              <Image
                  source={{uri : selectedImage}}
                  style={[TabBarIcon, {tintColor: tintColor}]}
              />
      )
  })
  const headerTitle = navTitle
  const headerTitleStyle = {fontSize:FONT_SIZE(20),color:'white'}
  // header的style
  const headerStyle = {backgroundColor:'#4ECBFC'}
  return {tabBarLabel,tabBarIcon,headerTitle,headerTitleStyle,headerStyle}
}

const styles = StyleSheet.create({
  icon: {
    width: 19,
    height: 19,
  }
})
export{
  StackOptions,
  TabOptions,
  styles
}