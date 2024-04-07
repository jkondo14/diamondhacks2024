import { View, Text, StyleSheet } from 'react-native';

import Button from '../components/button.component';

const Feedback = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.paragraph}>
        Welcome to our Study Space Explorer application! Our team consisitng of team members Brandon, Gavin, Henry and Jake is 
        dedicated to providing you with the best experience possible and improving your study experience here at UCSD. 
        We believe in quality, innovation, and customer satisfaction. Our app offers a wide range of features 
        designed to enhance your daily life, making it more convenient and enjoyable. Thank you for choosing us, 
        and we hope you enjoy using our app!{'\n'}
        {'\n'}
      </Text>
      <Button
        title='Home'
        onPress={() => navigation.navigate('Home')}
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
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#00bfff',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
});


export default Feedback;