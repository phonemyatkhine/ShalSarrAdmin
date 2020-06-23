import React,{ useState }from 'react';
import { TouchableOpacity, StyleSheet, Text , View,TextInput} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';




function PaymentDetailcard() {


  return (

    <View style= {styles.container}>
          <View style= {styles.layer}>
                  <View style= {styles.title}>
                      <Text style={styles.subheading}>Payment Details</Text>
                  </View>
                  <View style= {styles.flex2}>
                        <View style= {styles.sec1}>

                        <Text>Restaurant Name</Text>


                        </View>
                        <View style= {styles.sec2}>

                        <Text>Lotteria</Text>

                        </View>
                  </View>
                  <View style= {styles.flex3}>
                          <View style= {styles.sec1}>

                            <Text>Customer Name</Text>

                          </View>
                          <View style= {styles.sec2}>

                            <Text>Phone Myat Khine</Text>

                          </View>
                  </View>
                  <View style= {styles.flex4}>
                        <View style= {styles.sec1}>

                        <Text>Total QR scan</Text>


                        </View>
                        <View style= {styles.sec2}>

                        <Text>5</Text>


                        </View>
                  </View>
                  <View style= {styles.flex5}>
                        <View style= {styles.sec1}>


                        <Text>Total Amount</Text>

                        </View>
                        <View style= {styles.sec2}>

                        <Text style={styles.txtcolor}>25800 MMK</Text>

                        </View>
                  </View>
                  <View style= {styles.flex6}>

                  </View>
          </View>
    </View>


  );

}
export default PaymentDetailcard ;


const styles = StyleSheet.create ({

   container: {
     flex:1,
     flexDirection:'row',
     justifyContent:'center',
    alignItems: 'center',
   },
   subheading:
   {
      fontSize:18,
      fontWeight:'bold',
   },
   txtcolor:
   {
     fontSize:14,
      color:'#146CA3',
      fontWeight:'bold',
   },
   layer:
   {

      backgroundColor:'#fff',
      width:333,
      height:270,
      borderRadius:20,
      shadowColor: '#212121',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.18,
      shadowRadius: 2,
      elevation: 5,
   },
   title:
   {
      alignItems:'center',
      justifyContent:'center',
      flex:2,
   },

   flex2:
   {
      flexDirection:'row',
      flex:1,
   },
   sec1:
   {
      marginLeft:20,
      justifyContent:'center',
      flex:1,
   },
   sec2:
   {
     marginRight:20,
     alignItems:'flex-end',
     justifyContent:'center',
     flex:1,
   },

   flex3:
   {
       flexDirection:'row',
      flex:1,

   },
   flex4:
   {
     flexDirection:'row',
      flex:1,

   },
   flex5:
   {
     flexDirection:'row',
      flex:1,

   },
   flex6:
   {
     flexDirection:'row',
      flex:1,

   },




})
