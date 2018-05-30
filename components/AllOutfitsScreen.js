import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Button } from 'react-native';
import OutfitView from './OutfitView'

export default class AllOutfitsScreen extends React.Component {
  state = {
    userId: '',
    outfits: []
  }

  componentDidMount(){
    this.props.navigation.addListener('didFocus', () => {
      const params = this.props.navigation.state.params;

      this.setState({
        userId: params.userId,
        outfits: []
      }, () => {
        fetch('http://localhost:3000/api/v1/outfits')
        .then(res => res.json())
        .then(outfits => outfits.filter(o => o.user_id === this.state.userId))
        .then(userOutfits => {
          userOutfits.forEach(o => {
            fetch(`http://localhost:3000/api/v1/outfits/${o.id}/clothes`)
            .then(res => res.json())
            .then(clothes => {
              return this.setState({
                outfits: [...this.state.outfits, {...o, clothes: clothes}]
              })
            })
          })
          // return this.setState({
          //   outfits: userOutfits
          // })
        })
      })
    });
  }

  renderOutfitViews = () => {
    return this.state.outfits.map((o, idx) => {
      return <OutfitView key={o.id} oID={o.id} handleDelete={this.handleDelete} navigation={this.props.navigation} userId={this.state.userId} {...o} idx={idx+1} />
    })
  }

  handleDelete = (id) => {
    const outfitIdx = this.state.outfits.findIndex(o => o.id === id);
    const outfitsCopy = this.state.outfits.slice()
    outfitsCopy.splice(outfitIdx, 1)

    this.setState({
      outfits: outfitsCopy
    })
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.leftAlign}>
            <Image style={styles.icon} source={require('../images/logo-icon.jpg')} />
          </View>

          <View style={styles.centerAlign}>
            <Text style={styles.header}>All Outfits</Text>
          </View>

          <View style={styles.rightAlign}>
            <Image style={styles.icon} source={require('../images/logo-icon.jpg')} />
          </View>
        </View>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1}} />

        <View style={styles.container}>
          {this.renderOutfitViews()}
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

  icon: {
    width: 35,
    height: 35,
  },

  header: {
    fontFamily: 'amatic-sc-bold',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 5,
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

  image: {
    height: 200,
    width: 200
  },
});
