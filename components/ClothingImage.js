import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Button } from 'react-native';

export default class ClothingImage extends React.Component {
  state = {
    isClicked: false
  }

  handleClick = () => {
    const clicked = !this.state.isClicked
    this.setState({
      isClicked: clicked
    }, () => this.props.handlePress(this.props.cID, this.state.isClicked))
  }

  render() {
    return(
      <View style={{padding: 5, alignSelf: 'flex-start'}}>
        <TouchableOpacity onPress={this.handleClick}>
          <Image style={this.state.isClicked ? styles.imageSelected : styles.image} source={{uri: this.props.imageUrl}} />
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
  imageSelected: {
    height: 200,
    width: 200,
    opacity: 0.5,
    borderColor: "gray",
    borderWidth: 0.5
  }
});
