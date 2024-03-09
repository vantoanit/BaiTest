import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , {forwardRef} from 'react'


const ButtonDemo = forwardRef(  ({styles, onPress, children},ref) => {
   return (
       <TouchableOpacity
           onPress={onPress} ref={ref}
           style={[styles, st.nutbam]}
       >
           <Text style={st.text}>{children}</Text>
       </TouchableOpacity>
   )
   }
);


export default ButtonDemo


const st = StyleSheet.create({
   nutbam:{
       backgroundColor: 'yellow',
       padding: 10, borderRadius: 10,
       maxWidth:100
   },
   text:{ color: 'red'}
})

