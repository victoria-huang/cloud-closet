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

export default class ClosetScreen extends React.Component {
  state = {
    name: '',
    email: '',
    clothes: []
  }

  componentDidMount() {
    // console.log(this.props.navigation.state.params)
    this.setState({
      name: this.props.navigation.state.params.name,
      email: this.props.navigation.state.params.email
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi, {this.state.name.capitalize()}!</Text>
      </View>
    );
  }
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
