import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
// import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';
import Milk from './components/Milk';
import Inventory from './components/Inventory';
import Fp from './components/Fp';
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Home1: {
      screen: Milk,
    },
    Home2: {
      screen: Inventory,
    },
    Home3: {
      screen: Fp,
    },
  },
 
  {
    initialRouteName: 'Home',
    navigationOptions: {
      title: ('Welcome'),
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
      },
      headerStyle: {
        backgroundColor: 'black',
      },
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}