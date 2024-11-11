import { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Information extends Component {
  render() {
    return (
      <View>
        <Text>Information</Text>
        <View>
          <Text>[Placeholder]</Text>
          <Text>Travel Advisory: </Text>
        </View>
        <View>
          <Text>Recommended Locations</Text>
          <Text>[City or Town]</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  
})