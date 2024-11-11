import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CountriesItinerary from './CountriesItnerary'; // Import countries data

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: '',
      countries: CountriesItinerary, // Ensure this is an array
    };
  }

  handleNavigation = (country) => {
    this.props.navigation.navigate('Details', { countryName: country });
  };

  render() {
    return (
      <View style={styles.screenContainer}>
        <Text style={styles.title}>Where do you want to be?</Text>
        <TextInput
          placeholder="Type a country name"
          placeholderTextColor="gray"
          style={styles.inputTxt}
          value={this.state.countryName}
          onChangeText={(text) => this.setState({ countryName: text })}
        />
        <View style={styles.container}>
          <Text style={styles.subTitle}>Recommended Plans</Text>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.verticalScrollContainer}
          >
            {Array.isArray(this.state.countries) && this.state.countries.map((country, index) => (
              <TouchableOpacity
                key={index}
                style={styles.countryContainer}
                onPress={() => this.handleNavigation(country.name)}
              >
                <Image
                  source={country.image}
                  style={styles.imageRecommendation}
                />
                <Text style={styles.countryText}>{country.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTxt: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 20,
    width: '100%',
    padding: 12,
    marginBottom: 20,
    color: '#333',
  },
  verticalScrollContainer: {
    width: '100%',
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  imageRecommendation: {
    width: 80,
    height: 50,
    borderRadius: 8,
    marginRight: 15,
  },
  countryText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
