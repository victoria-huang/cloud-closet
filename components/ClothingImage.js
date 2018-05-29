import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Button } from 'react-native';

export default class ClothingImage extends React.Component {
  render() {
    return(
      <View style={{padding: 5, alignSelf: 'flex-start'}}>
        <TouchableOpacity onPress={()=>{console.log("clicked")}}>
          <Image style={styles.image} source={{uri: this.props.imageUrl}} />
        </TouchableOpacity>
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
