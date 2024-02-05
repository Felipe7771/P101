import React, {Component} from 'react'
import {Text, StyleSheet, TouchableOpacity, View, Image, ImageBackground} from 'react-native'

let turism = require('./Turism.json')

export default class SP extends Component{
  render(){
    console.log(turism)
    return(
      <View style={styles.container}>
      <ImageBackground style={styles.backimage} source={require('../assets/backgroundTuri.png')}>
         <View style={styles.cardContext}>
         <Text style={styles.cardText}>{turism[0].sp.name}!</Text>
         <Text style={styles.cardTip}>3 pontos mais curtidos pelas pessoas:</Text>
         </View>

         <View style={styles.containerTuri}>
         <View style={styles.titleTuri}>
           <Text style={styles.numberTuri}>#1</Text>
           <Text style={styles.nameTuri}>{turism[0].sp.turismName1}</Text>
         </View>
         <Image style={styles.imageTuri} source={require('../assets/sp/paulista.png')}/>
         </View>
      </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  backimage:{
    flex: 1,
    resizeMode: 'cover',
  },
  cardContext:{
    flex: 0.16,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 5,
    marginBottom: 100
  },
  cardText:{
    marginTop: 65,
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30
  },
  cardTip:{
    color: '#FFFFFF',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#FF0000',
    borderWidth: 10,
    borderColor: '#FF0000',
    borderRadius: 20,
  },
  containerTuri:{
    flex: 0.3,
    borderColor: 'white',
    borderWidth: 5,
    borderLeftWidth: 1,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 0,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white'
  },
  titleTuri:{
    backgroundColor: 'lightblue'
  },
  numberTuri:{
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 100,
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  nameTuri:{
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 50,
  },
  imageTuri:{
    width: 100,
    height: 100,
    position: ''
  }
})