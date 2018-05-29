import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Button } from 'react-native';

export default class ClosetScreen extends React.Component {
  state = {
    userId: '',
    name: '',
    email: '',
    clothes: []
  }

  componentDidMount() {
    // console.log(this.props.navigation.state.params)
    const params = this.props.navigation.state.params;

    this.setState({
      userId: params.userId,
      name: params.name,
      email: params.email
    })
  }

  render() {
    const greeting = `${this.state.name.capitalize()}'s closet:`
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.greeting}>{greeting}</Text>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1}} />
        <Text style={styles.header}>Tops</Text>
        <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToInterval={200} // element width
            snapToAlignment={"center"}
        >
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
        </ScrollView>

        <Text style={styles.header}>Bottoms</Text>
        <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToInterval={200} // element width
            snapToAlignment={"center"}
        >
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
        </ScrollView>

        <Text style={styles.header}>Dresses</Text>
        <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToInterval={200} // element width
            snapToAlignment={"center"}
        >
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
        </ScrollView>

        <Text style={styles.header}>Shoes</Text>
        <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToInterval={200} // element width
            snapToAlignment={"center"}
        >
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
        </ScrollView>

        <Text style={styles.header}>Accessories</Text>
        <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToInterval={200} // element width
            snapToAlignment={"center"}
        >
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
          <Image style={styles.image} source={require('../images/placeholder.png')} />
        </ScrollView>
      </ScrollView>
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
  },

  greeting: {
    fontFamily: 'amatic-sc-bold',
    textAlign: 'center',
    fontSize: 25,
  },

  header: {
    fontFamily: 'amatic-sc-bold',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10,
  },

  image: {
    height: 200,
    width: 200,
  },
});
