import {Component} from 'react';
import {View, StyleSheet, ActivityIndicator, Image, Text} from 'react-native';
import Stack from './navigation/StackNavigation';
import firebase from 'firebase';
import { firebaseConfig } from './screens/config';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      role: true, 
    }
  }
  render() {
        setTimeout(()=>this.setState({role: false}), 5000)
    if(this.state.role) {
      
      return(
        <View style={styles.container}>
          <Image style={styles.icon} source={require("./assets/travel_icon.png")} />
          <Text style={styles.txtInfo}>
            Worldly
          </Text>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    else {
      return <Stack></Stack>
    }
  }
}
const styles = StyleSheet.create({
    container: {
    flex: 1, 
  }, 
  txtInfo: {
    fontFamily: 'Monospace',
    color: 'black', 
    margin: 15, 
    fontSize: 20, 
    alignSelf: 'center', 
  }, 
  icon: {
    width: 200, 
    height: 200, 
    alignSelf: 'center', 
    marginTop: 100, 
  }, 
})
