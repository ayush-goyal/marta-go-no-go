import React from 'react';
import { Animated } from 'react-native';
import { StackNavigator } from 'react-navigation';

import GetAddressScreen from './screens/GetAddressScreen';
import GetTimeScreen from './screens/GetTimeScreen';
import UseMartaScreen from './screens/UseMartaScreen';
import NoUseMartaScreen from './screens/NoUseMartaScreen';

let MyTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
      inputRange,
      outputRange: [.8, 1, 1],
  });

  const scaleY = position.interpolate({
      inputRange,
      outputRange: ([0.8, 1, 1]),
  });
  return {
    // A timing function, default: Animated.timing.
    timing: Animated.spring,
    // Some parameters relevant to Animated.spring
    friction: 1,
    tension: 0.5,
  };
}

let TransitionConfiguration = () => {
  return {
      // Define scene interpolation, eq. custom transition
      screenInterpolator: (sceneProps) => {

          const {position, scene} = sceneProps;
          const {index} = scene;

          return MyTransition(index, position);
      }
  }
};

let transition = () => {
  return {
    // A timing function, default: Animated.timing.
    timing: Animated.spring,
    // Some parameters relevant to Animated.spring
    friction: 1,
    tension: 0.5,
  };
}

const App = StackNavigator({
  GetAddressScreen: { screen: GetAddressScreen },
  GetTimeScreen: { screen: GetTimeScreen },
  UseMartaScreen: { screen: UseMartaScreen },
  NoUseMartaScreen: { screen: NoUseMartaScreen }
}, {
  headerMode: 'none',
  transitionConfig: transition
});

export default App;