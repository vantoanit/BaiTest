// import { Button, StyleSheet, Text, View } from 'react-native'
// import React,{useState} from 'react'

// /**
//  * ví dụ về useState , state  khai báo ở trong componet
//  */

// const AppDemo = () => {
//     //vd đối tượng đếm là {val:yyy, title:xxx}
//     const [dem, setdem] = useState({title:'',val:0});
//   return (
//     <View>
//       <Text>Demo state</Text>
//       <Text>Title: {dem.title}</Text>
//       <Text>Value :{dem.val}</Text>
//       <Button title='Tăng giá trị' onPress={() =>{
//         setdem( {title:"Đã bấm nút" + (dem.val +1), val: dem.val + 1} )
//       }}/>
//     </View>
//   )
// }

// export default AppDemo

// const styles = StyleSheet.create({})








import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useReducer} from 'react'

//Demo reducer
//b1
const reducerDemo = (state, action) =>{
  switch(action.type){
    case 'Tang':
      return {val:state.val +1};
      case 'Giam':
        return{val: state.val -1};
        default:
          return state;
  }
}
const App = () => {
  const [dem, dispatch] = useReducer(reducerDemo, {val:0} );
  return (
    <View>
      <Text>App</Text>
     <Text>App</Text>
     <Text style={{fontSize:30}}>Giá trị đếm: {dem.val }</Text>
     <Button title='Tăng' onPress={()=> dispatch({type: 'Tang'})} />
     <Button title='Giảm' onPress={()=> dispatch({type: 'Giam'})} />

    </View>
  )
}

export default App

const styles = StyleSheet.create({})


























// import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
// import React, {useEffect, useState} from 'react'

// const AppDemo = () => {
//     //1. khai báo state
//     const [ds, setds] = useState(null);
//     //2. viết hàm lấy ds
//     const fetchData = async () => {
//         console.log('Begin fetch data');
        
//         try {
//           const response = await fetch('https://65bb342b52189914b5bb6770.mockapi.io/BaiViet');
//           const result = await response.json();
//           setds(result);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };
    
//       useEffect(() =>{
//         fetchData();
//       }, []);

//       // kí hiệu [] dùng để nhận diện sự kiện render giao diện
//       // nếu giám sát thành phần nào đó thì truyền nó vào trong []
//   return (
//     <View>
//       <Text>AppDemo</Text>
//       {
//        ( ds==null) ? 
//        <View>
//         <Text>Đang tải dữ liệu</Text>
//         <ActivityIndicator size="large" color = "red"/>
//        </View> :
//        <FlatList data={ds}
//         keyExtractor={(item) => item.id}
//         renderItem={({item}) => <Text>{item.title}====={item.content}</Text>}/>
       
//       }
//     </View>
//   )
// }

// export default AppDemo

// const styles = StyleSheet.create({})










