import React from 'react';
import { Stack, useNavigation, Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import { useEffect } from 'react';

export default function JournalQuestion( { navigation } ) {
    
    // Text Input Handler
    const [answer, onChangeAnswer] = React.useState('');
  

  return (
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

        {/* Header */}
        <View style={styles.header}>
            <Text style={styles.headerText}>Question 1</Text>
        </View>
        {/* Header End*/}

        {/* Question Container*/}  
        <View style={styles.questionContainer}>
            <Text style={styles.question}>What was the highlight of your&nbsp;day?</Text>
        </View>
        {/* Question Container End*/}  

        {/* Answer Input */}
        <View style={styles.answerInputContainer}>
                <TextInput
                    multiline = {true}
                    numberOfLines = {14}
                    style={styles.answerInput}
                    onChangeText={onChangeAnswer}
                    placeholder='Type your answer here...'
                    value={answer}
                    />
        </View>
        {/* Answer Input End */}

        {/* Buttons*/}
        <View style={styles.buttonContainer}>
            {/* Back Button*/}  
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>&lt;&nbsp;Back</Text>
            </TouchableOpacity>        
            {/* Back Button End*/}  

            {/* Next Button*/}  
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('JQTwo')}>
                <Text style={styles.nextButtonText}>Next&nbsp;&gt;</Text>                
            </TouchableOpacity>        
            {/* Next Button End*/}  

        </View>  
{/* Buttons End*/}
      
    </View>
  );
}

const styles = StyleSheet.create({

  journalQuestionView: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  header: {
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 64,
    padding: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    width: '100%',
  },

  headerText: {
    fontSize: 24,
    fontWeight: 600
  },

  questionContainer:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#000000',
    paddingVertical: 48,
    paddingHorizontal: 24,
  }, 

  question:{
    fontSize: 24,
    color: '#FFFFFF',
  },

  answerInputContainer: {
    flex: 1,
    width: '100%',
    padding: 32,
  },

  answerInput: {

  },

  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 32,
    paddingBottom: 48,
    borderTopWidth: 1,
    borderTopColor: '#000000',
  },

  backButton: {
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#000000',
    textAlign: 'center'
  },

  nextButton: {
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#000000',
    textAlign: 'center',
    backgroundColor: '#000000',

  },

  backButtonText: {
    fontSize: 24,
    fontWeight: 600,
   },

  nextButtonText: {
    fontSize: 24,
    fontWeight: 600,
    color: '#FFFFFF',
   },

});