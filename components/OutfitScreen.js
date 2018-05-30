import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Button } from 'react-native';

export default class OutfitScreen extends React.Component {
  state = {
    userId: '',
    outfitClothes: []
  }

  componentDidMount(){
    const params = this.props.navigation.state.params;

    this.setState({
      userId: params.userId,
      outfitClothes: params.outfit
    })
  }

  renderTop = () => {
    return this.state.outfitClothes.filter(c => c.clothing_type === 'tops').map(c => {
      return <Image key={c.id} style={styles.image} source={{uri: c.image_url}} />
    })
  }

  renderBottom = () => {
    return this.state.outfitClothes.filter(c => c.clothing_type === 'bottoms').map(c => {
      return <Image key={c.id} style={styles.image} source={{uri: c.image_url}} />
    })
  }

  renderDress = () => {
    return this.state.outfitClothes.filter(c => c.clothing_type === 'dresses').map(c => {
      return <Image key={c.id} style={styles.image} source={{uri: c.image_url}} />
    })
  }

  renderShoes = () => {
    return this.state.outfitClothes.filter(c => c.clothing_type === 'shoes').map(c => {
      return <Image key={c.id} style={styles.image} source={{uri: c.image_url}} />
    })
  }

  renderAccessories = () => {
    return this.state.outfitClothes.filter(c => c.clothing_type === 'accessories').map(c => {
      return <Image key={c.id} style={styles.image} source={{uri: c.image_url}} />
    })
  }

  // renderOutfitView = () => {
  //   return this.state.outfitClothes.map(c => {
  //     return <Image key={c.id} style={styles.image} source={{uri: c.image_url}} />
  //   })
  // }

  handlePress = () => {
    this.props.navigation.navigate('Outfits')
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.leftAlign}>
            <Image style={styles.icon} source={require('../images/logo-icon.jpg')} />
          </View>

          <View style={styles.centerAlign}>
            <Text style={styles.header}>Outfit Viewer</Text>
          </View>

          <View style={styles.rightAlign}>
            <TouchableOpacity onPress={this.handlePress}>
              <Image style={styles.icon} source={require('../images/outfit-icon.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{borderBottomColor: 'black', borderBottomWidth: 1}} />
        <View style={{alignItems: 'center'}}>
          {this.renderTop()}
          {this.renderBottom()}
          {this.renderDress()}
          {this.renderShoes()}
          {this.renderAccessories()}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    fontFamily: 'amatic-sc-bold',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 5,
  },

  image: {
    height: 200,
    width: 200
  },

  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  leftAlign: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  centerAlign: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  rightAlign: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  icon: {
    width: 35,
    height: 35,
  },
});
