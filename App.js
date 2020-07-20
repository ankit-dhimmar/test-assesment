/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import List from './src/screens/List';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
