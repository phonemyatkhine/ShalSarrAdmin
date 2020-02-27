import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';

function ScanQRcodebtn() {
  return (

    <Ripple style = {styles.button}>
    <Text style = {styles.text}>Scan QR code</Text>
    </Ripple>

  );

}
export default ScanQRcodebtn;


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
    backgroundColor: '#F5F5F5',
   },
   text:
   {
     fontWeight:'bold',
     color:'#212121',
     fontSize:14,

   }
})
