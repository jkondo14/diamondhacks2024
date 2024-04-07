import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Alert } from 'react-native';

// Sample data with an additional "features" array for each college
const colleges = [
  {
    id: '1',
    name: 'Revelle College',
    description: 'Locations:',
    features: [
      { id: '1', feature: '64 Degrees', value: '323 Seats', link: 'https://rb.gy/ik3wle' },
      { id: '2', feature: 'Galbraith Hall', value: '130 Seats', link: 'https://rb.gy/lyqpdf' },
    ],
  },
  {
    id: '2',
    name: 'Muir College',
    description: 'Locations:',
    features: [
      { id: '3', feature: 'John\'s Market(Outdoors)', value: '10 Seats', link: '###' },
      { id: '4', feature: 'Middle of Muir(MOM)', value: '121 Seats', link: '###' },
      { id: '5', feature: 'Pines Dining Hall', value: '274 Seats', link: '###' },
      { id: '6', feature: 'Roots Restaurant', value: '50 Seats', link: '###' },
    ],
  },
  {
    id: '3',
    name: 'Marshall College',
    description: 'Locations:',
    features: [
      { id: '7', feature: 'Ocean View Terrance Restaurant', value: '175 Seats', link: '###' },
    ],
  },
  {
    id: '4',
    name: 'Warren College',
    description: 'Locations:',
    features: [
      { id: '8', feature: 'Canyon Vista Restaurant', value: '250 Seats', link: '###' },
      { id: '9', feature: 'CSE Building(Lab excluded)', value: '100 Seats', link: '###' },
      { id: '10', feature: 'Franklin Antonio Hall', value: '50 Seats', link: '###' },
      { id: '11', feature: 'JK Wood Lounge', value: '25 Seats', link: '###' },
    ],
  },
  {
    id: '5',
    name: 'Roosevelt College',
    description: 'Locations:',
    features: [
      { id: '12', feature: 'Cafe Ventanas Restaurant', value: '290 Seats', link: '###' },
    ],
  },
  {
    id: '6',
    name: 'Sixth College',
    description: 'Locations:',
    features: [
      { id: '13', feature: 'The Restaurants at Sixth', value: '200 Seats', link: '###' },
      { id: '14', feature: 'Sixth Commuter Center', value: '30 seats', link: '###' },
      { id: '15', feature: 'Sixth Terrances', value: '40 seats', link: '###' },
    ],
  },
  {
    id: '7',
    name: 'Seventh College',
    description: 'Locations:',
    features: [
      { id: '16', feature: 'The Bistro', value: '40 Seats', link: '###' },
    ],
  },
  {
    id: '8',
    name: 'Eigth College',
    description: 'Locations:',
    features: [
      { id: '17', feature: 'Podemos', value: '10 Seats', link: '###' },
    ],
  },
  {
    id: '9',
    name: 'Pepper Canyon East',
    description: 'Locations:',
    features: [
      { id: '18', feature: 'Foodworx Dining Hall', value: '30 Seats', link: '###' },
    ],
  },
  {
    id: '10',
    name: 'Rita Atkinson Residences',
    description: 'Locations:',
    features: [
      { id: '19', feature: 'Lobby', value: '20 Seats', link: '###' },
      { id: '20', feature: 'Ninth Floor', value: '5 Seats', link: '###' },
      { id: '21', feature: 'The Nook', value: '15 Seats', link: '###' },
    ],
  },
  {
    id: '11',
    name: 'Libraries',
    description: 'Locations:',
    features: [
      { id: '22', feature: 'Geisel Library', value: '3000 Seats', link: '###' },
      { id: '23', feature: 'WongAvery Library', value: '900 Seats', link: '###' },
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
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 14,
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
    paddingVertical: 5,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionDescription: {
    fontSize: 14,
    marginTop: 5,
  },
  table: {
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 5,
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