import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { createStackNavigator, NavigationActions, createBottomTabNavigator } from 'react-navigation';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import CameraScreen from './components/CameraScreen'
import HomeScreen from './components/HomeScreen'
import ClosetScreen from './components/ClosetScreen'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
import OutfitScreen from './components/OutfitScreen'
import AllOutfitsScreen from './components/AllOutfitsScreen'

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

const TabNavigator = createBottomTabNavigator(
  {
    Camera: CameraScreen,
    Closet: {
      screen: ClosetScreen,
      navigationOptions:  {
        title: 'Closet',
        headerLeft: null
      }
    },
    Logout: HomeScreen
  },
  {
    initialRouteName: 'Closet',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Closet') {
          iconName = `ios-cloud${focused ? '' : '-outline'}`;
        } else if (routeName === 'Camera') {
          iconName = `ios-camera${focused ? '' : '-outline'}`;
        } else if (routeName === 'Logout') {
          iconName = `ios-log-out${focused ? '' : '-outline'}`
        }

        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'dodgerblue',
      inactiveTintColor: 'gray',
    },
  }
)

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Outfit: {
      screen: OutfitScreen,
      navigationOptions:  {
        title: 'Outfit Viewer',
        headerLeft: null
      }
    },
    Outfits: {
      screen: AllOutfitsScreen,
      navigationOptions:  {
        title: 'All Outfits',
        headerLeft: null
      }
    },
    Closet: TabNavigator
  },
  {
    initialRouteName: 'Home',
  }
);
