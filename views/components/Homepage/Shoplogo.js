import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View, ImageBackground} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';


function Shoplogo() {
  return (

    <ImageBackground source={require('../../../assets/backgroundimage/lotteria.jpeg')} style = {styles.background}>
    </ImageBackground>



  );

}
export default Shoplogo ;


const styles = StyleSheet.create ({

   background:
   {

     width:180,
     height:180,
     overflow: 'hidden',
     borderRadius:100,

   },


})
