import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Alert } from 'react-native';


const colleges = [
  {
    id: '1',
    name: 'Revelle College',
    description: 'Locations:',
    features: [
      { id: '1', feature: '64 Degrees', value: '323 Seats', link: 'https://tinyurl.com/567nfktt' },
      { id: '2', feature: 'Galbraith Hall', value: '130 Seats', link: 'https://tinyurl.com/ph8w4u5c' },
      { id: '3', feature: 'Revelle Commuter Lounge', value: '25 Seats', link: 'https://tinyurl.com/42d2kb2d' },
    ],
  },
  {
    id: '2',
    name: 'Muir College',
    description: 'Locations:',
    features: [
      { id: '4', feature: 'John\'s Market(Outdoors)', value: '10 Seats', link: 'https://tinyurl.com/mrx8j2pe' },
      { id: '5', feature: 'Middle of Muir(MOM)', value: '121 Seats', link: 'https://tinyurl.com/mspvxrek' },
      { id: '6', feature: 'Pines Dining Hall', value: '274 Seats', link: 'https://tinyurl.com/mwkcztwj' },
      { id: '7', feature: 'Roots Restaurant', value: '50 Seats', link: 'https://tinyurl.com/mstpds5u' },
    ],
  },
  {
    id: '3',
    name: 'Marshall College',
    description: 'Locations:',
    features: [
      { id: '8', feature: 'Ocean View Terrance Restaurant', value: '175 Seats', link: 'https://tinyurl.com/2uhwhs25' },
    ],
  },
  {
    id: '4',
    name: 'Warren College',
    description: 'Locations:',
    features: [
      { id: '9', feature: 'Canyon Vista Restaurant', value: '250 Seats', link: 'https://tinyurl.com/bdd2m73u' },
      { id: '10', feature: 'CSE Building(Lab excluded)', value: '100 Seats', link: 'https://tinyurl.com/bdhbnzfy' },
      { id: '11', feature: 'Franklin Antonio Hall', value: '50 Seats', link: 'https://tinyurl.com/yy857np8' },
      {feature: 'JK Wood Lounge', value: '25 Seats'},
    ],
  },
  {
    id: '5',
    name: 'Roosevelt College',
    description: 'Locations:',
    features: [
      { id: '12', feature: 'Cafe Ventanas Restaurant', value: '290 Seats', link: 'https://tinyurl.com/4395fnpm' },
    ],
  },
  {
    id: '6',
    name: 'Sixth College',
    description: 'Locations:',
    features: [
      { id: '13', feature: 'The Restaurants at Sixth', value: '200 Seats', link: 'https://tinyurl.com/kunh5sne' },
      { id: '14', feature: 'Sixth Commuter Center', value: '30 seats', link: 'https://tinyurl.com/2xfmate3'},
      { id: '15', feature: 'Sixth Terraces', value: '40 seats', link: 'https://tinyurl.com/ttnxctdx' },
    ],
  },
  {
    id: '7',
    name: 'Seventh College',
    description: 'Locations:',
    features: [
      { id: '16', feature: 'The Bistro', value: '40 Seats', link: 'https://tinyurl.com/5329vef7' },
      { id: '17', feature: 'North Break Study Lounge', value: '45 Seats', link: 'https://tinyurl.com/6hnw5k3z' },
    ],
  },
  {
    id: '8',
    name: 'Eigth College',
    description: 'Locations:',
    features: [
      { id: '18', feature: 'Podemos', value: '10 Seats', link: 'https://tinyurl.com/43kvwue4' },
    ],
  },
  {
    id: '9',
    name: 'Pepper Canyon East',
    description: 'Locations:',
    features: [
      { id: '19', feature: 'Foodworx Dining Hall', value: '30 Seats', link: 'https://tinyurl.com/mubxd7zr' },
    ],
  },
  {
    id: '10',
    name: 'Rita Atkinson Residences',
    description: 'Locations:',
    features: [
      { id: '20', feature: 'Lobby', value: '20 Seats', link:'https://tinyurl.com/2s87z96u'},
      {id: '27', feature: 'Ninth Floor', value: '5 Seats', link:'https://tinyurl.com/2s87z96u'},
      {id: '28', feature: 'The Nook', value: '15 Seats', link:'https://tinyurl.com/2s87z96u'},
    ],
  },
  {
    id: '11',
    name: 'Libraries',
    description: 'Locations:',
    features: [
      { id: '21', feature: 'Geisel Library', value: '3000 Seats', link: 'https://tinyurl.com/5fumf757' },
      { id: '22', feature: 'WongAvery Library', value: '900 Seats', link: 'https://tinyurl.com/46bxc2vh' },
    ],
  },
  {
    id: '12',
    name: 'Miscellaneous',
    description: 'Locations:',
    features: [
      { id: '23', feature: 'Glider Lounge', value: '50 Seats', link: 'https://tinyurl.com/ynmx3cxk' },
      { id: '24', feature: 'Price Center', value: '300 Seats', link: 'https://tinyurl.com/mr225a8j' },
      { id: '25', feature: 'Design and Innovation Building', value: '50 Seats', link: 'https://tinyurl.com/4eu4jr4u' },
      { id: '26', feature: 'Structural and Material Engineering Building', value: '50 Seats', link: 'https://tinyurl.com/3u3trtzu' },
    ],
  },
];

const UCSDCollegesScreen = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleExpand = (id) => {
    if (expandedSection === id) {
      setExpandedSection(null);
    } else {
      setExpandedSection(id);
    }
  };

  const handleOpenURL = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", `Unable to open URL: ${url}`);
      }
    } catch (error) {
      Alert.alert("Error", `Unable to open URL: ${url}`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Locations on Campus!</Text>
      <Text style={styles.paragraph}>Click on the names of each area to discover study spots!</Text>
      {colleges.map((college) => (
        <View key={college.id} style={styles.section}>
          <TouchableOpacity onPress={() => toggleExpand(college.id)}>
            <Text style={styles.sectionTitle}>{college.name}</Text>
          </TouchableOpacity>
          {expandedSection === college.id && (
            <>
              <Text style={styles.sectionDescription}>{college.description}</Text>
              <View style={styles.table}>
                {college.features.map((feature) => (
                  <View key={feature.id} style={styles.tableRow}>
                    <Text style={styles.cell}>
                      {feature.feature}: {feature.value}
                      {feature.link && (
                        <Text
                          style={styles.link}
                          onPress={() => handleOpenURL(feature.link)}
                        >
                          [More Info]
                        </Text>
                      )}
                    </Text>
                  </View>
                ))}
              </View>
            </>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
  },
  pageTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginHorizontal: 10,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionDescription: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
  },
  table: {
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    fontSize: 14,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
});

export default UCSDCollegesScreen;