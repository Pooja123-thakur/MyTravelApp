import NavigationDetail from './NavigationDetail';
import Favorites from '../screens/Favorites';
import Booking from '../screens/Bookings';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
import { Component } from 'react';

import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';

export default class Tab_Navigation extends Component {
  render() {
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStack}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'NavigationDetail') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Booking') {
              iconName = focused ? 'book' : 'book-outline';
            }
            return (
              <Ionicons
                name={iconName}
                size={15}
                color={color}
                style={{ width: 33, height: 33 }}
              />
            );
          },
        })}
        activeColor="white"
        inactiveColor="lightgray">
        <Tab.Screen name="NavigationDetail" component={NavigationDetail} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Booking" component={Booking} />
      </Tab.Navigator>
    );
  }
}
const styles = StyleSheet.create({
  bottomTabStack: {
    backgroundColor: '#2f345d',
    height: '8%',
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: 'hidden',
    position: 'absolute',
  },
});
