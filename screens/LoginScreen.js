import { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  signIn = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('DrawerNavigation');
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };
  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.header}>Login</Text>
        </View>
        <View style={styles.container2}>
          <View>
            <TextInput
              style={styles.userInput}
              placeholder="Enter email id"
              placeholderTextColor="gray"
              onChangeText={(text) =>
                this.setState({ email: text })
              }></TextInput>
            <TextInput
              style={styles.userInput}
              placeholder="Enter password"
              placeholderTextColor="gray"
              secureTextEntry
              onChangeText={(text) =>
                this.setState({ password: text })
              }></TextInput>
          </View>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => this.signIn(email, password)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={styles.registerButtonText}>
              Don't have an account? Sign up now!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    backgroundColor: '#57b8c9',
    color: 'white',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.6,
  },
  title: {
    backgroundColor: '#57b8c9',
  },
  buttonLogin: {
    backgroundColor: '#182c7a',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 3,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
  },
  userInput: {
    borderWidth: 3,
    borderColor: 'gray',
    width: 250,
    marginTop: 30,
    borderRadius: 20, 
  },
  registerButtonText: {
    fontSize: 15,
    marginTop: 10,
  },
});
