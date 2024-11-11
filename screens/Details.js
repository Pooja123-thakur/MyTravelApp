import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import countriesData from './CountriesItnerary'; // Adjust the path accordingly

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.scale = new Animated.Value(1);
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

  // Save itinerary to favorites
  saveToFavorites = async () => {
    const { route } = this.props;
    const { countryName } = route.params;
    const countryData = countriesData.find(country => country.name === countryName);
    if (!countryData) return;

    const itinerary = countryData.itinerary;
    const image = countryData.image;
    try {
      const currentFavorites = JSON.parse(await AsyncStorage.getItem('favorites')) || [];
      const updatedFavorites = [...currentFavorites, { countryName, itinerary, image }];
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      alert(`${countryName} itinerary saved to favorites!`);
    } catch (error) {
      console.error('Error saving favorite:', error);
    }
  };

  render() {
    const { route } = this.props;
    const { countryName } = route.params;
    const countryData = countriesData.find(country => country.name === countryName);

    if (!countryData) {
      return (
        <View style={styles.container}>
          <Text>No itinerary found for {countryName}</Text>
        </View>
      );
    }

    const { city, image, itinerary } = countryData;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Itinerary for {city}, {countryName}</Text>
    
        <ScrollView>
          {itinerary.map((item, index) => (
            <View key={index} style={styles.itineraryItem}>
              <Text style={styles.dayText}>{item.day}</Text>
              <Text style={styles.text}>{item.description}</Text>
              <Image source={item.image} style={styles.image} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('FilledDetails')}
            onPressIn={this.handlePressIn}
            onPressOut={this.handlePressOut}
          >
            <Animated.View style={[styles.button, { transform: [{ scale: this.scale }] }]}>
              <Text style={styles.buttonText}>Book This Itinerary</Text>
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={this.saveToFavorites}
            onPressIn={this.handlePressIn}
            onPressOut={this.handlePressOut}
          >
            <Animated.View style={[styles.button, { transform: [{ scale: this.scale }] }]}>
              <Text style={styles.buttonText}>Save this for later</Text>
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonDesign}
            onPress={() => this.props.navigation.navigate('DrawerNavigation')}
          >
            <Text style={styles.buttonTxt}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  countryImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  itineraryItem: {
    marginBottom: 20,
    alignItems: 'center',
  },
  dayText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  button: {
    padding: 15,
    backgroundColor: '#1e90ff',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonDesign: {
    width: 100,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTxt: {
    color: 'white',
  },
  buttonContainer: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
