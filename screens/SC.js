import React, {Component} from 'react'
import {Text, StyleSheet, TouchableOpacity, View, Image, BackgroundImage} from 'react-native'

export default class SC extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text>Turismo em SANTA CATARINA</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})