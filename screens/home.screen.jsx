import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Button from '../components/button.component';

const HomeScreen = ({ navigation }) => {
  return (
     <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Study with us at UCSD!</Text>
        <Text style={styles.paragraph}>
          Welcome! We are glad you have stumbled across our beginner project consisiting of students, who are in their first year at
          UCSD, both first-years and junior transfers. Utilizing tools such as React, JavaScript, API, etc. we have created an extensive
          experience for students to find optimal study spaces!<br/><br/>
          We understand that studying in your dormitory, apartment, or wherever you live may not always be one's preference as we
          often are distarcted or feel sleepy at home. We also understand that people like change and do not like to only study at
          Geisel Library forever so we made it our mission to make an amazing application and create an interactive expereience. 
          Stay Locked in with new study spots and become the Academic weapon you always aspired to be!<br/><br/>
          Feel free to explore our small tool we have created to enhance student's experience
          for learning at UCSD. Go Tritons! <br/>
          <br/>
          This app was created during ACM's(Assocation for Computing Machinery) 2024 Diamond Hacks in La Jolla, California. Thank you
          for taking the time to look through our project and we hope you enjoy our app!
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
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>UCSD, 9500 Gilman Dr, La Jolla, CA 92093</Text>
          <Text style={styles.bottomText}>© 2024 UCSD ACM Chapter. All rights reserved.</Text>
        </View>
        <StatusBar style='auto' />
      </View>
    </ScrollView>   
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 0,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 0, // Ensure there's padding at the bottom
  },
  title: {
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 350,
    paddingTop: 300, // Add some space between the title and the paragraph
  },
  paragraph: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingTop: 200,
    paddingBottom: 400,
    paddingHorizontal: 300,
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
  bottomContainer: {
  backgroundColor: '#007BFF', // Example background color
  width: '100%', // Ensure the background color spans the full width
  paddingVertical: 0, // Add vertical padding to create space around the text
  marginBottom: 0,
  paddingHorizontal: 20, // Add horizontal padding for better text spacing
},
  bottomText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff', // White color for better readability, adjust as needed
  },
});

export default HomeScreen;