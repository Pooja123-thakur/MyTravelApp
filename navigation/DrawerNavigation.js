import HomeScreen from '../screens/HomeScreen';
import LogOut from '../screens/LogOut';
import BottomTab from './BottomTabNavigation';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
import { Component } from 'react';

export default class Drawer_Navigation extends Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={BottomTab} />

        <Drawer.Screen name="LogOut" component={LogOut} />
      </Drawer.Navigator>
    );
  }
}
