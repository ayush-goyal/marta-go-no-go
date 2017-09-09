import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import styles from '../Styles';

export default class UseMartaScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi,</Text>
        <Text>Currently, you will not reach your destination on time with Marta. Therefore, we suggest you use Lyft.</Text>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.sendButton} onPress={this.sendData}>
            <Text style={styles.sendButtonText}>Go to Lyft</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const stylesOther = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


