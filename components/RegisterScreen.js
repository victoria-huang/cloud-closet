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
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  email: t.String
});

export default class RegisterScreen extends React.Component {
  state = {
    name: '',
    email: ''
  }

  handleSubmit = () => {
    const value = this._form.getValue();
    // console.log('value: ', value);
    if (value && value.name && value.email) {
      fetch('http://localhost:3000/api/v1/users', {
      	method: 'POST',
      	headers: {
      		'Content-Type': 'application/json',
      		'Accept': 'application/json'
      	},
      	body: JSON.stringify({
      		name: value.name,
      		email: value.email
      	})
      })

      this.setState({
        name: value.name,
        email: value.email
      }, () => {
        this.props.navigation.navigate('Closet', this.state)
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Cloud Closet</Text>
        <View style={styles.form}>
           <Form type={User} ref={c => this._form = c} />
           <Button
             onPress={this.handleSubmit}
             title="Get Started!"
             accessibilityLabel="Get Started"
           />
        </View>
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
    marginBottom: 10,
  },

  form: {
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
