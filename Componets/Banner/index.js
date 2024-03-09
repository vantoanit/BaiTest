import { Image, Text, View } from 'react-native'
import React from 'react'
import style from './style'

const index = ({uri_img, titile}) => {
  return (
    <View style = {style.khung}>
        <Image source={{uri: uri_img}} style = {{width:'100%', height:100}}/>
      <Text style = {style.title}>{titile}</Text>
    </View>
  )
}

export default index

