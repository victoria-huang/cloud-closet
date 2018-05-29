import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { createStackNavigator, NavigationActions } from 'react-navigation';
import { Font } from 'expo';
import CameraScreen from './components/CameraScreen'
import HomeScreen from './components/HomeScreen'
import ClosetScreen from './components/ClosetScreen'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'amatic-sc-regular': require('./assets/fonts/AmaticSC-Regular.ttf'),
      'amatic-sc-bold': require('./assets/fonts/AmaticSC-Bold.ttf'),
    });
  }

  render() {
    return (
      <RootStack />
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Camera: CameraScreen,
    Closet: {
      screen: ClosetScreen,
      navigationOptions:  {
        title: 'Closet',
        headerLeft: null
      }
    },
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
