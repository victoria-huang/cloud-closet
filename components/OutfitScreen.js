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

  renderOutfitView = () => {
    return this.state.outfitClothes.map(c => {
      return <Image key={c.id} style={styles.image} source={{uri: c.image_url}} />
    })
  }

  handlePress = () => {
    this.props.navigation.navigate('TabNav')
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
              <Image style={styles.icon} source={require('../images/closet-icon.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{borderBottomColor: 'black', borderBottomWidth: 1}} />
        <View style={{alignItems: 'center'}}>
          {this.renderOutfitView()}
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
    fontSize: 28,
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
