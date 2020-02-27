import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

import Shoplogo from '../views/components/Homepage/Shoplogo';
import Shopinfo from '../views/components/Homepage/Shopinfo';
import CashUserbtn from '../views/components/Homepage/CashUserbtn';
import ContactShalSarrbtn from '../views/components/Homepage/ContactShalSarrbtn';
import Iconfont from 'react-native-vector-icons/MaterialIcons';
import Ripple from 'react-native-material-ripple';


export default function HomeScreen ({navigation})
{
    const pressHandler= () => {
      navigation.navigate('CashScreen');
    }
    const resetpwpressHandler= () => {
      navigation.navigate('ResetpasswordScreen');
    }
  return (
    <View style={styles.container}>
              <SafeAreaView style={styles.container}>
          <View style={styles.header}>
                  <View style={styles.flex1}>

                  </View>
                  <View style={styles.flex2}>

                  <Ripple style = {styles.button} onPress={resetpwpressHandler}>
                  <Iconfont style={styles.icon} name="settings" size={24} color="#212121"/>
                  </Ripple>

                  </View>
          </View>
          <View style={styles.layer}>
                  <View style={styles.box1}>
                    <Shoplogo/>

                  </View>
                  <View style={styles.box2}>
                      <Shopinfo/>

                  </View>
                  <View style={styles.box3}>
                    <ContactShalSarrbtn/>


                  </View>
                  <View style={styles.box4}>

                  <Ripple style = {styles.cashuserbutton} onPress={pressHandler}>
                  <Text style = {styles.text}>Cash User</Text>
                  </Ripple>

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
      flex:3,
  },
  flex2:
  {
      justifyContent:"center",
      alignItems:"center",
      flex:1,

  },
  box1:{
      flex:2,
      justifyContent:'flex-end',
      alignItems:'center',
  },
  box2:{

    flex:1,
  },
  box3:{
    marginBottom:5,
    alignItems:'center',
    justifyContent:'flex-end',
    flex:1,
  },
  box4:{
    marginTop:5,
    alignItems:'center',
    justifyContent:'flex-start',
    flex:1,
  },
  button: {
    overflow:'hidden',
    alignItems:'center',
    justifyContent:'center',
  borderRadius:50,
   width: 45,
   height:45,
   backgroundColor: '#f5f5f5',

  },
  icon:
  {
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    color:'#212121',

  },
  cashuserbutton: {
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
});
