import React , {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../presenters-screens/HomeScreen';
import LoginScreen from '../presenters-screens/LoginScreen';
import CashScreen from '../presenters-screens/CashScreen';
import ResetpasswordScreen from '../presenters-screens/ResetpasswordScreen';







//////////tab navigation

const screens = {
  LoginScreen:{
      screen:LoginScreen,

      navigationOptions:
      {
        headerShown: false,
      },


  },
  HomeScreen:{
      screen:HomeScreen,

      navigationOptions:
      {
        headerShown: false,
      },

  },

  CashScreen:{
      screen:CashScreen,

      navigationOptions:
      {
        headerShown: false,
      },


  },
  ResetpasswordScreen:{
      screen:ResetpasswordScreen,

      navigationOptions:
      {
        headerShown: false,
      },


  },





}


const Homestack = createStackNavigator(screens);


export default createAppContainer(Homestack);
