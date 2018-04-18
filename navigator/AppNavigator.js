import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

//import screens here
import HomeContainer from '../container/HomeContainer'
import RootContainer from '../container/RootContainer'

const AppNavigator = StackNavigator({
    Home: { screen: HomeContainer},
    RootContainer: { screen: RootContainer},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'RootContainer',
    navigationOptions: {
      headerStyle: {}
    }
  }
);
export default AppNavigator