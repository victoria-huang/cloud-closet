import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  email: t.String
});

export default class RegisterScreen extends React.Component {
  state = {
    userId: '',
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
      .then(res => res.json())
      .then(user => {
        return this.setState({
          userId: user.id,
          name: user.name,
          email: user.email
        }, () => {
          this.props.navigation.navigate('Closet', this.state)
        })
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Create An Account</Text>
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
    fontFamily: 'amatic-sc-bold',
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 10,
  },

  form: {
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
