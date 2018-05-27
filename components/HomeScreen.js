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

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Cloud Closet</Text>
         <Button
           onPress={() => {this.props.navigation.navigate('Login')}}
           title="Login"
           accessibilityLabel="Login"
         />

         <Button
           onPress={() => {this.props.navigation.navigate('Register')}}
           title="Register"
           accessibilityLabel="Register"
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 0,
  },
});
