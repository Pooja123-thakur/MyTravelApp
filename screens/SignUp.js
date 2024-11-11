import { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import firebase from 'firebase';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      confirmPassword: '',
    };
  }
  registerUser = (email, password, confirmPassword, first_name, last_name) => {
    if (password == confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          Alert.alert('User registered!');
          console.log(userCredential.user.uid);
          this.props.navigation.replace('Login');
          firebase
            .database()
            .ref('/users/' + userCredential.user.uid)
            .set({
              email: userCredential.user.email,
              first_name: first_name,
              last_name: last_name,
              current_theme: 'dark',
            });
        })
        .catch((error) => {
          Alert.alert(error.message);
        });
    } else {
      Alert.alert("Passwords don't match!");
    }
  };
  render() {
    const { email, password, confirmPassword, first_name, last_name } =
      this.state;
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.header}>Sign Up</Text>
        </View>
        <View style={styles.container2}>
          <Image
            source={require('../assets/travel_icon.png')}
            style={styles.imageSize}></Image>
          <View>
            <TextInput
              style={styles.userInput}
              placeholder="Enter First Name Here"
              placeholderTextColor="gray"
              onChangeText={(text) =>
                this.setState({ first_name: text })
              }></TextInput>
            <TextInput
              style={styles.userInput}
              placeholder="Enter Last Name Here"
              placeholderTextColor="gray"
              onChangeText={(text) =>
                this.setState({ last_name: text })
              }></TextInput>
            <TextInput
              style={styles.userInput}
              placeholder="Enter Username Here"
              placeholderTextColor="gray"
              onChangeText={(text) =>
                this.setState({ email: text })
              }></TextInput>
            <TextInput
              style={styles.userInput}
              placeholder="Enter Password Here"
              placeholderTextColor="gray"
              secureTextEntry
              onChangeText={(text) =>
                this.setState({ password: text })
              }></TextInput>
            <TextInput
              style={styles.userInput}
              placeholder="Confirm Password Here"
              placeholderTextColor="gray"
              secureTextEntry
              onChangeText={(text) =>
                this.setState({ confirmPassword: text })
              }></TextInput>
          </View>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() =>
              this.registerUser(
                email,
                password,
                confirmPassword,
                first_name,
                last_name
              )
            }>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <Text style={styles.registerButtonText}>
              Have an account? Log in here!
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
  imageSize: {
    width: 50,
    height: 50,
    marginTop: 150,
  },
  registerButtonText: {
    fontSize: 15,
    marginTop: 10,
  },
});
