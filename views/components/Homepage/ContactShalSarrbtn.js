import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';

function ContactShalSarrbtn() {
  return (

    <Ripple style = {styles.button}>
    <Text style = {styles.text}>Contact Shal Sarr</Text>
    </Ripple>

  );

}
export default ContactShalSarrbtn;


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
    backgroundColor: '#f5f5f5',
   },
   text:
   {
     color:'#212121',
     fontWeight:'bold',
     fontSize:14,

   }
})
