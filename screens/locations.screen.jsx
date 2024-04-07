import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// Sample data with an additional "features" array for each college
const colleges = [
  {
    id: '1',
    name: 'Revelle College',
    description: 'Locations:',
    features: [
      { feature: '64 Degrees', value: '323 Seats' , link: 'https://rb.gy/ik3wle'},
      { feature: 'Galbraith Hall', value: '130 Seats', link: 'https://rb.gy/lyqpdf' },
    ],
  },
  {
    id: '2',
    name: 'Muir College',
    description: 'Locations:',
    features: [
      { feature: 'John\'s Market(Outdoors)', value: '10 Seats'},
      { feature: 'Middle of Muir(MOM)', value: '121 Seats'},
      { feature: 'Pines Dining Hall', value: '274 Seats'},
      { feature: 'Roots Restaurant', value: '50 Seats'},
    ],
  },
  {
    id: '3',
    name: 'Marshall College',
    description: 'Locations:',
    features: [
      { feature: 'Ocean View Terrance Restaurant', value: '175 Seats'},
    ],
  },
  {
    id: '4',
    name: 'Warren College',
    description: 'Locations:',
    features: [
      { feature: 'Canyon Vista Restaurant', value: '250 Seats'},
      { feature: 'CSE Building(Lab excluded)', value: '100 Seats'},
      { feature: 'Franklin Antonio Hall', value: '50 Seats'},
      { feature: 'JK Wood Lounge', value: '25 Seats'},
    ],
  },
  {
    id: '5',
    name: 'Roosevelt College',
    description: 'Locations:',
    features: [
      { feature: 'Cafe Ventanas Restaurant', value: '290 Seats'},
    ],
  },
  {
    id: '6',
    name: 'Sixth College',
    description: 'Locations:',
    features: [
      { feature: 'The Restaurants at Sixth', value: '200 Seats'},
      { feature: 'Sixth Commuter Center', value: '30 seats'},
      { feature: 'Sixth Terrances', value: '40 seats'},

    ],
  },
  {
    id: '7',
    name: 'Seventh College',
    description: 'Locations:',
    features: [
      { feature: 'The Bistro', value: '40 Seats'},
    ],
  },
  {
    id: '8',
    name: 'Eigth College',
    description: 'Locations:',
    features: [
      { feature: 'Podemos', value: '10 Seats'},
    ],
  },
  {
    id: '9',
    name: 'Pepper Canyon East',
    description: 'Locations:',
    features: [
      { feature: 'Foodworx Dining Hall', value: '30 Seats' },
    ],
  },
  {
    id: '10',
    name: 'Rita Atkinson Residences',
    description: 'Locations:',
    features: [
      { feature: 'Lobby', value: '20 Seats' },
      { feature: 'Ninth Floor', value: '5 Seats' },
      { feature: 'The Nook', value: '15 Seats' },
    ],
  },
  {
    id: '11',
    name: 'Libraries',
    description: 'Locations:',
    features: [
      { feature: 'Geisel Library', value: '3000 Seats' },
      { feature: 'WongAvery Library', value: '900 Seats' },
    ],
  },

  // Add other colleges
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
                {college.features.map((feature, index) => (
                  <View key={index} style={styles.tableRow}>
                    <Text style={styles.cell}>{feature.feature}</Text>
                    <Text style={styles.cell}>{feature.value}</Text>
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
    marginBottom: 10, // Add some space below the title
    textAlign: 'center', // Center the title
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
});

export default UCSDCollegesScreen;
