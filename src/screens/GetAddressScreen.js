import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight, StatusBar } from 'react-native';
import styles from '../Styles';

import FloatingLabelInput from '../components/FloatingLabelInput';

export default class GetAddressScreen extends Component {
  constructor(props) {
    super(props);
    this.goToTimeScreen = this.goToTimeScreen.bind(this);
    this.state = {
      destination: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <StatusBar hidden />
          <FloatingLabelInput label="Enter your destination" value={this.state.destination} onChangeText={this.handleTextChange} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.sendButton} onPress={this.goToTimeScreen}>
            <Text style={styles.sendButtonText}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  handleTextChange = (newText) => this.setState({ destination: newText });
  goToTimeScreen() {
    this.props.navigation.navigate('GetTimeScreen', {destination: this.state.destination});
  }
}