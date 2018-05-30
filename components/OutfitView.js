import React from 'react';
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Button } from 'react-native';

export default class OutfitView extends React.Component {
  state = {
    userId: '',
    outfit: [],
  }

  componentDidMount() {
    this.setState({
      userId: this.props.userId,
      outfit: this.props.clothes
    })
  }

  renderClothingImages = () => {
    return this.props.clothes.map(c => {
      return <Image key={c.id} style={styles.image} source={{uri: c.image_url}} />
    })
  }

  handlePress = () => {
    this.props.navigation.navigate('Outfit', this.state)
  }

  handlePressDelete = () => {
    Alert.alert(
      'Delete Outfit',
      'Are you sure you want to delete this outfit?',
      [
        {text: 'Yes', onPress: () => {this.handleDeleteOutfit()}},
        {text: 'No', onPress: () => console.log('No Pressed')},
      ],
      { cancelable: true }
    )
  }

  handleDeleteOutfit = () => {
    fetch(`http://localhost:3000/api/v1/outfits/${this.props.oID}`, {method: 'DELETE'})
    .then(res => { this.props.handleDelete(this.props.oID) })
  }

  render() {
    return(
      <ScrollView>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.header}>Outfit {this.props.idx}</Text>
        </TouchableOpacity>

        <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToInterval={200} // element width
            snapToAlignment={"center"}
        >
          {this.renderClothingImages()}
        </ScrollView>

        <Button
          onPress={this.handlePressDelete}
          color= '#8b0000'
          title="Delete Outfit"
        />

        <View style={{borderBottomColor: 'black', borderBottomWidth: 1}} />
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
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
    justifyContent: 'flex-end'
  },
});
