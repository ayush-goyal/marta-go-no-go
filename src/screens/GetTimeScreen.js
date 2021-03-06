import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight, StatusBar, NativeModules } from 'react-native';
import styles from '../Styles';

import FloatingLabelInput from '../components/FloatingLabelInput';

export default class GetTimeScreen extends Component {
  constructor(props) {
    super(props);

    this.sendData = this.sendData.bind(this);
    
    this.state = {
      time: '',
      origin: {},
      destination: {}
    }
    //console.log(this.props.navigation);
    // destination = this.props.navigation.state.params.destination
  }
  componentDidMount() {
    var destinationGoogle = this.props.navigation.state.params.destination.split(' ').join('+');
    var googleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + destinationGoogle + "&key=AIzaSyAg_5ujfAGXd9EXVbOGguQJ05B9nosQbIc";
    
    fetch(googleURL)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      var location = responseJson.results[0].geometry.location;
      this.setState({destination: {
        latitude: location.lat,
        longitude: location.lng,
        formatted: responseJson.results[0].formatted_address
      }})
    })
    .catch((error) => {
      console.error(error);
    });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        var originFormattedURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyAg_5ujfAGXd9EXVbOGguQJ05B9nosQbIc`;
        
        fetch(originFormattedURL)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.setState({origin: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            formatted: responseJson.results[0].formatted_address
          }})
        })
        .catch((error) => {
          console.error(error);
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <StatusBar hidden />
          <FloatingLabelInput label="Enter your arrival time" value={this.state.time} onChangeText={this.handleTextChange} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.sendButton} onPress={this.sendData}>
            <Text style={styles.sendButtonText}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  handleTextChange = (newText) => this.setState({ time: newText });
  sendData() {

    var time = this.state.time;
    if (time.length == 4) {
      time = '0' + time;
    }
    var dateString = 'Sat, 09 Sep 2017 ' + time + ':00 GMT-0400';
    var timeMilliseconds = Date.parse(dateString);
    console.log(timeMilliseconds);

    console.log(this.state);
    var originLatitude = (this.state.origin.latitude).toFixed(7);
    var originLongitude = (this.state.origin.longitude).toFixed(7);
    var formattedOrigin = this.state.origin.formatted;
    var destinationLatitude = (this.state.destination.latitude).toFixed(7);
    var destinationLongitude = (this.state.destination.longitude).toFixed(7);
    var formattedDestination = this.state.destination.formatted;

    var requestURL = `localhost:3000?originLatitude=${originLatitude}&originLongitude=${originLongitude}&destinationLatitude=${destinationLatitude}&destinationLongitude=${destinationLongitude}&time=${timeMilliseconds}`;

    // Fetch to get yes or no
    /* return fetch(requestURL)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.useMarta);
    }
    .catch((error) => {
      console.error(error);
    }); */

    var AppChanger = NativeModules.AppChanger;
    AppChanger.changeToLyft();


    var changeToMapsURL = `comgooglemaps://?saddr=${formattedOrigin}&daddr=${formattedDestination}&directionsmode=transit`;

    AppChanger.changeToMaps(changeToMapsURL);


    var useMarta = false;
    if (useMarta == true) {
      this.props.navigation.navigate('UseMartaScreen');
    } else if (useMarta == false) {
      this.props.navigation.navigate('NoUseMartaScreen');
    }
  }

}

