import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Button } from 'react-native';

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
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1}} />
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

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
