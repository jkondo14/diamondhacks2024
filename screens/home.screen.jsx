import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Button from '../components/button.component';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title='About Us'
        onPress={() => navigation.navigate('About Us')}
        style={styles.button}
      />
      <Button
        title='Locations'
        onPress={() => navigation.navigate('Locations')}
        style={styles.button}
      />
      <StatusBar style='auto' />
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
  button: {
    backgroundColor: '#00bfff',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
});

export default HomeScreen;