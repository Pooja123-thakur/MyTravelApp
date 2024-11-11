import { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from '../screens/SignUp';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DrawerNavigation from './DrawerNavigation';
import Details from '../screens/Details';
import FilledDetails from '../screens/FilledDetails'
import Favorites from  '../screens/Favorites'
const Stack = createStackNavigator();

export default class StackNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="DrawerNavigation"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="FilledDetails" component={FilledDetails} />
                    <Stack.Screen name="Favorites" component={Favorites} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
