
import { StyleSheet, Text, View } from 'react-native';


import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import Homestack from './route/Homestack';
import ResetpasswordScreen from './presenters-screens/ResetpasswordScreen';


export default function App() {
  return (
    <View style={styles.container}>

    <Homestack/>

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
