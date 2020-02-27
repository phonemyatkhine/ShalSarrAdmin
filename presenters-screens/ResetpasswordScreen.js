import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity} from 'react-native';

import Shoplogo from '../views/components/Homepage/Shoplogo';
import Shopinfo from '../views/components/Homepage/Shopinfo';
import CashUserbtn from '../views/components/Homepage/CashUserbtn';
import ContactShalSarrbtn from '../views/components/Homepage/ContactShalSarrbtn';
import Micon from 'react-native-vector-icons/MaterialIcons';
import Iconfont from 'react-native-vector-icons/Ionicons';

import Changepwbtn from '../views/components/Resetpasswordpage/Changepwbtn';
import Ripple from 'react-native-material-ripple';

export default function ResetpasswordScreen ({navigation})
{
    const pressHandler= () => {
      navigation.navigate('HomeScreen');
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
                <Text style={styles.heading}>Reset Password</Text>
            </View>

    </View>
    <View style={styles.layer}>
        <View style={styles.lockimgcontainer}>
                  <View style = {styles.img}>
                  <Micon  name="lock-open" size={45} color="#146CA3"/>
                </View>
        </View>
        <View style={styles.body}>
            <Changepwbtn/>
        </View>
        <View style={styles.savebtn}>
              <Ripple style = {styles.savebutton}>
              <Text style = {styles.text}>Save</Text>
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
  lockimgcontainer:
  {
      justifyContent:'center',
      marginLeft:60,
      height:125,
  },
  body:
  {
    justifyContent:'flex-start',
    height:250,
  },
  savebtn:
  {
      justifyContent:'flex-end',
      alignItems:'center',
      flex:1,
  },
  savebutton: {
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
    fontWeight:'bold',
    color:'#146CA3',
    fontSize:14,

  },
  img: {

    overflow:'hidden',
    alignItems:'center',
    justifyContent:'center',
  borderRadius:50,
   width: 75,
   height:75,

  },
  icon:
  {
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    color:'#212121',

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
      flex:10,

  },

  background:
  {

    width:75,
    height:75,
    overflow: 'hidden',
    borderRadius:100,

  },

});
