import { View, Text, StyleSheet, ScrollView, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import Button from '../components/button.component';

const Feedback = ({ navigation }) => {
    const [feedbackText, setFeedbackText] = useState('');
    
    const submitFeedback = () => {
        console.log(feedbackText);
        Keyboard.dismiss(); // Dismiss the keyboard upon submission
      };
  
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.title}>Feedback</Text>
            <Text style={styles.paragraph}>We appreciate you taking the time to explore our study space app! We would love to hear your feedback as we
            we know there is still so much to work on. Thank you and love you all!{'\n'}</Text>
            <TextInput
              style={styles.input}
              placeholder="Your feedback here..."
              value={feedbackText}
              onChangeText={setFeedbackText}
              multiline
              numberOfLines={4}
            />
            <Button
                title="Submit Feedback"
                onPress={submitFeedback}
                style={styles.button}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
  width: '100%', // Ensure the ScrollView fills the width
  backgroundColor: '#add8e6', // Match the background color if needed
  },
  input: {
    height: 100, // Adjust based on your needs
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1, // Thickness of the border
    borderColor: '#ccc', // Color of the border
    backgroundColor: 'white', // Background color of the text box
    padding: 10, // Inner padding of the text box
    borderRadius: 5, // Rounded corners of the text box
    width: '90%', // Adjust the width as needed
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingTop: 100, // Add some space between the title and the paragraph
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