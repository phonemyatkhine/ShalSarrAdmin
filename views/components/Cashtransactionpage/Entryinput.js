import React,{ useState }from 'react';
import { TouchableOpacity, StyleSheet, Text , View,TextInput} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';




function Entryinput() {


  return (

    <View style= {styles.container}>
        <View style= {styles.layer}>
              <View style= {styles.box1}>

                <Text style={styles.subheading}>Enter total amount</Text>

              </View>
              <View style= {styles.box2}>
              <View style={styles.textcontainer}>
                  <TextInput
                     style={styles.input}
                     placeholder="Please enter total amount"
                     autoCapitalize="none"
                     autoCorrect={false}
                     keyboardType="default"
                     clearButtonMode="while-editing"
                     blurOnSubmit={true}

                   />
              </View>

              </View>
              <View style= {styles.box3}>

                <Text style={styles.subheading}>Additonal QR scan</Text>

              </View>
              <View style= {styles.box4}>
              <View style={styles.textcontainer}>
                  <TextInput
                     style={styles.input}
                     placeholder="Please enter additonal QR scan"
                     autoCapitalize="none"
                     autoCorrect={false}
                     keyboardType="default"
                     clearButtonMode="while-editing"
                     blurOnSubmit={true}

                   />
              </View>

              </View>
        </View>
    </View>


  );

}
export default Entryinput ;


const styles = StyleSheet.create ({

   container: {
     flex:1,

     justifyContent:'center',
    alignItems: 'center',
   },
   layer:
   {
      height:170,
   },
  subheading:
  {

    color:'#000',
    fontSize:14,
    fontWeight:'bold',

  },
  textcontainer:
  {

    justifyContent:'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    width:337,
    height:55,
  },
  box1:
  {

      flex:1,
      justifyContent:'flex-end',
      alignItems:'flex-start',
  },
  box2:
  {

    flex:2,
    justifyContent:'flex-end',
    alignItems:'center',

  },
  box3:
  {

    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-start',

  },
  box4:
  {

    flex:2,
    justifyContent:'flex-end',
    alignItems:'center',

  },
  input: {
  margin:20,
   height: 50,

   fontSize: 16,
 },


})
