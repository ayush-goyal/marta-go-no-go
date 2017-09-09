import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class GetAddressScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.addressInputContainer}>
          <TextInput style={styles.addressInput} placeholder="Origin" onChangeText={(text) => this.setState({origin})} />
          <TextInput style={styles.addressInput} placeholder="Destination" onChangeText={(text) => this.setState({destination})} />
        </View>
        <View style={styles.sendButtonContainer}>
          <TouchableHighlight style={styles.sendButton} onPress={this.sendInfo}>
            <Text>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressInputContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressInput: {
    height: 40,
    justifyContent: 'center',
    marginTop: 50
  },
  sendButtonContainer: {
    flex: 3
  },
  sendButton: {
    backgroundColor: '#eee',
    padding: '5%',
  }
});
