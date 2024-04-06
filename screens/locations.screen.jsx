import { View, Text, StyleSheet } from 'react-native';

import Button from '../components/button.component';

const Locations = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Locations</Text>
      <Text style={styles.paragraph}>
        Hello
      </Text>
      <Button
        title='Go back'
        onPress={() => navigation.goBack()}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Add some space between the title and the paragraph
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
    paddingHorizontal: 100,
  },
  button: {
    backgroundColor: '#00bfff',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
});


export default Locations;