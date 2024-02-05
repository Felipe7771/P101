import React, {Component} from 'react'
import {Text, StyleSheet, TouchableOpacity, View, Image, ImageBackground} from 'react-native'

export default class Home extends Component{
  render(){
    return(
      <View style={styles.container}>
      <ImageBackground style={styles.backimage} source={require('../assets/backgroundBrazil.png')}>
      <View style={styles.cardContext}>
        <Text style={styles.cardText}>BRASIL EM TURISMO</Text>
        <Text style={styles.cardTip}>para aonde deseja ir?</Text>
      </View>
      <TouchableOpacity
         onPress={() => this.props.navigation.navigate('SP')}
            style={[styles.routeCard,{backgroundColor: 'black'}]}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/SP.png')}/>
              <Text style={[styles.routeText, {color: 'white'}]}>SÃO PAULO</Text>
      </TouchableOpacity>

      <TouchableOpacity
         onPress={() => this.props.navigation.navigate('BA')}
            style={[styles.routeCard,{backgroundColor: '#120A8F'}]}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/BA.png')}/>
              <Text style={[styles.routeText, {color: '#00A8FF'}]}>BAHIA</Text>
      </TouchableOpacity>

      <TouchableOpacity
         onPress={() => this.props.navigation.navigate('MG')}
            style={[styles.routeCard,{backgroundColor: 'red'}]}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/MG.png')}/>
              <Text style={[styles.routeText, {color: '#ffbfb0'}]}>MINAS GERAIS</Text>
      </TouchableOpacity>

      <TouchableOpacity
         onPress={() => this.props.navigation.navigate('RS')}
            style={[styles.routeCard,{backgroundColor: 'green'}]}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/RS.png')}/>
              <Text style={[styles.routeText, {color: '#90ee90'}]}>RIO GRANDE DO SUL</Text>
      </TouchableOpacity>

      <TouchableOpacity
         onPress={() => this.props.navigation.navigate('SC')}
            style={styles.routeCard}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/SC.png')}/>
              <Text style={[styles.routeText, {color: 'gray'}]}>SANTA CATARINA</Text>
      </TouchableOpacity>
      </ImageBackground>
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  backimage:{
    flex: 1,
    resizeMode: 'cover',
  },
  cardContext:{
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD100',
    borderColor: '#0000EE',
    borderBottomWidth: 5,
    marginBottom: 10
  },
  cardText:{
    marginTop: 25,
    color: '#000000',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardTip:{
    color: '#FFFFFF',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 5,
    backgroundColor: '#A13359',
    borderWidth: 10,
    borderColor: '#A13359',
    borderRadius: 20
  },
  routeCard: {
    flex: 0.3,
    backgroundColor: '#FFFFFF',
    marginTop: 29,
    opacity: 0.9
  },
  imageStyle: {
    position: 'absolute',
    width: 90,
    height: 60,
    right: 20,
  },
  routeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
    paddingLeft: 20,
    marginRight: 120,
    textAlign: 'right'
  },
})