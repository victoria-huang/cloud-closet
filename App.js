import React from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import CameraScreen from './components/CameraScreen'
import HomeScreen from './components/HomeScreen'

export default class App extends React.Component {
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
  },
  {
    initialRouteName: 'Home',
  }
);
