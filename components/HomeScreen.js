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
import CameraScreen from './CameraScreen'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Cloud Closet</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Camera')}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Get Started"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
