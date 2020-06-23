import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';

function Cashoutbtn() {
  return (

    <Ripple style = {styles.button}>
    <Text style = {styles.text}>Cash Out</Text>
    </Ripple>

  );

}
export default Cashoutbtn;


const styles = StyleSheet.create ({

   container: {

      alignItems: 'center',
   },
   button: {
     alignItems:'center',
     justifyContent:'center',
    overflow: 'hidden',
    width: 200,
    height:50,
    borderRadius:10,
    backgroundColor: '#d63031',
   },
   text:
   {
     fontWeight:'bold',
     color:'#fff',
     fontSize:14,

   }
})
