//app.js
import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; //React Navigation's StackNavigator provides a way for your app to transition between screens and manage navigation history

import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: 'Login',
  }
);
export default class App extends React.Component {
  render() {
    return <RootStack />; 
  }
}