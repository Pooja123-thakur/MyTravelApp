import { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Animated,
  Pressable,
} from 'react-native';
import firebase from 'firebase';

export default class FilledDetails extends Component {
  constructor(props) {
    super(props);
    this.scale = new Animated.Value(1);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      contact_number: '',
      guests: '',
      travel_dates: '',
      destination: '',
      no_of_kids: '',
      kids_ages: '',
    };
  }
  async addDetails() {
    const {
      first_name,
      last_name,
      email,
      contact_number,
      guests,
      travel_dates,
      destination,
      no_of_kids,
      kids_ages,
    } = this.state;

    try {
      var d = new Date();
      let details = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        contact_number: this.state.contact_number,
        guests: this.state.guests,
        travel_dates: this.state.travel_dates,
        destination: this.state.destination,
        no_of_kids: this.state.no_of_kids,
        kids_ages: this.state.kids_ages,
        created_on: d.toString(),
      };
      console.log(details);
      await firebase
        .database()
        .ref('/data/')
        .set(details)
        .then(function (snapshot) {});
      alert('Your data has been updated.');
    } catch (error) {
      alert('There was an issue submitting the details.');
    }
    const ageInt = parseInt(age, time);
    if (isNaN(ageInt) && ageInt >= 12) {
      return alert('Please enter a valid age.');
    }
  }
  handlePressIn = () => {
    Animated.spring(this.scale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  handlePressOut = () => {
    Animated.spring(this.scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header2}>
          <Text style={styles.header}>Planning</Text>
        </View>
        <ScrollView>
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
              placeholder="Enter Email Here"
              placeholderTextColor="gray"
              onChangeText={(text) =>
                this.setState({ email: text })
              }></TextInput>
            <TextInput
              style={styles.userInput}
              placeholder="Enter Phone Number Here"
              placeholderTextColor="gray"
              onChangeText={(text) =>
                this.setState({ contact_number: text })
              }></TextInput>
            <TextInput
              style={styles.userInput}
              placeholder="Enter Travel Dates Here"
              placeholderTextColor="gray"
              onChangeText={(text) =>
                this.setState({ last_name: text })
              }></TextInput>
            <TextInput
              style={styles.userInput}
              placeholder="Enter Number of People Here"
              placeholderTextColor="gray"
              onChangeText={(text) =>
                this.setState({ guests: text })
              }></TextInput>
            <TextInput
              style={styles.userInput}
              placeholder="Enter Destination Here"
              placeholderTextColor="gray"
              onChangeText={(text) =>
                this.setState({ destination: text })
              }></TextInput>
            <TextInput
              style={styles.userInput}
              placeholder="Enter Number of Kids"
              placeholderTextColor="gray"
              onChangeText={(text) =>
                this.setState({ no_of_kids: text })
              }></TextInput>
            <TextInput
              style={styles.userInput}
              placeholder="Enter Kids' Ages if Any"
              placeholderTextColor="gray"
              onChangeText={(text) =>
                this.setState({ kids_ages: text })
              }></TextInput>
            <Pressable
              onPressIn={this.handlePressIn}
              onPressOut={this.handlePressOut}
              onPress={() => this.addDetails()}>
              <Animated.View
                style={[styles.button, { transform: [{ scale: this.scale }] }]}>
                <Text style={styles.text}>Book This Itinerary</Text>
              </Animated.View>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  userInput: {
    borderWidth: 3,
    borderColor: 'gray',
    width: 250,
    marginTop: 20,
    borderRadius: 20,
    padding: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    backgroundColor: '#1e90ff',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  header: {
    fontWeight: 'bold', 
    fontSize: 30, 
  },
});
