const CountriesItinerary = [
  {
    name: 'Italy',
    city: 'Venice',
    image: require('../assets/Venice.jpg'),
    itinerary: [
      {
        day: 'Day 1',
        description: 'Explore Venice.',
        image: require('../assets/Venice.jpg'), // Replace with actual path if different
      },
      {
        day: 'Day 2',
        description: 'Visit the Colosseum in Rome.',
        image: require('../assets/colosseum.jpg'),
      },
      {
        day: 'Day 3',
        description: 'Wine tasting in Tuscany.',
        image: require('../assets/tuscany.jpg'),
      },
    ],
  },
  {
    name: 'France',
    city: 'Paris',
    image: require('../assets/Paris.jpeg'),
    itinerary: [
      {
        day: 'Day 1',
        description: 'Eiffel Tower visit.',
        image: require('../assets/ETower.jpg'),
      },
      {
        day: 'Day 2',
        description: 'Louvre Museum.',
        image: require('../assets/louvre.jpg'),
      },
      {
        day: 'Day 3',
        description: 'Wine tasting in Bordeaux.',
        image: require('../assets/bordeaux.jpg'),
      },
    ],
  },
  {
    name: 'UK',
    city: 'London',
    image: require('../assets/London.jpg'),
    itinerary: [
      {
        day: 'Day 1',
        description: 'Explore the Tower of London.',
        image: require('../assets/Tower_of_london.png'),
      },
      {
        day: 'Day 2',
        description: 'Check out the Tower Bridge.',
        image: require('../assets/Tower_Bridge.jpg'),
      },
      {
        day: 'Day 3',
        description: 'Visit Buckingham Palace.',
        image: require('../assets/Buckingham_Palace.jpg'),
      },
    ],
  },
  {
    name: 'Germany',
    city: 'Berlin',
    image: require('../assets/Berlin.jpg'),
    itinerary: [
      {
        day: 'Day 1',
        description: 'Visit the Reichstag.',
        image: require('../assets/Reichstag_Building.jpg'),
      },
      {
        day: 'Day 2',
        description: 'Brandenburg Gate.',
        image: require('../assets/BGate.jpg'),
      },
      {
        day: 'Day 3',
        description: 'Berlin TV Tower.',
        image: require('../assets/TV_Tower.jpg'),
      },
    ],
  },
  {
    name: 'Japan',
    city: 'Tokyo',
    image: require('../assets/Tokyo.jpg'),
    itinerary: [
      {
        day: 'Day 1',
        description: 'See the Tokyo Tower.',
        image: require('../assets/TokyoTower.jpg'),
      },
      {
        day: 'Day 2',
        description: 'Explore the Tokyo Skytree.',
        image: require('../assets/TSkytree.jpg'),
      },
      {
        day: 'Day 3',
        description: 'Imperial Palace visit.',
        image: require('../assets/Imperial_Palace.jpg'),
      },
    ],
  },
  {
    name: 'USA',
    city: 'New York City',
    image: require('../assets/New-York-City.jpg'),
    itinerary: [
      {
        day: 'Day 1',
        description: 'Brooklyn Bridge tour.',
        image: require('../assets/Brooklyn_Bridge.jpg'),
      },
      {
        day: 'Day 2',
        description: 'Statue of Liberty visit.',
        image: require('../assets/Statue_of_Liberty.jpg'),
      },
      {
        day: 'Day 3',
        description: 'Explore Central Park.',
        image: require('../assets/Central_Park.jpg'),
      },
    ],
  },
  // Add more countries and itineraries as needed...
];

export default CountriesItinerary;
