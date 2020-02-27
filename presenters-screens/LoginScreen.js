import React , {Component} from 'react';
import { StyleSheet, Text, View ,SafeAreaView, ScrollView } from 'react-native';


import Inputbox from '../views/components/Loginpage/Inputbox';
import Loginbtn from '../views/components/Loginpage/Loginbtn';
import Logintext from '../views/components/Loginpage/Logintext';

<<<<<<< HEAD
import Ripple from 'react-native-material-ripple';



export default function LoginScreen ({navigation})
{
    const pressHandler= () => {
      navigation.navigate('HomeScreen');
    }

    return (

      <View style={styles.container}>
            <View style={styles.layer}>
                    <View style={styles.box1}>
                        <Logintext/>
                    </View>
                    <View style={styles.box2}>
                        <Inputbox/>

                    </View>
                    <View style={styles.box3}>

                          <Ripple style = {styles.button} onPress={pressHandler}>
                          <Text style = {styles.btntext}>Login</Text>
                          </Ripple>

                    </View>
            </View>
=======


export default class LoginScreen extends Component {
  render(){
    return (

      <View style={styles.container}>

      <Resultpgresultdata/>


>>>>>>> parent of 61457d1... 20 feb 9PM
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  layer:
  {
      flex:1,
      height:337,


  },
  box1:
  {
      flex:2,
  },
  box2:
  {
    flex:2,
  },
  box3:
  {
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  },


  button: {
    alignItems:'center',
    justifyContent:'center',
    zIndex:1,
   overflow: 'hidden',
   width: 187,
   height:50,
   borderRadius:10,
   backgroundColor: '#D63031',
  },
  btntext:
  {
    fontWeight:'bold',
    color:'white',

  }









});
