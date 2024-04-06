import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Button from '../components/button.component';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Study with us at UCSD!</Text>
      <Text style={styles.paragraph}>
        Welcome! We are glad you have stumbled across our beginner project consisiting of students, who are in their first year at
        UCSD, both first-years and junior transfers. Feel free to explore our small tool we have created to enhance student's experience
        for learning at UCSD. Go Tritons!
      </Text>
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
      <View style={styles.imageRow}>
        <Image source={require('../images/UCSDLogo.png')} style={styles.image1} resizeMode="contain" />
        <Image source={require('../images/acmlogo.png')} style={styles.image2} resizeMode="contain" />
        </View>
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
    fontSize: 48,
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
  imageRow: {
    flexDirection: 'row', // Aligns children (images) in a row
    justifyContent: 'space-around', // Adjusts spacing around images
  },
  image1: {
    width: 200, // Set the width
    height: 200, // Set the height
    marginBottom: 1, // Add some space below the image
  },
  image2: {
    width: 200,
    height: 200,
    marginBottom: 1,
  },
});

export default HomeScreen;