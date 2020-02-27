
import { StyleSheet, Text, View } from 'react-native';


import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
<<<<<<< HEAD
import Homestack from './route/Homestack';
import ResetpasswordScreen from './presenters-screens/ResetpasswordScreen';
=======
import Menustack from './route/Menustack';
import Restaurantstack from './route/Restaurantstack';
>>>>>>> parent of 61457d1... 20 feb 9PM


export default function App() {
  return (
    <View style={styles.container}>

    <AppNavigator/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {


    justifyContent:'center',
    flex: 1,
    backgroundColor: '#fff',

  },
});
