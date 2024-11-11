import { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

export default class Logout extends Component {
  componentDidMount() {
    firebase.auth().signOut();
    this.props.navigation.replace('LoginScreen');
  }
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
      </View>
    );
  }
}
