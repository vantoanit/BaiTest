import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TexInputDemo = (props) => {
  return (
    <TextInput {...props}
    style = { [props.style, styles.input]}
    placeholderTextColor={props.placeholderTextColor ||'#000fff'}
    />
   
  )
}

export default TexInputDemo

const styles = StyleSheet.create({
    input:{
        padding:10,
        borderWidth:1,
        borderColor:'blue',
        margin:10
    }
})