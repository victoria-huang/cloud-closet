import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Button } from 'react-native';

export default class ClothingImage extends React.Component {
  render() {
    const url = this.props.imageUrl
    console.log(url)
    return(
      <View>
        <Image style={styles.image} source={{uri: this.props.imageUrl}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});
