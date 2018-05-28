import React from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  email: t.String
});

export default class LoginScreen extends React.Component {
  state = {
    userId: '',
    name: '',
    email: '',
    errors: false
  }

  handleSubmit = () => {
    const value = this._form.getValue();

    if (value && value.email) {
      fetch('http://localhost:3000/api/v1/users')
      .then(res => res.json())
      .then(users => users.find(user => user.email.toLowerCase() === value.email.toLowerCase()))
      .then(user => {
        if (user) {
          // console.log(user)
          this.setState({
            errors: false,
            userId: user.id,
            name: user.name,
            email: user.email
          }, () => {
            this.props.navigation.navigate('Closet', this.state)
          })
        } else {
          this.setState({
            errors: true
          })
        }
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome Back!</Text>
        { this.state.errors && <Text style={styles.error}>No user found with this email!</Text> }

        <View style={styles.form}>
           <Form type={User} ref={c => this._form = c} />
           <Button
             onPress={this.handleSubmit}
             title="Login"
             accessibilityLabel="Login"
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
    fontFamily: 'amatic-sc-bold',
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 10,
  },

  error: {
    textAlign: 'center',
    color: 'red',
    fontSize: 18,
    marginTop: 0,
  },

  form: {
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
