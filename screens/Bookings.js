import { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Favorites extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.header}>Bookings</Text>
        </View>
        <View>
          <Text>[Country Name]</Text>
          <Text>[City Name]</Text>
          <TouchableOpacity>
            <Text>Add to Booking</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Recent Bookings</Text>
        </View>
        <Text>[Placeholder Note: Add multiple countries by function]</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    fontSize: 30, 
    color: 'white', 
    backgroundColor: '#1e3e6b', 
    textAlign: 'center', 
    fontFamily: 'Monospace', 
  }, 
  container: {
    flex: 1, 
  }, 
});
