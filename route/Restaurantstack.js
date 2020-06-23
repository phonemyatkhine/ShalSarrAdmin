import React , {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';







//////////tab navigation

const screens = {
  
  screen2:{
    screen:CategoryScreen
  },
  SearchScreen:
  {
    screen:SearchScreen

  },


}


const Restaurantstack = createStackNavigator(screens);


export default createAppContainer(Restaurantstack);
