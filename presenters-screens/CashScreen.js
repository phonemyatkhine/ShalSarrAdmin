import React from 'react';
import { StyleSheet, Text, View,SafeAreaView ,ImageBackground,TouchableOpacity } from 'react-native';

import Iconfont from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';
import Entryinput from '../views/components/Cashtransactionpage/Entryinput';
import Cashoutbtn from '../views/components/Cashtransactionpage/Cashoutbtn';
import PaymentDetailcard from '../views/components/Cashtransactionpage/PaymentDetailcard';
import ScanQRcodebtn from '../views/components/Cashtransactionpage/ScanQRcodebtn';

export default function CashScreen ({navigation})
{
    const pressHandler= () => {
      navigation.goBack();
    }

  return (
    <View style={styles.container}>

    <SafeAreaView style={styles.container}>

          <View style={styles.header}>
                  <View style={styles.back}>
                    <TouchableOpacity style={styles.btncontainer} onPress={pressHandler}>
                      <Iconfont style={styles.icon} name="ios-arrow-back" size={24} color="#212121"/>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.flex1}>
                      <Text style={styles.heading}>Lotteria</Text>
                  </View>
                  <View style={styles.flex2}>

                  <ImageBackground source={require('../assets/backgroundimage/lotteria.jpeg')} style = {styles.background}>
                  </ImageBackground>

                  </View>
          </View>

          <View style={styles.layer}>
                    <View style={styles.body1}>
                        <Entryinput/>
                    </View>
                    <View style={styles.body2}>
                        <PaymentDetailcard/>
                    </View>
                    <View style={styles.body3}>
                        <ScanQRcodebtn/>

                    </View>
                    <View style={styles.body3}>

                        <Cashoutbtn/>
                    </View>
          </View>

        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
      fontSize:34,
      fontWeight:'bold',

  },
  back:
  {
    flex:1,
    marginLeft:19,
    justifyContent:'center',
  },
  header:
  {
      height:100,
      flexDirection:'row',

  },
  layer:
  {
      width:475,
      flex:1,
  },
  flex1:
  {

      justifyContent:'center',
      flex:5,

  },
  flex2:
  {
      justifyContent:"center",
      alignItems:"center",
      flex:3,

  },
  background:
  {

    width:75,
    height:75,
    overflow: 'hidden',
    borderRadius:100,

  },
  body1:
  {
      flex:3,
  },
  body2:
  {
      flex:5,

  },
  body3:
  {
    alignItems:'center',
    justifyContent:'space-between',
      flex:1,
  },
  body4:
  {
    alignItems:'center',
    justifyContent:'space-between',
      flex:1,
  },

});
