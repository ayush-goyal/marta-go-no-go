import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class UseMartaScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
    justifyContent: 'center',
  },
});