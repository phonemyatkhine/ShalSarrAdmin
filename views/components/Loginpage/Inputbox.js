import React,{ useState }from 'react';
import { TouchableOpacity, StyleSheet, Text , View,TextInput} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';




function Inputbox() {


  return (

    <View style= {styles.container}>
        <View style= {styles.layer}>
              <View style= {styles.box1}>
              <View style={styles.textcontainer}>
                  <TextInput
                     style={styles.input}
                     placeholder="Email"
                     autoCapitalize="none"
                     autoCorrect={false}
                     keyboardType="default"
                     clearButtonMode="while-editing"
                     blurOnSubmit={true}

                   />
              </View>

              </View>
              <View style= {styles.box2}>
              <View style={styles.textcontainer}>
                  <TextInput
                     style={styles.input}
                     placeholder="Passward"
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
export default Inputbox ;


const styles = StyleSheet.create ({

   container: {
     flex:1,

     justifyContent:'center',
    alignItems: 'center',
   },
   layer:
   {

      width:"85%",
      height:120,
   },
  text:
  {

    color:'#000',
    fontSize:76,

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
      justifyContent:'flex-start',
      alignItems:'center',
  },
  box2:
  {

    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
  },
  input: {
  margin:20,
   height: 50,

   fontSize: 16,
 },


})
