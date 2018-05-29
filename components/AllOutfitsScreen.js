import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Button } from 'react-native';

export default class AllOutfitsScreen extends React.Component {
  state = {
    userId: '',
    outfits: []
  }

  componentDidMount(){
    const params = this.props.navigation.state.params;

    this.setState({
      userId: params.userId
    }, () => {
      fetch('http://localhost:3000/api/v1/outfits')
      .then(res => res.json())
      .then(outfits => outfits.filter(o => o.user_id === this.state.userId))
      .then(userOutfits => {
        return this.setState({
          outfits: userOutfits
        })
      })
    })
  }

  render() {
    // console.log(this.state)
    return(
      <View style={styles.container}>
        <Text>All Outfits Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center'
  },

  image: {
    height: 200,
    width: 200
  },
});
