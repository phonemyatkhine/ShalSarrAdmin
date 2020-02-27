import React,{ useState }from 'react';
import { TouchableOpacity, StyleSheet, Text , View,TextInput} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Iconfont from 'react-native-vector-icons/MaterialIcons';



function Shopinfo() {


  return (

    <View style= {styles.container}>
      <Text style={styles.heading}>Lotteria</Text>
        <View style={styles.layer}>
            <View style={styles.flex1}>
                <Iconfont style={styles.icon} name="location-on" size={14} color="#757575"/>
            </View>
            <View style={styles.flex2}>
                <Text style={styles.text}>Junction Mawtin</Text>
            </View>


        </View>

    </View>


  );

}
export default Shopinfo ;


const styles = StyleSheet.create ({

   container: {
     flex:1,
     alignItems:'center',
     justifyContent:'center',
   },
  heading:
  {

    color:'#212121',
    fontSize:34,

  },
  layer:{


    flexDirection:'row',


  },
  flex1:
  {
      alignItems:'center',
      justifyContent:'center',
  },
  flex2:
  {
    alignItems:'center',
    justifyContent:'center',
  },

  text:
  {

    color:'#212121',
    fontSize:14,

  },
  input: {
    backgroundColor:'#f5f5f5',
   margin: 20,
   marginBottom: 0,
   width:337,
   height: 34,
   paddingHorizontal: 10,
   borderRadius: 4,
   borderColor: '#ccc',
   borderWidth: 1,
   fontSize: 16,
 },

})
