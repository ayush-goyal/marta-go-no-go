import React from 'react';
import { StackNavigator } from 'react-navigation';

import GetAddressScreen from './screens/GetAddressScreen';
import GetTimeScreen from './screens/GetTimeScreen';

const App = StackNavigator({
  GetAddressScreen: { screen: GetAddressScreen },
  GetTimeScreen: { screen: GetTimeScreen },
});

export default App;