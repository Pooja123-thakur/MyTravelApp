import { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import Details from '../screens/Details';
import FilledDetails from '../screens/FilledDetails'; 
const Stack = createStackNavigator();

export default class NavigationDetail extends Component {
  render() {
    return (
        <Stack.Navigator
          initialRouteName=""
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="FilledDetails" component={FilledDetails} />
        </Stack.Navigator>
    );
  }
}
