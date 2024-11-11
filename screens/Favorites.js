import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class FavoritesScreen extends Component {
  state = { favorites: [] };

  componentDidMount() {
    this.loadFavorites();
  }

  loadFavorites = async () => {
    try {
      const favorites =
        JSON.parse(await AsyncStorage.getItem('favorites')) || [];
      this.setState({ favorites });
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  renderFavoriteItem = ({ item }) => (
    <View style={styles.countryContainer}>
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          this.props.navigation.navigate('Details', {
            countryName: item.countryName,
          })
        }>
        {item.image ? (
          <Image source={item.image} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholder}>No Image</Text>
        )}
        <Text style={styles.itemText}>{item.countryName}</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Favorites</Text>
        <FlatList
          data={this.state.favorites}
          renderItem={this.renderFavoriteItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'lightblue', },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, },
  item: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f0f0f0',
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  image: { width: 50, height: 50, borderRadius: 8, marginRight: 10 },
  imagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
    textAlign: 'center',
    color: 'gray',
  },
  countryContainer: { 
    flex: 1, 
    height: 700, 
  }, 
  itemText: { fontSize: 18 },
});
