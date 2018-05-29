import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Button } from 'react-native';
import ClothingImage from './ClothingImage'

export default class ClosetScreen extends React.Component {
  state = {
    userId: '',
    name: '',
    email: '',
    clothes: [],
    outfit: []
  }

  componentDidMount() {
    // console.log(this.props.navigation.state.params)
    const params = this.props.navigation.state.params;

    this.setState({
      userId: params.userId,
      name: params.name,
      email: params.email
    }, () => {
      fetch('http://localhost:3000/api/v1/clothings')
      .then(res => res.json())
      .then(clothes => {
        return clothes.filter(c => c.user_id === this.state.userId)
      })
      .then(user_clothes => {
        return this.setState({
          clothes: user_clothes
        })
      })
    })
  }

  handlePress = (id, isClicked) => {
    if (isClicked) {
      const clothing = this.state.clothes.find(c => c.id === id)
      this.setState({
          outfit: [...this.state.outfit, clothing]
      })
    } else {
      const cIndex = this.state.outfit.findIndex(c => c.id === id)
      let outfitCopy = this.state.outfit.slice()
      outfitCopy.splice(cIndex, 1)

      this.setState({
        outfit: outfitCopy
      })
    }
  }

  renderTops = () => {
    return this.state.clothes.filter(c => c.clothing_type === 'tops').map(c => {
      return <ClothingImage key={c.id} cID={c.id} clothingType={c.clothing_type} imageUrl={c.image_url} handlePress={this.handlePress} />
    })
  }

  renderBottoms = () => {
    return this.state.clothes.filter(c => c.clothing_type === 'bottoms').map(c => {
      return <ClothingImage key={c.id} cID={c.id} clothingType={c.clothing_type} imageUrl={c.image_url} handlePress={this.handlePress} />
    })
  }

  renderDresses = () => {
    return this.state.clothes.filter(c => c.clothing_type === 'dresses').map(c => {
      return <ClothingImage key={c.id} cID={c.id} clothingType={c.clothing_type} imageUrl={c.image_url} handlePress={this.handlePress}/>
    })
  }

  renderShoes = () => {
    return this.state.clothes.filter(c => c.clothing_type === 'shoes').map(c => {
      return <ClothingImage key={c.id} cID={c.id} clothingType={c.clothing_type} imageUrl={c.image_url} handlePress={this.handlePress}/>
    })
  }

  renderAccessories = () => {
    return this.state.clothes.filter(c => c.clothing_type === 'accessories').map(c => {
      return <ClothingImage key={c.id} cID={c.id} clothingType={c.clothing_type} imageUrl={c.image_url} handlePress={this.handlePress}/>
    })
  }

  handleCreateOutfit = () => {
    fetch('http://localhost:3000/api/v1/outfits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.state.userId
      })
    })
    .then(res => res.json())
    .then(newOutfit => {
      return this.state.outfit.forEach(c => {
        fetch('http://localhost:3000/api/v1/clothing_outfits', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            clothing_id: c.id,
            outfit_id: newOutfit.id
          })
        })
      })
    })

    this.props.navigation.navigate('Outfit', this.state)
  }

  handleAllOutfits = () => {
    this.props.navigation.navigate('Outfits', this.state)
  }

  render() {
    // console.log(this.state.outfit);
    const greeting = `${this.state.name.capitalize()}'s closet:`
    return (
      <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.leftAlign}>
            <TouchableOpacity onPress={this.handleAllOutfits}>
              <Image style={styles.icon} source={require('../images/outfit-icon.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.centerAlign}>
            <Text style={styles.greeting}>{greeting}</Text>
          </View>

          <View style={styles.rightAlign}>
            <TouchableOpacity onPress={this.handleCreateOutfit}>
              <Image style={styles.icon} source={require('../images/plus_icon.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{borderBottomColor: 'black', borderBottomWidth: 1}} />
        <Text style={styles.header}>Tops</Text>
        <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToInterval={200} // element width
            snapToAlignment={"center"}
        >
          {this.renderTops()}
        </ScrollView>

        <Text style={styles.header}>Bottoms</Text>
        <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToInterval={200} // element width
            snapToAlignment={"center"}
        >
          {this.renderBottoms()}
        </ScrollView>

        <Text style={styles.header}>Dresses</Text>
        <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToInterval={200} // element width
            snapToAlignment={"center"}
        >
          {this.renderShoes()}
        </ScrollView>

        <Text style={styles.header}>Shoes</Text>
        <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToInterval={200} // element width
            snapToAlignment={"center"}
        >
          {this.renderDresses()}
        </ScrollView>

        <Text style={styles.header}>Accessories</Text>
        <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToInterval={200} // element width
            snapToAlignment={"center"}
        >
          {this.renderAccessories()}
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
  }
});
