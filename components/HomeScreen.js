import React from 'react';
import { Dimensions, StyleSheet, Image, Text, TouchableOpacity, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../images/logo.jpg')} />
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Login')}}>
          <Image
            style={styles.button}
            source={require('../images/button_login.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Register')}}>
          <Image
            style={styles.button}
            source={require('../images/button_register.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center'
  },

  button: {
    marginBottom: 10
  },

  image: {
    height: 200,
    width: 200
  },
});
