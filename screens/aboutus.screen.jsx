import { View, Text, StyleSheet } from 'react-native';


const AboutUs = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.paragraph}>
        Welcome to our Study Space Explorer application! Our team consisiting of team members Brandon, Gavin, Henry and Jake is 
        dedicated to providing you with the best experience possible and improving your study experience here at UCSD. 
        We believe in quality, innovation, and customer satisfaction and preparing the next generation of Tritons. Our app offers a wide range of features 
        designed to enhance your daily life, making it more convenient and enjoyable. Thank you for choosing us, 
        and we hope you enjoy using our app!{'\n'}
        {'\n'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    paddingTop: 20, // Add padding at the top
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
});


export default AboutUs;